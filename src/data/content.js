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
        "Halo! Saya <strong>Umar Fauzan</strong>, seorang siswa di SMK Wikrama Bogor dengan ketertarikan pada teknologi, pemrograman game, dan desain web.",
        "Saat ini saya sedang menempuh pendidikan kejuruan dengan tujuan menjadi <strong>Front-End Developer</strong> dan <strong>UI/UX Designer</strong>. Semoga tercapai!",
        "Lahir tahun 2008, saya memiliki hobi bermain game, membuat game, dan olahraga favorit saya adalah badminton."
      ]
    },
    skills: {
      title: "Keahlian",
      categories: [
        {
          name: "Desain",
          skills: [
            { name: "Adobe Premiere", icon: "icons/adobe-premiere.png", progress: 80, description: "Software editing video profesional untuk membuat konten berkualitas tinggi." },
            { name: "Capcut", icon: "icons/capcut.png", progress: 85, description: "Aplikasi editing video mobile dengan fitur canggih untuk edit cepat." },
            { name: "Canva", icon: "icons/canva.webp", progress: 90, description: "Alat desain grafis untuk membuat visual dan presentasi yang menakjubkan." },
            { name: "Figma", icon: "icons/figma.png", progress: 85, description: "Alat desain antarmuka kolaboratif untuk prototyping UI/UX." },
            { name: "Filmora", icon: "icons/filmora.png", progress: 75, description: "Editor video yang mudah digunakan dengan efek dan template canggih." },
            { name: "Ibis Paint", icon: "https://play-lh.googleusercontent.com/s8moWkCF9wE-ynJgNyq8k3uhhVlbQLdphqTYJWkrsLRxkFZxx9FvykHmwXYmTl_h0l8", progress: 25, description: "Aplikasi lukisan digital populer untuk membuat ilustrasi dan karya seni." }
          ]
        },
        {
          name: "Pemrograman",
          skills: [
            { name: "HTML", icon: "icons/html.png", progress: 95, description: "Bahasa markup untuk menstrukturkan konten web." },
            { name: "CSS", icon: "icons/css.png", progress: 90, description: "Bahasa styling untuk mendesain layout dan tampilan web." },
            { name: "JavaScript", icon: "icons/js.png", progress: 85, description: "Bahasa pemrograman untuk pengembangan web interaktif." },
            { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", progress: 40, description: "Library JavaScript untuk membangun antarmuka pengguna." },
            { name: "Bootstrap", icon: "icons/bootstrap.png", progress: 80, description: "Framework CSS untuk desain web responsif dan mobile-first." },
            { name: "Laravel", icon: "icons/laravel.png", progress: 70, description: "Framework PHP untuk membangun aplikasi web yang handal." },
            { name: "PHP", icon: "icons/php.png", progress: 75, description: "Bahasa scripting server-side untuk pengembangan web dinamis." },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", progress: 10, description: "Bahasa pemrograman modern untuk pengembangan Android." },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 5, description: "UI toolkit untuk membangun aplikasi yang dikompilasi secara native." },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", progress: 15, description: "Database NoSQL untuk menyimpan dan mengelola data berorientasi dokumen." },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", progress: 20, description: "Sistem database relasional open-source yang canggih." }
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
        { id: 4, name: "Workshop Build, Play, Earn", date: "April 2025", image: "sertifikat/Workshop_Buldgame.png" },
        { id: 5, name: "Minecraft Hour Of Code", date: "2022", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWVfZXN0YXRlIiwiZG9ub3IiOiJCYWxsbWVyIEdyb3VwIn0.jpg" },
        { id: 6, name: "Hour Of Code", date: "November 2024", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWUiLCJkb25vciI6IkFsZnJlZCBMaW4ifQ.jpg" },
        { id: 7, name: "Linux Fundamental", date: "2025", image: "sertifikat/Fundamental_Linux.png" },
        { id: 8, name: "Bahasa Jepang", date: "2025", image: "sertifikat/certificates japanese.png" }
      ]
    },
    gameProject: {
      title: "Proyek Game",
      description: "Saya sedang mengembangkan game 2D top-down menggunakan Unity sebagai game engine utama.",
      note: "*Belum termasuk asset gambar dan lainnya",
      percentage: 25
    },
    projects: {
      title: "Proyek Web",
      items: [
        { id: 1, name: "Proyek 1", description: "Startup : SUAH", image: "img_web/Screenshot 2025-09-19 105532.png", url: "https://hellosuah.netlify.app/" },
        { id: 2, name: "Proyek 2", description: "Official Sleep Wear.", image: "img_web/Screenshot 2025-09-19 105547.png", url: "https://annishofie.netlify.app/" }
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