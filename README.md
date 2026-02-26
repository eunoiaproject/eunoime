# Eunoime
<div align="center">
<img width="1200" height="475" alt="Logo" src="https://github.com/eunoiaproject/eunoime/assets/images/logos/eunoiaverse.svg" />
</div>

# HTML: Struktur dasar sebuah halaman web.
# CSS: Gaya dan tampilan halaman web.
JavaScript: Interaktivitas dan dinamika halaman web.
# Framework/Library: Jika ingin mempercepat pengembangan, pertimbangkan framework seperti React, Vue, atau Angular, atau library seperti jQuery.
Tujuan Website: Apa yang ingin kamu capai dengan website ini? Apakah untuk menampilkan informasi, menjual produk, atau membuat aplikasi web?
Tingkat Kemampuan: Seberapa mahir kamu dalam pemrograman? Jika masih pemula, saya akan memberikan panduan yang lebih detail.
Setelah kita menentukan hal-hal di atas, saya bisa memberikan contoh kode atau menjelaskan konsep tertentu. Berikut beberapa hal yang bisa kita bahas:
# Struktur dasar HTML: Cara membuat tag, atribut, dan elemen HTML.
# Styling dengan CSS: Cara mengatur tata letak, warna, font, dan elemen lainnya.
# JavaScript interaktif: Cara membuat tombol yang berfungsi, animasi, dan efek lainnya.
# Framework/Library: Cara menggunakan komponen dan fitur yang disediakan oleh framework atau library.
# Responsivitas: Cara membuat website yang bisa menyesuaikan tampilan di berbagai ukuran layar.
Optimasi: Cara membuat website yang cepat dan ramah SEO.
Contoh Sederhana:

