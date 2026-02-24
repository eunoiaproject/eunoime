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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eunoiaverse - Platform</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
      :root {
    --neumorphic-base: #00cdcd;
    --shadow-light: #f5e9e9;
    --shadow-dark: #f5f5f5;
    --primary:#cdcdcd;
    --bg-color:#cdcdcd;
    --justify-content: space-between;
    --accent:#f5f5f5;
    }
        body { background-color: var(--bg-color); font-family: 'Inter', sans-serif; }
        
        /* Neumorphic Effects */
        .neumorphic-base {
            background: var(--bg-color);
            box-shadow: 9px 9px 16px var(--shadow-dark), -9px -9px 16px var(--shadow-light);
            border-radius: 20px;
        }
        .neumorphic-inset {
            background: var(--bg-color);
            box-shadow: inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light);
            border-radius: 12px;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        /* Wallet Cards */
        .wallet-card-orange { background: linear-gradient(135deg, #ff9a44 0%, #ff6a88 100%); }
        .wallet-card-blue { background: linear-gradient(135deg, #2af598 0%, #009efd 100%); }
        
        @keyframes spectrum {
            0%, 100% { height: 20%; }
            50% { height: 100%; }
        }
        .animate-spectrum { animation: spectrum 1s ease-in-out infinite; }
    </style>
</head>
<body class="min-h-screen pb-24">

    <header class="w-full max-w-lg mx-auto p-6 flex justify-between items-center sticky top-0 bg-[#e0e5ec]/80 backdrop-blur-md z-50">
        <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold">E</div>
            <h1 class="text-xl font-black text-gray-800 tracking-tight">Eunoiaverse</h1>
        </div>
        <div class="neumorphic-base w-10 h-10 flex items-center justify-center text-gray-600 cursor-pointer">
            <i class="fas fa-bell"></i>
        </div>
    </header>

    <main id="app-pages-container" class="w-full max-w-lg mx-auto px-4">

        <div id="home-page" class="page-section space-y-8">
            <section class="flex space-x-4 overflow-x-auto py-2 no-scrollbar">
                <div class="flex-none w-16 h-16 rounded-full neumorphic-base flex items-center justify-center cursor-pointer text-gray-500 border-2 border-dashed border-gray-400">+</div>
                <div class="flex-none w-16 h-16 rounded-full neumorphic-base p-1 border-2 border-purple-500">
                    <img src="https://placehold.co/60" class="rounded-full w-full h-full object-cover">
                </div>
            </section>

            <div class="space-y-4 p-6 neumorphic-base">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-purple-500 rounded-full"></div>
                    <span class="font-bold text-gray-700">Edo Erpani</span>
                </div>
                <textarea class="w-full neumorphic-inset p-4 text-gray-700 focus:outline-none" placeholder="What's on your mind?" rows="3"></textarea>
                <div class="flex justify-between items-center">
                    <button class="text-sm text-gray-500"><i data-lucide="image" class="inline w-4 h-4 mr-1"></i>Photo</button>
                    <button class="px-6 py-2 bg-purple-600 text-white rounded-full font-bold shadow-lg">Post</button>
                </div>
            </div>
        </div>

        <div id="explore-page" class="page-section hidden space-y-6">
            <div class="neumorphic-inset p-4 flex items-center">
                <i data-lucide="search" class="w-5 h-5 text-gray-400 mr-2"></i>
                <input type="text" placeholder="Search categories..." class="bg-transparent outline-none w-full">
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="neumorphic-base p-6 text-center font-bold">Food <i class="fas fa-utensils block mt-2 text-orange-400"></i></div>
                <div class="neumorphic-base p-6 text-center font-bold">Travel <i class="fas fa-plane block mt-2 text-blue-400"></i></div>
                <div class="neumorphic-base p-6 text-center font-bold">Tech <i class="fas fa-laptop-code block mt-2 text-gray-700"></i></div>
                <div class="neumorphic-base p-6 text-center font-bold">Art <i class="fas fa-paint-brush block mt-2 text-pink-400"></i></div>
            </div>
        </div>

        <div id="shop-page" class="page-section hidden space-y-6">
            <h2 class="text-2xl font-bold">Marketplace</h2>
            <div class="grid grid-cols-1 gap-6">
                <div class="neumorphic-base p-4">
                    <img src="https://placehold.co/300x150" class="rounded-xl w-full mb-3">
                    <h4 class="font-bold">Digital Art Collection</h4>
                    <p class="text-orange-600 font-bold">Rp 500.000</p>
                </div>
            </div>
        </div>

        <div id="wallet-page" class="page-section hidden space-y-8">
            <div class="wallet-card-orange p-6 text-white rounded-[2rem] shadow-lg h-48 flex flex-col justify-between">
                <span class="text-xs font-bold opacity-80">EUNOIA PAY</span>
                <p class="text-xl tracking-widest font-mono">1237 •••• 4782</p>
                <div>
                    <p class="text-xs opacity-80">BALANCE</p>
                    <p class="text-2xl font-black">Rp 12.500.000</p>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <div class="flex flex-col items-center"><div class="w-12 h-12 neumorphic-base flex items-center justify-center text-orange-500"><i class="fas fa-paper-plane"></i></div><span class="text-[10px] mt-2 font-bold">SEND</span></div>
                <div class="flex flex-col items-center"><div class="w-12 h-12 neumorphic-base flex items-center justify-center text-blue-500"><i class="fas fa-qrcode"></i></div><span class="text-[10px] mt-2 font-bold">SCAN</span></div>
                <div class="flex flex-col items-center"><div class="w-12 h-12 neumorphic-base flex items-center justify-center text-green-500"><i class="fas fa-arrow-down"></i></div><span class="text-[10px] mt-2 font-bold">TOPUP</span></div>
                <div class="flex flex-col items-center"><div class="w-12 h-12 neumorphic-base flex items-center justify-center text-gray-500"><i class="fas fa-history"></i></div><span class="text-[10px] mt-2 font-bold">HISTORY</span></div>
            </div>
        </div>

        <div id="profile-page" class="page-section hidden space-y-6">
            <div class="neumorphic-base p-8 text-center">
                <div class="w-24 h-24 mx-auto rounded-full neumorphic-base p-1 border-4 border-purple-500 mb-4">
                    <img src="https://placehold.co/100" class="rounded-full">
                </div>
                <h2 class="text-xl font-bold">Edo Erpani</h2>
                <p class="text-purple-600">@edoerpani</p>
                <div id="spectrum-bars" class="flex items-end justify-center h-12 space-x-1 mt-6"></div>
            </div>
        </div>

    </main>

    <nav class="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-[#e0e5ec] p-4 flex justify-around items-center border-t border-gray-200 rounded-t-3xl shadow-2xl z-50">
        <button onclick="showPage('home-page')" class="nav-btn text-purple-600 flex flex-col items-center">
            <i data-lucide="home" class="w-6 h-6"></i>
        </button>
        <button onclick="showPage('explore-page')" class="nav-btn text-gray-400 flex flex-col items-center">
            <i data-lucide="compass" class="w-6 h-6"></i>
        </button>
        <button onclick="showPage('shop-page')" class="nav-btn text-gray-400 flex flex-col items-center">
            <i data-lucide="shopping-bag" class="w-6 h-6"></i>
        </button>
        <button onclick="showPage('wallet-page')" class="nav-btn text-gray-400 flex flex-col items-center">
            <i data-lucide="wallet" class="w-6 h-6"></i>
        </button>
        <button onclick="showPage('profile-page')" class="nav-btn text-gray-400 flex flex-col items-center">
            <i data-lucide="user" class="w-6 h-6"></i>
        </button>
    </nav>

    <script>
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(page => {
                page.classList.add('hidden');
            });
            // Show target page
            document.getElementById(pageId).classList.remove('hidden');

            // Show nav colors
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.replace('text-black-600', 'text-gray-400');
            });
            // Highlight active nav
            event.currentTarget.classList.replace('text-gray-400', 'text-black-600');

            if(pageId === 'profile-page') startSpectrum();
        }

        function startSpectrum() {
            const container = document.getElementById('spectrum-bars');
            container.innerHTML = '';
            for (let i = 0; i < 15; i++) {
                const bar = document.createElement('div');
                bar.className = 'w-1.5 bg-black-500 rounded-full animate-spectrum';
                bar.style.height = (Math.random() * 100) + '%';
                bar.style.animationDelay = (i * 0.1) + 's';
                container.appendChild(bar);
            }
        }

        // Init Lucide Icons
        lucide.createIcons();
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
