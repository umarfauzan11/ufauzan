// Konten website Bahasa Indonesia saja
export const content = {
  id: {
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      certificates: "Sertifikat",
      projects: "Proyek",
      contact: "Kontak",
    },
    about: {
      title: "Tentang Saya",
      description: [
        "Halo! Saya <strong>Umar Fauzan Irvan</strong>, siswa <strong>SMK Wikrama Bogor</strong> yang memiliki minat di bidang pengembangan web, aplikasi mobile, UI/UX, dan game.",
        "Saat ini saya terus mengembangkan kemampuan sebagai <strong>Fullstack Developer</strong> dengan membangun berbagai proyek dan mempelajari teknologi baru.",
        "Di luar belajar, saya senang membuat game, membaca buku, dan bermain badminton."
      ]
    },
    skills: {
      title: "Keahlian",
      description: [
        "Beberapa Skill yang saya tunjukan di bawah berasal dari Belajar mandiri dan Pemebelajaran langsung dari Sekolah"
      ],
      categories: [
        {
          name: "Desain",
          skills: [
            { name: "Adobe Premiere", icon: "icons/adobe-premiere.png", progress: 80, description: "Software editing video profesional untuk membuat konten berkualitas tinggi." },
            { name: "Capcut", icon: "icons/capcut.png", progress: 95, description: "Aplikasi editing video mobile dengan fitur canggih untuk edit cepat." },
            { name: "Canva", icon: "icons/canva.webp", progress: 90, description: "Alat desain grafis untuk membuat visual dan presentasi yang menakjubkan." },
            { name: "Figma", icon: "icons/figma.png", progress: 85, description: "Alat desain antarmuka kolaboratif untuk prototyping UI/UX." },
            { name: "Filmora", icon: "icons/filmora.png", progress: 90, description: "Editor video yang mudah digunakan dengan efek dan template canggih." },
            { name: "Ibis Paint", icon: "https://play-lh.googleusercontent.com/s8moWkCF9wE-ynJgNyq8k3uhhVlbQLdphqTYJWkrsLRxkFZxx9FvykHmwXYmTl_h0l8", progress: 25, description: "Aplikasi lukisan digital populer untuk membuat ilustrasi dan karya seni." }
          ]
        },
        {
          name: "Pemrograman",
          skills: [
            { name: "HTML", icon: "icons/html.png", progress: 97, description: "Bahasa markup untuk menstrukturkan konten web." },
            { name: "CSS", icon: "icons/css.png", progress: 90, description: "Bahasa styling untuk mendesain layout dan tampilan web." },
            { name: "JavaScript", icon: "icons/js.png", progress: 80, description: "Bahasa pemrograman untuk pengembangan web interaktif." },
            { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", progress: 70, description: "Library JavaScript untuk membangun antarmuka pengguna." },
            { name: "Bootstrap", icon: "icons/bootstrap.png", progress: 80, description: "Framework CSS untuk desain web responsif dan mobile-first." },
            { name: "Laravel", icon: "icons/laravel.png", progress: 55, description: "Framework PHP untuk membangun aplikasi web yang handal." },
            { name: "PHP", icon: "icons/php.png", progress: 60, description: "Bahasa scripting server-side untuk pengembangan web dinamis." },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", progress: 10, description: "Bahasa pemrograman modern untuk pengembangan Android." },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 35, description: "UI toolkit untuk membangun aplikasi yang dikompilasi secara native." },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", progress: 15, description: "Database NoSQL untuk menyimpan dan mengelola data berorientasi dokumen." },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", progress: 20, description: "Sistem database relasional open-source yang canggih." },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", progress: 45, description: "Platform perangkat lunak yang digunakan oleh developer untuk mendesain, membangun, menguji, dan mendokumentasikan API." }
          ]
        },
        {
          name: "Pengembangan Game",
          skills: [
            { name: "Blender", icon: "icons/blender.png", progress: 65, description: "Blender adalah software pembuatan 3D gratis dan open-source." },
            { name: "Godot", icon: "icons/godot.png", progress: 60, description: "Godot adalah game engine gratis dan open-source untuk membuat game 2D dan 3D." },
            { name: "Unity", icon: "icons/unity.png", progress: 60, description: "Unity adalah game engine lintas platform untuk membuat game 2D, 3D, AR, dan VR." }
          ]
        }
      ]
    },
    certificates: {
      title: "Sertifikat",
      items: [
        { id: 1, name: "JavaScript", date: "September-November 2024", image: "sertifikat/Javascript.png" },
        { id: 2, name: "HTML", date: "2025", image: "sertifikat/HTML.png" },
        { id: 3, name: "HTML & CSS", date: "Agustus 2024", image: "sertifikat/HTML_CSS.png" },
        { id: 3, name: "React JS", date: "Mei 2026", image: "sertifikat/Sertifikat_React.png" },
        { id: 3, name: "Javascript", date: "Mei 2026", image: "sertifikat/Sertifikat_JS.png" },
        { id: 4, name: "Workshop Build, Play, Earn", date: "April 2025", image: "sertifikat/Workshop_Buldgame.png" },
        { id: 5, name: "Minecraft Hour Of Code", date: "2022", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWVfZXN0YXRlIiwiZG9ub3IiOiJCYWxsbWVyIEdyb3VwIn0.jpg" },
        { id: 6, name: "Hour Of Code", date: "November 2024", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWUiLCJkb25vciI6IkFsZnJlZCBMaW4ifQ.jpg" },
        { id: 7, name: "Linux Fundamental", date: "2025", image: "sertifikat/Fundamental_Linux.png" },
        { id: 8, name: "Bahasa Jepang", date: "2025", image: "sertifikat/certificates japanese.png" },
        { id: 9, name: "Flutter Fundamental", date: "2025", image: "sertifikat/Sertifikat_Flutter.png" }
      ]
    },
    gameProject: {
      title: "Proyek Game",
      description: "Saya sedang mengembangkan game 2D top-down menggunakan Unity sebagai game engine utama.",
      note: "*Belum termasuk asset gambar dan lainnya",
      percentage: 25
    },
    projects: {
      title: "Projek",
      items: [
        { id: 1, name: "Proyek 1", description: "Startup : SUAH", image: "img_web/Screenshot 2025-09-19 105532.png", url: "https://hellosuah.netlify.app/" },
        { id: 2, name: "Proyek 2", description: "Official Sleep Wear Website.", image: "img_web/Screenshot 2025-09-19 105547.png", url: "https://annishofie.netlify.app/" },
        { id: 3, name: "Proyek 3", description: "Official Social Media.", image: "img_web/uweblysc.png", url: "https://uwebly.com" },
        { id: 4, name: "Proyek 4", description: "Flutter App.", image: "img_web/kedaimasamba.png", url: "https://github.com/umarfauzan11/Kedai-Mas-Amba" },
        { id: 5, name: "Proyek 5", description: "Portofolio Web v1.", image: "img_web/portofoliov1.png", url: "https://umarfauzanweb.netlify.app/" },
        { id: 6, name: "Proyek 6", description: "Portofolio Web Luffi.J.", image: "img_web/portofolioluffi.png", url: "https://luffi-isya-januar.netlify.app/" },
        { id: 7, name: "Proyek 7", description: "BzQuizz", image: "img_web/bzquizz.png", url: "https://bzquizz.vercel.app/" },
        { id: 8, name: "Proyek 8", description: "PHP Perbandingan", image: "img_web/phpperbandingan.png", url: "https://github.com/umarfauzan11/perbandingan-angka" },
      ]
    },
    contact: {
      title: "Hubungi Saya",
      email: "usahlanbuiness@gmail.com",
      phone: "+6281779546781"
    },
    footer: {
      text: "© 2026 Umar Fauzan Irvan. Hak cipta dilindungi."
    }
  }
};