# HTML
```
 <!DOCTYPE html>
<html lang="en-ID">
<head>
    <title>Eunoiaverse - Platform</title>
    <meta name="charset" type="UTF-8mb4">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="http-equiv" type="X-UA-Compatible" content="ms=edge">
    <link rel="favicon" href="/favicon.ico">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* --- COMPONENT NEUMORPHIC BASE --*/
:root {
--primary:#cdcdcd;
--secondary:#df0000;
--light-shadow:#464646;
--dark-shadow:#b6b6b6;
--light:;
--dark:;
--sh-dark:#bbbbbb;
--sh-light: #cdcdcd;
--accent: #3b82f6;
        }
/* --- BODY --*/
        body {
        font-family: 'Inter', sans-serif;
        background-color:var(--primary);
        color: rgb(46, 46, 46);
        margin: 0;
        overflow-x: hidden;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Neumorphic shadow constants for dark mode */
        .neu-flat { box-shadow: 8px 8px 16px #0d0d0d, -8px -8px 16px #212121; }
        .neu-pressed { box-shadow: inset 4px 4px 8px #0d0d0d, inset -4px -4px 8px #212121; }
        .neu-button:active { box-shadow: inset 4px 4px 8px #0d0d0d, inset -4px -4px 8px #212121; transform: scale(0.98); }
        
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .animate-slide-up { animation: slideUp 0.4s ease-out forwards; }
/* -- HEADER ---*/


        /* --- NAVIGATION BAR --- */
        #bottom-nav {
            position: absolute; 
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.3); 
            backdrop-filter: blur(10px);
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            z-index: 1000;
            border-top: 1px solid rgba(255, 255, 255, 0.2); 
            border-bottom-left-radius: 2.5rem;
            border-bottom-right-radius: 2.5rem;
        }
        .nav-items {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            width: 100%;
            max-width: 500px;
        }
        .nav-item {
            flex: 1;
            text-align: center;
        }
        .nav-item a {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 12px 5px;
            text-decoration: none;
            color: #4b5563; 
            transition: color 0.3s ease, background-color 0.3s ease;
        }
        .nav-item a i {
            font-size: 1.4em;
            margin-bottom: 5px;
        }
        .nav-item a span {
            font-size: 0.75em;
            font-weight: 500;
        }
        .nav-item a:hover {
            color: #132A13;
        }
        .nav-item.active a {
            color: #132A13; 
        }
        .auth-container, #app-container {
            aspect-ratio: 9 / 16;
            max-height: 95vh;
            border-radius: 2.5rem;
            box-shadow: 0 0 40px rgba(0,0,0,0.5), inset 0 0 10px #000;
        }
</style>
<link rel="stylesheet" href="/index.css">
</head>
<body class="min-h-screen flex flex-col items-center">
    <header class="w-full max-w-lg p-6 flex justify-between items-center z-30">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl neu-flat flex items-center justify-center">
                <img src="https://placehold.co/32" alt="Logo" class="w-6 h-6 rounded-md">
            </div>
            <h1 class="text-xl font-black tracking-tight">Eunoiaverse</h1>
        </div>
        <button class="w-10 h-10 rounded-full neu-flat flex items-center justify-center text-gray-400 neu-button">
            <i class="fas fa-bell"></i>
        </button>
    </header>

    
    <!-- MAIN HOME -->
<main id="app-pages-container" class="w-full max-w-lg flex-grow px-4 pb-32">
    <section id="home-page" class="space-y-8">
        <div class="flex space-x-4 overflow-x-auto py-4 custom-scrollbar">
            <div class="flex-none flex flex-col items-center space-y-2">
                <div
                    class="w-16 h-16 rounded-full neu-flat flex items-center justify-center border-2 border-dashed border-gray-600 cursor-pointer neu-button">
                    <i class="fas fa-plus text-gray-500"></i>
                </div>
                <span class="text-xs text-gray-500">Your Story</span>
            </div>
            <div class="flex-none w-16 h-16 rounded-full p-1 border-2 border-blue-500 neu-flat">
                <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
            </div>
            <div class="flex-none w-16 h-16 rounded-full p-1 border-2 border-orange-500 neu-flat">
                <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
            </div>
            <div class="flex-none w-16 h-16 rounded-full p-1 border-2 border-blue-500 neu-flat">
                <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
            </div>
            <div class="flex-none w-16 h-16 rounded-full p-1 border-2 border-orange-500 neu-flat">
                <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
            </div>
            <div class="flex-none w-16 h-16 rounded-full p-1 border-2 border-blue-500 neu-flat">
                <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
            </div>
            <div class="flex-none w-16 h-16 rounded-full p-1 border-2 border-orange-500 neu-flat">
                <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
            </div>
        </div>
<h3 class="font-bold text-lg">Latest Updates</h3>
        <!-- POST FEED -->
        <div>
            <p class="text-sm font-bold text-gray-700">Admin Kubar</p>
            <p class="text-[10px] text-gray-500">2 hours ago</p>
        </div>
        <div class="h-48 w-full rounded-2xl bg-gray-200 neu-inset overflow-hidden">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
                class="w-full h-full object-cover opacity-80" alt="Nature">
        </div>
        <p class="text-sm text-gray-600 leading-relaxed">Exploring the hidden gems of the orchid forest today. Nature never
            ceases to amaze! #Kubar #Explore</p>
        </div>
        <div>
            <p class="text-sm font-bold text-gray-700">Comments</p>
        </div>
        <div>
            <p class="text-sm font-bold text-gray-700">Edo Erpani</p>
            <p class="text-[10px] text-gray-500">2 hours ago</p>
        </div>
        <div class="h-48 w-full rounded-2xl bg-gray-200 neu-inset overflow-hidden">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
                class="w-full h-full object-cover opacity-80" alt="Nature">
        </div>
        <p class="text-sm text-gray-600 leading-relaxed">Exploring the hidden gems of the orchid forest today. Nature never
            ceases to amaze! #Kubar #Explore #JanturInar</p>
        </div>
        <div>
            <p class="text-sm font-bold text-gray-700">Comments</p>
        </div>

<div>
    <p class="text-sm font-bold text-gray-700">Admin Kubar</p>
    <p class="text-[10px] text-gray-500">2 hours ago</p>
</div>
<div class="h-48 w-full rounded-2xl bg-gray-200 neu-inset overflow-hidden">
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
        class="w-full h-full object-cover opacity-80" alt="Nature">
</div>
<p class="text-sm text-gray-600 leading-relaxed">Exploring the hidden gems of the orchid forest today. Nature never
    ceases to amaze! #Kubar #Explore</p>
</div>
<div>
    <p class="text-sm font-bold text-gray-700">Comments</p>
</div>

<div>
    <p class="text-sm font-bold text-gray-700">Admin Kubar</p>
    <p class="text-[10px] text-gray-500">2 hours ago</p>
</div>
<div class="p-6 rounded-3xl neu-flat h-48 flex flex-col justify-end">
    <p class="text-gray-500 text-sm">Follow trends in Wisata Kutai Barat.</p>
</div>
<div class="h-48 w-full rounded-2xl bg-gray-200 neu-inset overflow-hidden">
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"
        class="w-full h-full object-cover opacity-80" alt="Nature">
</div>
<p class="text-sm text-gray-600 leading-relaxed">Exploring the hidden gems of the orchid forest today. Nature never
    ceases to amaze! #Kubar #Explore</p>
</div>
<div>
    <p class="text-sm font-bold text-gray-700">Comments</p>
</div>
</section>
</main>

<!-- 
    CREATE POST
<div id="create-post" class="p-5 rounded-3xl neu-flat space-y-4">
    <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-full bg-blue-500"></div>
        <span class="font-bold text-sm">Edo Erpani</span>
    </div>
    <div class="neu-inset rounded-2xl p-4">
        <textarea class="bg-transparent w-full outline-none text-sm text-gray-300" rows="3"
            placeholder="Share your thoughts..."></textarea>
    </div>
    <div class="flex justify-between items-center">
        <button class="text-gray-400 text-lg ml-2"><i class="fas fa-image"></i></button>
        <button class="px-6 py-2 bg-blue-600 rounded-full text-sm font-bold shadow-lg neu-button">Post</button>
    </div>
</div>
-->


</section>


<!-- SECTION START -->

<!-- EXPLORE SECTION -->

<section id="explore-page" class="hidden space-y-6 p-1">
    <div class="neu-inset flex items-center p-4 rounded-2xl">
        <i data-lucide="search" class="w-5 h-5 text-gray-500 mr-3"></i>
        <input type="text" placeholder="Search Kubar..." class="bg-transparent outline-none w-full text-sm">
    </div>
    <div class="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
        <button class="px-5 py-2 rounded-full neu-flat text-xs font-medium whitespace-nowrap active-tab">All</button>
        <button
            class="px-5 py-2 rounded-full neu-flat text-xs font-medium whitespace-nowrap text-gray-500">Events</button>
        <button class="px-5 py-2 rounded-full neu-flat text-xs font-medium whitespace-nowrap text-gray-500">Art</button>
        <button
            class="px-5 py-2 rounded-full neu-flat text-xs font-medium whitespace-nowrap text-gray-500">History</button>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div
            class="h-64 rounded-3xl neu-flat flex flex-col items-center justify-center text-gray-600 relative overflow-hidden group">
            <i class="fa-solid fa-plane-departure mb-2 opacity-50"></i>
            <span class="font-semibold">Travel</span>
            <div class="absolute bottom-0 w-full p-3 bg-white/10 backdrop-blur-sm text-[10px] text-center">Discover
                Places</div>
        </div>
        <div class="h-48 rounded-3xl neu-flat flex flex-col items-center justify-center text-gray-600 group">
            <i class="fa-solid fa-masks-theater mb-2 opacity-50"></i>
            <span class="font-semibold">Culture</span>
        </div>
        <div class="h-48 rounded-3xl neu-flat flex flex-col items-center justify-center text-gray-600">
            <i class="fa-solid fa-leaf mb-2 opacity-50"></i>
            <span class="font-semibold">Nature</span>
        </div>
        <div class="h-64 rounded-3xl neu-flat flex flex-col items-center justify-center text-gray-600 mt-[-64px]">
            <i class="fa-solid fa-utensils mb-2 opacity-50"></i>
            <span class="font-semibold">Food</span>
        </div>
    </div>
<!-- SHOP SECTION -->
<!-- HOME && CREATE, POST, SECTION -->
<!-- WALLET SECTION -->
<!-- PROFILE SECTION -->

<!-- SECTION END -->


   <div>
<nav>
    <!-- NAVIGATION BAR -->
    <!-- NAVIGATION EXPLORE -->
     <div id="explore-page" class="nav-items">

    <!-- NAVIGATION SHOP -->
     <div id="shop-page" class="nav-items"></div>
    <!-- NAVIGATION DEFAULT HOME && CREATE -->
    <div id="home-page" class="nav-items">
    <div id="create-post" class="nav-item">
       <script>
        function switchPage(pageId) {
        const pages = ['home-page', 'create-post']
        const button = {
            home: document.getElementById('home-page'),
            create: document.getElementById('create-post')
        }
        pages.forEach(id => { const page = document.getElementById(id); if (page) page.classList.add('hidden');
        const activePage = document.getElementById(pageId);
            if (activePage) activePage.classList.remove('hidden');
        }); 
    }
</script>

    <!-- NAVIGATION WALLET -->
    <!-- NAVIGATION PROFILE -->
    </nav>
</div>

    <div id="root" class="w-full"></div>
    <script src="config.js"></script>
    <script src="app.jsx"></script>
    <script type="module" src="index.tsx"></script>
<script type="module" src="/index.tsx"></script>
<script>
    window.onload = function() {window.location.href="file:///C:/Users/eunoime/index.html"
}
</script>
</body>
</html>

```

This contains everything you need to run your app locally.


## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
