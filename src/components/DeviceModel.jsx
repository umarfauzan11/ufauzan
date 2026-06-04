import { useRef, useState, useEffect, Component } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, RoundedBox } from '@react-three/drei'
import { Suspense } from 'react'

// === ERROR BOUNDARY ===
class CanvasErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(error) {
        console.warn('3D Canvas error:', error.message)
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    width: '100%', height: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#f0f0f7', borderRadius: '16px',
                    flexDirection: 'column', gap: '8px'
                }}>
                    <span style={{ fontSize: '2rem' }}>💻</span>
                    <span style={{ fontSize: '0.875rem', opacity: 0.6 }}>3D Preview tidak tersedia</span>
                </div>
            )
        }
        return this.props.children
    }
}

// === MACBOOK 3D MODEL ===
function MacBookModel({ screenshotUrl, shakeDir, transitionId }) {
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

        // Detect click baru → trigger shake
        if (transitionId !== prevTransitionId.current) {
            prevTransitionId.current = transitionId
            shakeTimer.current = 0.5  // 0.5 detik shake
        }

        // Shake animation
        if (shakeTimer.current > 0) {
            shakeTimer.current -= delta
            const t = Math.max(shakeTimer.current / 0.5, 0)  // 1 → 0
            const ease = t * t  // smooth decay

            const dir = shakeDir === 'next' ? -1 : 1
            group.current.rotation.y = dir * 0.1 * ease
            group.current.rotation.z = dir * 0.025 * ease
        } else {
            // Smooth return to center
            group.current.rotation.y *= 0.9
            group.current.rotation.z *= 0.9
        }
    })


    return (
        <group ref={group}>
            {/* === SCREEN LID (tilted back) === */}
            <group position={[0, 1.55, -1.15]} rotation={[-0.35, 0, 0]}>
                {/* Screen outer shell — space gray */}
                <RoundedBox args={[5.2, 3.4, 0.08]} radius={0.08} smoothness={4}>
                    <meshStandardMaterial color="#4a4a50" roughness={0.35} metalness={0.7} />
                </RoundedBox>

                {/* Screen bezel — black */}
                {/* <RoundedBox args={[4.9, 3.15, 0.01]} radius={0.05} smoothness={4} position={[0, 0, 0.045]}>
          <meshStandardMaterial color="#111111" roughness={0.8} />
        </RoundedBox> */}

                {/* Screen display — shows screenshot */}
                <mesh position={[0, 0.05, 0.05]}>
                    <planeGeometry args={[4.9, 2.9]} />
                    <meshBasicMaterial ref={materialRef} map={texture} transparent opacity={0} />
                </mesh>

                {/* Apple logo on back */}
                <mesh position={[0, 0, -0.05]}>
                    <circleGeometry args={[0.15, 32]} />
                    <meshStandardMaterial color="#c0c0c0" roughness={0.2} metalness={0.8} />
                </mesh>
            </group>

            {/* === KEYBOARD BASE === */}
            <group position={[0, 0, 0.2]}>
                {/* Base body */}
                <RoundedBox args={[5.2, 0.08, 3.4]} radius={0.04} smoothness={4}>
                    <meshStandardMaterial color="#4a4a50" roughness={0.35} metalness={0.7} />
                </RoundedBox>

                {/* Keyboard area — darker inset */}
                <RoundedBox args={[4.2, 0.01, 1.1]} radius={0.02} smoothness={4} position={[0, 0.045, -0.1]}>
                    <meshStandardMaterial color="#2a2a2e" roughness={0.9} />
                </RoundedBox>

                {/* Trackpad */}
                <RoundedBox args={[2, 0.01, 0.2]} radius={0.03} smoothness={4} position={[0, 0.02, 0.65]}>
                    <meshStandardMaterial color="#555558" roughness={0.3} metalness={0.5} />
                </RoundedBox>

                {/* Speaker grilles — left */}
                {[-2.1, -2.2, -2.3, -2.4].map((x, i) => (
                    <mesh key={`sl-${i}`} position={[x, 0.045, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <boxGeometry args={[0.06, 0.6, 0.005]} />
                        <meshStandardMaterial color="#3a3a3e" />
                    </mesh>
                ))}

                {/* Speaker grilles — right */}
                {[2.1, 2.2, 2.3, 2.4].map((x, i) => (
                    <mesh key={`sr-${i}`} position={[x, 0.045, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <boxGeometry args={[0.06, 0.6, 0.005]} />
                        <meshStandardMaterial color="#3a3a3e" />
                    </mesh>
                ))}

                {/* Front notch for opening */}
                <RoundedBox args={[1.5, 0.005, 0.05]} radius={0.01} smoothness={4} position={[0, 0.04, 1.72]}>
                    <meshStandardMaterial color="#3a3a3e" />
                </RoundedBox>
            </group>

            {/* Screen hinge connection */}
            <RoundedBox args={[4.5, 0.06, 0.1]} radius={0.02} smoothness={4} position={[0, 0.04, -1.45]}>
                <meshStandardMaterial color="#3a3a3e" roughness={0.5} metalness={0.6} />
            </RoundedBox>
        </group>
    )
}

// === Loading Fallback ===
function LoadingFallback() {
    return (
        <mesh>
            {/* Laptop silhouette — flat rectangle */}
            <RoundedBox args={[5.2, 0.08, 3.4]} radius={0.04} smoothness={4} position={[0, 0, 0.2]}>
                <meshStandardMaterial color="#4a4a50" transparent opacity={0.3} wireframe />
            </RoundedBox>
            <RoundedBox args={[5.2, 3.4, 0.08]} radius={0.08} smoothness={4} position={[0, 1.55, -1.15]} rotation={[-0.35, 0, 0]}>
                <meshStandardMaterial color="#4a4a50" transparent opacity={0.3} wireframe />
            </RoundedBox>
        </mesh>
    )
}


// === Main Export ===
export default function DeviceModel({ screenshotUrl, shakeDir, transitionId }) {
    return (
        <div style={{ width: '100%', height: '106vh' }}>
            <CanvasErrorBoundary>
                <Canvas
                    camera={{ position: [0, 0, 8.3], fov: 35 }}
                    dpr={[1, 1.2]}
                    gl={{ antialias: true, alpha: true }}
                    style={{ background: 'transparent' }}
                >
                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 8, 5]} intensity={1} />
                    <directionalLight position={[-5, 5, -3]} intensity={0.3} color="#AAB99A" />
                    <pointLight position={[0, 3, 3]} intensity={0.4} color="#ffffff" />

                    <Suspense fallback={<LoadingFallback />}>
                        <MacBookModel screenshotUrl={screenshotUrl} shakeDir={shakeDir} transitionId={transitionId} />
                    </Suspense>
                </Canvas>
            </CanvasErrorBoundary>
        </div>
    )
}
