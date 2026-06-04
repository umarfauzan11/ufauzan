import { useRef, useState, useEffect, Component } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, RoundedBox } from '@react-three/drei'
import { Suspense } from 'react'


class CanvasErrorBoundary extends Component {
    constructor(props) { super(props); this.state = { hasError: false } }
    static getDerivedStateFromError() { return { hasError: true } }
    componentDidCatch(error) { console.warn('3D Canvas error:', error.message) }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f7', borderRadius: '16px', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '2rem' }}>📱</span>
                    <span style={{ fontSize: '0.875rem', opacity: 0.6 }}>3D Preview tidak tersedia</span>
                </div>
            )
        }
        return this.props.children
    }
}

function TabletModel({ screenshotUrl, shakeDir, transitionId }) {
    const group = useRef()
    const texture = useTexture(screenshotUrl)
    const shakeTimer = useRef(0)
    const prevTransitionId = useRef(0)
    const materialRef = useRef()

    useFrame(() => {
        if (materialRef.current && materialRef.current.opacity < 1) {
            materialRef.current.opacity = Math.min(materialRef.current.opacity + 0.02, 1)
        }
    })

    useFrame((state, delta) => {
        if (!group.current) return
        if (transitionId !== prevTransitionId.current) {
            prevTransitionId.current = transitionId
            shakeTimer.current = 0.5
        }
        if (shakeTimer.current > 0) {
            shakeTimer.current -= delta
            const t = Math.max(shakeTimer.current / 0.5, 0)
            const ease = t * t
            const dir = shakeDir === 'next' ? -1 : 1
            group.current.rotation.y = dir * 0.08 * ease
        } else {
            group.current.rotation.y *= 0.9
        }
    })

    return (
        <group ref={group} rotation={[-0.15, 0, 0]}>
            {/* Tablet body — landscape naturally */}
            <RoundedBox args={[5.5, 3.5, 0.15]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#1a1a2e" roughness={0.25} metalness={0.8} />
            </RoundedBox>

            {/* Screen bezel */}
            <RoundedBox args={[5.2, 3.3, 0.01]} radius={0.15} smoothness={4} position={[0, 0, 0.08]}>
                <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
            </RoundedBox>

            {/* Screen display — landscape ratio */}
            <mesh position={[0, 0, 0.09]}>
                <planeGeometry args={[5.3, 3.3]} />
                <meshBasicMaterial ref={materialRef} map={texture} transparent opacity={0} />
            </mesh>

            {/* Front camera — center top */}
            <mesh position={[0, 1.45, 0.19]}>
                <circleGeometry args={[0.05, 32]} />
                <meshStandardMaterial color="#222230" roughness={0.3} metalness={0.6} />
            </mesh>

            {/* Back camera — top left */}
            <group position={[-2.2, 1.3, -0.09]}>
                <RoundedBox args={[0.5, 0.5, 0.06]} radius={0.06} smoothness={4}>
                    <meshStandardMaterial color="#222230" roughness={0.3} metalness={0.7} />
                </RoundedBox>
                <mesh position={[0, 0, -0.04]}>
                    <circleGeometry args={[0.1, 32]} />
                    <meshStandardMaterial color="#111118" roughness={0.1} metalness={0.9} />
                </mesh>
            </group>
        </group>
    )
}



function LoadingFallback() {
    return (
        <mesh>
            <RoundedBox args={[5.5, 3.5, 0.15]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color="#1a1a2e" transparent opacity={0.3} wireframe />
            </RoundedBox>
        </mesh>
    )
}


export default function CertificateDeviceModel({ screenshotUrl, shakeDir, transitionId }) {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <CanvasErrorBoundary>
                <Canvas
                    camera={{ position: [0, 0.5, 5.6], fov: 35 }}
                    dpr={[1, 1.2]}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                >
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 8, 5]} intensity={0.9} />
                    <directionalLight position={[-5, 3, -3]} intensity={0.3} color="#AAB99A" />
                    <pointLight position={[0, 2, 4]} intensity={0.3} color="#ffffff" />

                    <Suspense fallback={<LoadingFallback />}>
                        <TabletModel screenshotUrl={screenshotUrl} shakeDir={shakeDir} transitionId={transitionId} />
                    </Suspense>
                </Canvas>
            </CanvasErrorBoundary>
        </div>
    )
}
