// Multi-language content data for the personal website
export const content = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      certificates: "Certificates",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      title: "About Me",
      description: [
        "Hello! I'm <strong>Umar Fauzan</strong>, a student at SMK Wikrama Bogor with a passion for technology, game programming, and web design.",
        "I'm currently pursuing my vocational education with the goal of becoming a <strong>Front-End Developer</strong> and <strong>UI/UX Designer</strong>. Hope it comes true!",
        "Born in 2008, I have hobbies like playing games, making games, and my favorite sport is badminton."
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Design",
          skills: [
            { name: "Adobe Premiere", icon: "icons/adobe-premiere.png", progress: 80, description: "Professional video editing software for creating high-quality content." },
            { name: "Capcut", icon: "icons/capcut.png", progress: 85, description: "Mobile video editing app with powerful features for quick edits." },
            { name: "Canva", icon: "icons/canva.webp", progress: 90, description: "Graphic design tool for creating stunning visuals and presentations." },
            { name: "Figma", icon: "icons/figma.png", progress: 85, description: "Collaborative interface design tool for UI/UX prototyping." },
            { name: "Filmora", icon: "icons/filmora.png", progress: 75, description: "User-friendly video editor with advanced effects and templates." }
          ]
        },
        {
          name: "Programming",
          skills: [
            { name: "HTML", icon: "icons/html.png", progress: 95, description: "Markup language for structuring web content." },
            { name: "CSS", icon: "icons/css.png", progress: 90, description: "Styling language for designing web layouts and appearances." },
            { name: "JavaScript", icon: "icons/js.png", progress: 85, description: "Programming language for interactive web development." },
            { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", progress: 40, description: "JavaScript library for building user interfaces." },
            { name: "Bootstrap", icon: "icons/bootstrap.png", progress: 80, description: "CSS framework for responsive and mobile-first web design." },
            { name: "Laravel", icon: "icons/laravel.png", progress: 70, description: "PHP framework for building robust web applications." },
            { name: "PHP", icon: "icons/php.png", progress: 75, description: "Server-side scripting language for dynamic web development." },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", progress: 10, description: "Modern programming language for Android development." },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 5, description: "UI toolkit for building natively compiled applications." }
          ]
        },
        {
          name: "Game Development",
          skills: [
            { name: "Blender", icon: "icons/blender.png", progress: 65, description: "Blender is a free and open-source 3D creation software." },
            { name: "Godot", icon: "icons/godot.png", progress: 60, description: "Godot is a free and open-source game engine for creating 2D and 3D games." },
            { name: "Unity", icon: "icons/unity.png", progress: 60, description: "Unity is a cross-platform game engine used to create 2D, 3D, AR, and VR games and experiences." }
          ]
        }
      ]
    },
    certificates: {
      title: "Certificates",
      items: [
        { id: 1, name: "JavaScript", date: "September-November 2024", image: "sertifikat/Javascript.png" },
        { id: 2, name: "HTML", date: "2025", image: "sertifikat/HTML.png" },
        { id: 3, name: "HTML & CSS", date: "August 2024", image: "sertifikat/HTML_CSS.png" },
        { id: 4, name: "Workshop Build, Play, Earn", date: "April 2025", image: "sertifikat/Workshop_Buldgame.png" },
        { id: 5, name: "Minecraft Hour Of Code", date: "2022", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWVfZXN0YXRlIiwiZG9ub3IiOiJCYWxsbWVyIEdyb3VwIn0.jpg" },
        { id: 6, name: "Hour Of Code", date: "November 2024", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWUiLCJkb25vciI6IkFsZnJlZCBMaW4ifQ.jpg" },
        { id: 7, name: "Linux Fundamental", date: "2025", image: "sertifikat/Fundamental_Linux.png" },
        { id: 8, name: "Japanese Language", date: "2025", image: "sertifikat/certificates japanese.png" }
      ]
    },
    gameProject: {
      title: "Game Project",
      description: "I'm currently developing a 2D top-down game using Unity as the main game engine.",
      note: "*Does not include image assets and others",
      percentage: 25
    },
    projects: {
      title: "Web Projects",
      items: [
        { id: 1, name: "Project 1", description: "Startup : SUAH", image: "img_web/Screenshot 2025-09-19 105532.png", url: "https://hellosuah.netlify.app/" },
        { id: 2, name: "Project 2", description: "Official Sleep Wear.", image: "img_web/Screenshot 2025-09-19 105547.png", url: "https://annishofie.netlify.app/" }
      ]
    },
    contact: {
      title: "Contact Me",
      email: "usahlanbuiness@gmail.com",
      phone: "+6281779546781"
    },
    footer: {
      text: "© 2025 Umar Fauzan Irvan. All rights reserved."
    }
  },
  jp: {
    nav: {
      about: "私について",
      skills: "スキル",
      certificates: "証明書",
      projects: "プロジェクト",
      contact: "連絡先",
    },
    about: {
      title: "私のこと",
      description: [
        "こんにちは！私は<strong>ウマル</strong>です、ボゴールのSMK Wikramaで学ぶ学生で、テクノロジー、ゲームプログラミング、ウェブデザインに興味があります。",
        "私はボゴールのSMK WikramaでSMK教育を受け、<strong>フロントエンドデベロッパー</strong>と<strong>UI/UXデザイナー</strong>になることを目指しています。達成できますように！",
        "2008年生まれで、ゲームをプレイしたり、ゲームを作ったりする趣味があり、お気に入りのスポーツはバドミントンです。"
      ]
    },
    skills: {
      title: "スキル",
      categories: [
        {
          name: "デザイン",
          skills: [
            { name: "アドビプレミア", icon: "icons/adobe-premiere.png", progress: 80, description: "高品質なコンテンツを作成するためのプロフェッショナルなビデオ編集ソフトウェア。" },
            { name: "Capcut", icon: "icons/capcut.png", progress: 85, description: "迅速な編集のための強力な機能を備えたモバイルビデオ編集アプリ。" },
            { name: "Canva", icon: "icons/canva.webp", progress: 90, description: "素晴らしいビジュアルとプレゼンテーションを作成するためのグラフィックデザインツール。" },
            { name: "Figma", icon: "icons/figma.png", progress: 85, description: "UI/UXプロトタイピングのための協働インターフェースデザインツール。" },
            { name: "Filmora", icon: "icons/filmora.png", progress: 75, description: "高度な効果とテンプレートを備えた使いやすいビデオエディタ。" }
          ]
        },
        {
          name: "プログラミング",
          skills: [
            { name: "HTML", icon: "icons/html.png", progress: 95, description: "ウェブコンテンツを構造化するためのマークアップ言語。" },
            { name: "CSS", icon: "icons/css.png", progress: 90, description: "ウェブレイアウトと外観をデザインするためのスタイリング言語。" },
            { name: "JavaScript", icon: "icons/js.png", progress: 85, description: "インタラクティブなウェブ開発のためのプログラミング言語。" },
            { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", progress: 40, description: "ユーザーインターフェースを構築するためのJavaScriptライブラリ。" },
            { name: "Bootstrap", icon: "icons/bootstrap.png", progress: 80, description: "レスポンシブでモバイルファーストのウェブデザインのためのCSSフレームワーク。" },
            { name: "Laravel", icon: "icons/laravel.png", progress: 70, description: "堅牢なウェブアプリケーションを構築するためのPHPフレームワーク。" },
            { name: "PHP", icon: "icons/php.png", progress: 75, description: "動的なウェブ開発のためのサーバーサイドスクリプト言語。" },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", progress: 10, description: "Android開発のためのモダンなプログラミング言語。" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 5, description: "ネイティブコンパイルアプリケーションを構築するためのUIツールキット。" }
          ]
        },
        {
          name: "ゲーム開発",
          skills: [
            { name: "Blender", icon: "icons/blender.png", progress: 65, description: "Blenderは無料のオープンソース3D作成ソフトウェアです。" },
            { name: "Godot", icon: "icons/godot.png", progress: 60, description: "Godotは2Dおよび3Dゲームを作成するための無料でオープンソースのゲームエンジンです。" },
            { name: "Unity", icon: "icons/unity.png", progress: 60, description: "Unity は、2D、3D、AR、VR のゲームや体験を作成するために使用されるクロスプラットフォームのゲームエンジンです。" }
          ]
        }
      ]
    },
    certificates: {
      title: "証明書",
      items: [
        { id: 1, name: "JavaScript", date: "2024年9月-11月", image: "sertifikat/Javascript.png" },
        { id: 2, name: "HTML", date: "2025年", image: "sertifikat/HTML.png" },
        { id: 3, name: "HTML & CSS", date: "2024年8月", image: "sertifikat/HTML_CSS.png" },
        { id: 4, name: "ワークショップ Build, Play, Earn", date: "2025年4月", image: "sertifikat/Workshop_Buldgame.png" },
        { id: 5, name: "Minecraft Hour Of Code", date: "2022年", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWVfZXN0YXRlIiwiZG9ub3IiOiJCYWxsbWVyIEdyb3VwIn0.jpg" },
        { id: 6, name: "Hour Of Code", date: "2024年11月", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWUiLCJkb25vciI6IkFsZnJlZCBMaW4ifQ.jpg" },
        { id: 7, name: "Linux Fundamental", date: "2025年", image: "sertifikat/Fundamental_Linux.png" },
        { id: 8, name: "Japanese Language", date: "2025年", image: "sertifikat/certificates japanese.png" }
      ]
    },
    gameProject: {
      title: "ゲームプロジェクト",
      description: "私は現在、Unityをメインのゲームエンジンとして使用し、2Dトップダウンゲームを開発しています。",
      note: "*画像アセットなどはまだ含まれていません",
      percentage: 25
    },
    projects: {
      title: "ウェブプロジェクト",
      items: [
        { id: 1, name: "プロジェクト 1", description: "スタートアップ: SUAH", image: "img_web/Screenshot 2025-09-19 105532.png", url: "https://hellosuah.netlify.app/" },
        { id: 2, name: "プロジェクト 2", description: "公式スリープウェア。", image: "img_web/Screenshot 2025-09-19 105547.png", url: "https://annishofie.netlify.app/" }
      ]
    },
    contact: {
      title: "お問い合わせ",
      email: "usahlanbuiness@gmail.com",
      phone: "+6281779546781"
    },
    footer: {
      text: "© 2025 ウマル・ファウザン・イルヴァン。全著作権所有。"
    }
  },
  ar: {
    nav: {
      about: "عني",
      skills: "المهارات",
      certificates: "الشهادات",
      projects: "المشاريع",
      contact: "اتصل بي",
    },
    about: {
      title: "عني",
      description: [
        "مرحباً! أنا <strong>عمر</strong>، طالب في SMK Wikrama Bogor مهتم بالتكنولوجيا وبرمجة الألعاب وتصميم الويب.",
        "أدرس حالياً في SMK Wikrama Bogor بهدف أن أصبح <strong>مطور واجهة أمامية</strong> و<strong>مصمم UI/UX</strong>. أتمنى أن يتحقق!",
        "ولدت عام 2008، لدي هوايات مثل لعب الألعاب وصنع الألعاب، ورياضتي المفضلة هي الريشة الطائرة."
      ]
    },
    skills: {
      title: "المهارات",
      categories: [
        {
          name: "التصميم",
          skills: [
            { name: "Adobe Premiere", icon: "icons/adobe-premiere.png", progress: 80, description: "برنامج تحرير فيديو احترافي لإنشاء محتوى عالي الجودة." },
            { name: "Capcut", icon: "icons/capcut.png", progress: 85, description: "تطبيق تحرير فيديو للهاتف المحمول مع ميزات قوية للتحرير السريع." },
            { name: "Canva", icon: "icons/canva.webp", progress: 90, description: "أداة تصميم جرافيك لإنشاء صور وعروض تقديمية مذهلة." },
            { name: "Figma", icon: "icons/figma.png", progress: 85, description: "أداة تصميم واجهات تعاونية لنمذجة UI/UX." },
            { name: "Filmora", icon: "icons/filmora.png", progress: 75, description: "محرر فيديو سهل الاستخدام مع تأثيرات وقوالب متقدمة." }
          ]
        },
        {
          name: "البرمجة",
          skills: [
            { name: "HTML", icon: "icons/html.png", progress: 95, description: "لغة ترميز لهيكلة محتوى الويب." },
            { name: "CSS", icon: "icons/css.png", progress: 90, description: "لغة تنسيق لتصميم تخطيطات ومظهر الويب." },
            { name: "JavaScript", icon: "icons/js.png", progress: 85, description: "لغة برمجة لتطوير ويب تفاعلي." },
            { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", progress: 40, description: "مكتبة JavaScript لبناء واجهات المستخدم." },
            { name: "Bootstrap", icon: "icons/bootstrap.png", progress: 80, description: "إطار عمل CSS لتصميم ويب متجاوب ومتنقل أولاً." },
            { name: "Laravel", icon: "icons/laravel.png", progress: 70, description: "إطار عمل PHP لبناء تطبيقات ويب قوية." },
            { name: "PHP", icon: "icons/php.png", progress: 75, description: "لغة برمجة نصية من جانب الخادم للتطوير الديناميكي للويب." },
            { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", progress: 10, description: "لغة برمجة حديثة لتطوير تطبيقات الأندرويد." },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 5, description: "أدوات واجهة المستخدم لبناء تطبيقات مترجمة بشكل أصلي." }
          ]
        },
        {
          name: "تطوير الألعاب",
          skills: [
            { name: "Blender", icon: "icons/blender.png", progress: 65, description: "Blender هو برنامج إنشاء 3D مجاني ومفتوح المصدر." },
            { name: "Godot", icon: "icons/godot.png", progress: 60, description: "Godot هو محرك ألعاب مجاني ومفتوح المصدر لإنشاء ألعاب 2D و 3D." },
            { name: "Unity", icon: "icons/unity.png", progress: 60, description: "Unity هو محرك ألعاب متعدد المنصات يستخدم لإنشاء ألعاب وتجارب 2D و 3D و AR و VR." }
          ]
        }
      ]
    },
    certificates: {
      title: "الشهادات",
      items: [
        { id: 1, name: "JavaScript", date: "سبتمبر-نوفمبر 2024", image: "sertifikat/Javascript.png" },
        { id: 2, name: "HTML", date: "2025", image: "sertifikat/HTML.png" },
        { id: 3, name: "HTML & CSS", date: "أغسطس 2024", image: "sertifikat/HTML_CSS.png" },
        { id: 4, name: "ورشة عمل Build, Play, Earn", date: "أبريل 2025", image: "sertifikat/Workshop_Buldgame.png" },
        { id: 5, name: "Minecraft Hour Of Code", date: "2022", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWVfZXN0YXRlIiwiZG9ub3IiOiJCYWxsbWVyIEdyb3VwIn0.jpg" },
        { id: 6, name: "Hour Of Code", date: "نوفمبر 2024", image: "sertifikat/eyJuYW1lIjoiVW1hciBGYXV6YW4gSXJ2YW4iLCJjb3Vyc2UiOiJtZWUiLCJkb25vciI6IkFsZnJlZCBMaW4ifQ.jpg" },
        { id: 7, name: "Linux Fundamental", date: "2025", image: "sertifikat/Fundamental_Linux.png" },
        { id: 8, name: "اللغة اليابانية", date: "2025", image: "sertifikat/certificates japanese.png" }
      ]
    },
    gameProject: {
      title: "مشروع اللعبة",
      description: "أقوم حالياً بتطوير لعبة 2D من منظور علوي باستخدام Unity كمحرك اللعبة الرئيسي.",
      note: "*لا يشمل الأصول الرسومية وغيرها",
      percentage: 25
    },
    projects: {
      title: "مشاريع الويب",
      items: [
        { id: 1, name: "المشروع 1", description: "شركة ناشئة: SUAH", image: "img_web/Screenshot 2025-09-19 105532.png", url: "https://hellosuah.netlify.app/" },
        { id: 2, name: "المشروع 2", description: "ملابس نوم رسمية.", image: "img_web/Screenshot 2025-09-19 105547.png", url: "https://annishofie.netlify.app/" }
      ]
    },
    contact: {
      title: "اتصل بي",
      email: "usahlanbuiness@gmail.com",
      phone: "+6281779546781"
    },
    footer: {
      text: "© 2025 عمر فوزان إرفان. جميع الحقوق محفوظة."
    }
  },
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
            { name: "Filmora", icon: "icons/filmora.png", progress: 75, description: "Editor video yang mudah digunakan dengan efek dan template canggih." }
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
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 5, description: "UI toolkit untuk membangun aplikasi yang dikompilasi secara native." }
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
      text: "© 2025 Umar Fauzan Irvan. Hak cipta dilindungi."
    }
  },
  mg: {
    nav: {
      about: "Tantang",
      skills: "Keterampilan",
      certificates: "Sertifikat",
      projects: "Proyek",
      contact: "Kontak",
    },
    about: {
      title: "Tantang Ambo",
      description: [
        "Apak kaba! Ambo <strong>Umar Fauzan</strong>, seorang siswa di SMK Wikrama Bogor yang tertarik dengan teknologi, pemrograman game, dan desain web.",
        "Saat ini ambo sadang menempuh pendidikan kejuruan dengan tujuan manjadi <strong>Front-End Developer</strong> dan <strong>UI/UX Designer</strong>. Moga-moga tercapai!",
        "Lahir tahun 2008, ambo punyo hobi main game, membuat game, dan olahraga favorit ambo adolah badminton."
      ]
    },
    skills: {
      title: "Keterampilan",
      categories: [
        {
          name: "Desain",
          skills: [
            { name: "Adobe Premiere", icon: "icons/adobe-premiere.png", progress: 80, description: "Software editing video profesional untuk membuat konten berkualitas tinggi." },
            { name: "Capcut", icon: "icons/capcut.png", progress: 85, description: "Aplikasi editing video mobile dengan fitur canggih untuk edit cepat." },
            { name: "Canva", icon: "icons/canva.webp", progress: 90, description: "Alat desain grafis untuk membuat visual dan presentasi yang menakjubkan." },
            { name: "Figma", icon: "icons/figma.png", progress: 85, description: "Alat desain antarmuka kolaboratif untuk prototyping UI/UX." },
            { name: "Filmora", icon: "icons/filmora.png", progress: 75, description: "Editor video yang mudah digunakan dengan efek dan template canggih." }
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
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", progress: 5, description: "UI toolkit for building natively compiled applications." }
          ]
        },
        {
          name: "Pengembangan Game",
          skills: [
            { name: "Blender", icon: "icons/blender.png", progress: 65, description: "Blender adolah software pembuatan 3D gratis dan open-source." },
            { name: "Godot", icon: "icons/godot.png", progress: 60, description: "Godot adolah game engine gratis dan open-source untuk membuat game 2D dan 3D." },
            { name: "Unity", icon: "icons/unity.png", progress: 60, description: "Unity adolah game engine lintas platform untuk membuat game 2D, 3D, AR, dan VR." }
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
      description: "Ambo sadang mengembangkan game 2D top-down menggunakan Unity sebagai game engine utama.",
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
      title: "Hubungi Ambo",
      email: "usahlanbuiness@gmail.com",
      phone: "+6281779546781"
    },
    footer: {
      text: "© 2025 Umar Fauzan Irvan. Hak cipta dilindungi."
    }
  }
};