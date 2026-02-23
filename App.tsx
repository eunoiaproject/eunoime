
import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Compass, 
  ShoppingBag, 
  Wallet, 
  User, 
  Shield, 
  ShieldCheck, 
  Bell, 
  Plus, 
  Image as ImageIcon, 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal,
  Check,
  Edit3,
  Slash,
  UserPlus,
  Search,
  ArrowUpRight,
  TrendingUp,
  Music,
  Camera,
  Settings
} from 'lucide-react';

const App = () => {
  // --- Navigation ---
  const [currentPage, setCurrentPage] = useState('home');

  // --- Global State ---
  // Fix: Explicitly type the posts state to satisfy TypeScript constraints for nullable properties.
  const [posts, setPosts] = useState<Array<{
    id: number;
    user: string;
    content: string;
    image: string | null;
    likes: number;
    timestamp: string;
  }>>([
    { id: 1, user: "Sarah J.", content: "Just landed in the Eunoiaverse! The design here is incredible. ✨", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80", likes: 24, timestamp: "2h ago" },
    { id: 2, user: "Dev Team", content: "Major platform update: Neumorphic v2.0 is now live for all creators!", image: null, likes: 156, timestamp: "5h ago" }
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'like', user: 'Sarah J.', content: 'liked your post', timestamp: '5m ago', read: false },
    { id: 2, type: 'follow', user: 'Alex Rivera', content: 'started following you', timestamp: '1h ago', read: true }
  ]);
  const [balance, setBalance] = useState(1245.50);
  const [followerCount, setFollowerCount] = useState(45200);
  const [isFollowing, setIsFollowing] = useState(false);
  const [newPostText, setNewPostText] = useState('');

  const unreadNotifCount = notifications.filter(n => !n.read).length;

  // --- Handlers ---
  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    // Fix: Added missing 'image' property to the post object to match the expected state type.
    const post = {
      id: Date.now(),
      user: "Edo Erpani",
      content: newPostText,
      image: null,
      likes: 0,
      timestamp: "Just now"
    };
    setPosts([post, ...posts]);
    setNewPostText('');
  };

  // --- Sub-components (Pages) ---

  const PageHeader = ({ title, showSettings = false }) => (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-black tracking-tight">{title}</h2>
      {showSettings && (
        <button className="p-3 rounded-2xl bg-neutral-800 neu-flat neu-button">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
      )}
    </div>
  );

  const HomeView = () => (
    <div className="animate-slide-up">
      {/* Stories */}
      <section className="mb-8 flex space-x-4 overflow-x-auto pb-2 no-scrollbar">
        <div className="flex-none flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center neu-button cursor-pointer">
            <Plus className="text-blue-500 w-6 h-6" />
          </div>
          <span className="text-[10px] mt-1 text-gray-500">Your Story</span>
        </div>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex-none flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full border-2 ${i === 1 ? 'border-orange-500' : 'border-neutral-700'} p-0.5`}>
              <img src={`https://placehold.co/100?text=U${i}`} className="rounded-full w-full h-full object-cover" alt="" />
            </div>
            <span className="text-[10px] mt-1 text-gray-500">User {i}</span>
          </div>
        ))}
      </section>

      {/* Post Box */}
      <form onSubmit={handlePostSubmit} className="mb-8 p-4 rounded-3xl bg-neutral-800 neu-pressed">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="text-sm font-semibold">What's on your mind?</span>
        </div>
        <textarea 
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          className="w-full bg-transparent p-2 focus:outline-none text-gray-300 text-sm resize-none"
          rows={3}
        />
        <div className="flex justify-between items-center mt-3 border-t border-neutral-700 pt-3">
          <div className="flex space-x-4">
            <button type="button" className="text-gray-500 hover:text-blue-500 transition-colors"><Camera className="w-5 h-5" /></button>
            <button type="button" className="text-gray-500 hover:text-purple-500 transition-colors"><ImageIcon className="w-5 h-5" /></button>
          </div>
          <button type="submit" className="px-6 py-2 bg-blue-600 rounded-full font-bold text-sm neu-flat neu-button">Post</button>
        </div>
      </form>

      {/* Feed */}
      <div className="space-y-6 pb-24">
        {posts.map(post => (
          <div key={post.id} className="p-5 rounded-3xl bg-neutral-800 neu-flat">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center font-bold text-xs">{post.user.charAt(0)}</div>
                <div>
                  <h4 className="font-bold text-sm">{post.user}</h4>
                  <p className="text-[10px] text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <button className="text-gray-500"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{post.content}</p>
            {post.image && <img src={post.image} className="rounded-2xl w-full mb-4 shadow-xl" alt="" />}
            <div className="flex items-center space-x-8">
              <button onClick={() => handleLike(post.id)} className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
                <Heart className={`w-5 h-5 ${post.likes > 24 ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-xs font-bold">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-bold">12</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ExploreView = () => (
    <div className="animate-slide-up">
      <PageHeader title="Explore" showSettings />
      <div className="relative mb-8 p-4 rounded-full bg-neutral-800 neu-pressed flex items-center">
        <Search className="w-5 h-5 text-gray-500 mr-3" />
        <input type="text" placeholder="Search Eunoiaverse..." className="bg-transparent w-full focus:outline-none text-sm text-gray-200" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 h-40 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-800 p-6 relative overflow-hidden neu-flat">
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-1">Trending Art</h3>
            <p className="text-xs text-indigo-100 opacity-80">Discover top creative works</p>
          </div>
          <TrendingUp className="absolute right-[-20px] bottom-[-20px] w-40 h-40 text-white opacity-10" />
        </div>
        {['Fashion', 'Tech', 'Music', 'Gaming'].map((cat, i) => (
          <div key={i} className="h-32 rounded-3xl bg-neutral-800 neu-flat flex flex-col items-center justify-center space-y-2 neu-button cursor-pointer">
             <div className="p-3 rounded-2xl bg-neutral-700/50">
               {i === 0 && <Check className="text-pink-400" />}
               {i === 1 && <ArrowUpRight className="text-blue-400" />}
               {i === 2 && <Music className="text-purple-400" />}
               {i === 3 && <TrendingUp className="text-green-400" />}
             </div>
             <span className="text-sm font-bold">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ShopView = () => (
    <div className="animate-slide-up">
      <PageHeader title="Shop" />
      <div className="grid grid-cols-2 gap-6">
        {[
          { name: "Digital Canvas", price: "24.00", color: "bg-orange-500" },
          { name: "Creator Kit", price: "89.00", color: "bg-blue-500" },
          { name: "Neon Filter", price: "12.00", color: "bg-pink-500" },
          { name: "Art License", price: "250.00", color: "bg-indigo-500" }
        ].map((item, i) => (
          <div key={i} className="p-3 rounded-[32px] bg-neutral-800 neu-flat flex flex-col">
            <div className={`w-full aspect-square rounded-2xl mb-3 ${item.color} opacity-40 shadow-inner flex items-center justify-center`}>
              <ShoppingBag className="w-8 h-8 text-white opacity-50" />
            </div>
            <h4 className="text-sm font-bold mb-1 truncate px-1">{item.name}</h4>
            <div className="flex justify-between items-center px-1">
              <span className="text-blue-400 font-black text-xs">${item.price}</span>
              <button className="p-2 rounded-xl bg-neutral-700 neu-button"><Plus className="w-3 h-3" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const WalletView = () => (
    <div className="animate-slide-up">
      <PageHeader title="Wallet" />
      <div className="p-8 rounded-[40px] bg-neutral-800 neu-flat mb-10 flex flex-col items-center">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Total Balance</span>
        <h3 className="text-4xl font-black text-white mb-6">${balance.toLocaleString()}</h3>
        <div className="flex space-x-4 w-full">
          <button className="flex-1 py-4 bg-blue-600 rounded-2xl font-bold text-sm neu-flat neu-button">Send</button>
          <button className="flex-1 py-4 bg-neutral-700 rounded-2xl font-bold text-sm neu-flat neu-button">Deposit</button>
        </div>
      </div>
      <h4 className="text-lg font-bold mb-4">Transactions</h4>
      <div className="space-y-4 pb-24">
        {[
          { label: 'Marketplace Purchase', val: '-$24.00', date: 'Today' },
          { label: 'Sold Art #1204', val: '+$140.00', date: 'Yesterday' },
          { label: 'Creator Reward', val: '+$5.50', date: 'Jan 12' }
        ].map((t, i) => (
          <div key={i} className="p-4 rounded-2xl bg-neutral-800 flex justify-between items-center neu-flat">
            <div>
              <p className="text-sm font-bold">{t.label}</p>
              <p className="text-[10px] text-gray-500 uppercase">{t.date}</p>
            </div>
            <span className={`text-sm font-black ${t.val.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
              {t.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="animate-slide-up text-center">
      <div className="relative inline-block mb-6">
        <div className="w-28 h-28 rounded-full bg-neutral-800 neu-flat p-1 mx-auto">
          <img src="https://placehold.co/200?text=EDO" className="rounded-full w-full h-full object-cover" alt="" />
        </div>
        <button className="absolute bottom-1 right-1 p-2 bg-blue-600 rounded-full border-4 border-neutral-900 shadow-xl">
          <Edit3 className="w-3 h-3 text-white" />
        </button>
      </div>
      <h2 className="text-2xl font-black mb-1">Edo Erpani</h2>
      <p className="text-gray-500 text-sm mb-6 flex items-center justify-center"><ArrowUpRight className="w-3 h-3 mr-1" /> Kalimantan, Indonesia</p>
      
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setIsFollowing(!isFollowing)}
          className={`px-8 py-2.5 rounded-full font-black text-sm transition-all ${isFollowing ? 'border-2 border-neutral-700 text-gray-500' : 'bg-blue-600 text-white neu-flat'}`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
        <button className="p-2.5 rounded-full bg-neutral-800 neu-flat neu-button"><MessageCircle className="w-5 h-5 text-gray-400" /></button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div><p className="text-xl font-black">1.2k</p><p className="text-[10px] text-gray-500 uppercase font-bold">Posts</p></div>
        <div><p className="text-xl font-black">45.2k</p><p className="text-[10px] text-gray-500 uppercase font-bold">Followers</p></div>
        <div><p className="text-xl font-black">890</p><p className="text-[10px] text-gray-500 uppercase font-bold">Following</p></div>
      </div>
    </div>
  );

  const NotificationsView = () => (
    <div className="animate-slide-up">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-black">Alerts</h2>
        <button className="text-xs font-bold text-blue-500 uppercase tracking-tighter" onClick={() => setNotifications(notifications.map(n => ({...n, read: true})))}>Mark all read</button>
      </div>
      <div className="space-y-4 pb-24">
        {notifications.map(n => (
          <div key={n.id} className={`p-4 rounded-3xl flex items-center space-x-4 transition-all ${n.read ? 'bg-neutral-800/40 opacity-60' : 'bg-neutral-800 neu-flat border-l-4 border-blue-500'}`}>
            <div className={`p-3 rounded-2xl ${n.type === 'like' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
              {n.type === 'like' ? <Heart className="w-5 h-5 fill-current" /> : <UserPlus className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-200"><span className="font-bold text-white">{n.user}</span> {n.content}</p>
              <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold">{n.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AdminView = () => (
    <div className="animate-slide-up">
      <PageHeader title="Admin" />
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[
          { label: 'Active Users', val: '12.4k', color: 'text-green-500' },
          { label: 'Daily Posts', val: '840', color: 'text-blue-500' },
          { label: 'Reports', val: '14', color: 'text-red-500' },
          { label: 'Server Load', val: '24%', color: 'text-emerald-500' }
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-3xl bg-neutral-800 neu-flat">
            <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">{stat.label}</p>
            <h3 className={`text-xl font-black ${stat.color}`}>{stat.val}</h3>
          </div>
        ))}
      </div>
      <h4 className="text-lg font-bold mb-4">Moderation Queue</h4>
      <div className="space-y-3">
        {[
          { name: "User_88", reason: "Spam Link" },
          { name: "AlphaBot", reason: "AI Generated" }
        ].map((m, i) => (
          <div key={i} className="p-4 rounded-2xl bg-neutral-800 flex justify-between items-center neu-flat">
            <div>
              <p className="text-sm font-bold">{m.name}</p>
              <p className="text-[10px] text-red-400 font-bold italic">{m.reason}</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-xl bg-neutral-700 hover:text-red-500 neu-button transition-colors"><Slash className="w-4 h-4" /></button>
              <button className="p-2 rounded-xl bg-neutral-700 hover:text-green-500 neu-button transition-colors"><Check className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-lg min-h-screen flex flex-col mx-auto px-4 py-8">
      {/* Platform Header */}
      <header className="flex justify-between items-center mb-8 sticky top-0 bg-[#171717]/80 backdrop-blur-lg z-30 py-4 -mx-4 px-4 border-b border-neutral-800/50">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black italic shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">E</div>
          <h1 className="text-xl font-black tracking-tighter">Eunoiaverse</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setCurrentPage('admin')}
            className={`p-3 rounded-2xl bg-neutral-800 neu-flat neu-button ${currentPage === 'admin' ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <ShieldCheck className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentPage('notifications')}
            className={`p-3 rounded-2xl bg-neutral-800 neu-flat neu-button relative ${currentPage === 'notifications' ? 'text-blue-500' : 'text-gray-500'}`}
          >
            <Bell className="w-5 h-5" />
            {unreadNotifCount > 0 && <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-4 border-neutral-800"></span>}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'explore' && <ExploreView />}
        {currentPage === 'shop' && <ShopView />}
        {currentPage === 'wallet' && <WalletView />}
        {currentPage === 'profile' && <ProfileView />}
        {currentPage === 'notifications' && <NotificationsView />}
        {currentPage === 'admin' && <AdminView />}
      </main>

      {/* Floating Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[440px] px-6 z-40">
        <div className="bg-neutral-800/90 backdrop-blur-xl p-4 flex justify-between items-center rounded-[32px] border border-neutral-700/50 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)]">
          <button onClick={() => setCurrentPage('explore')} className={`p-2 transition-all ${currentPage === 'explore' ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'}`}><Compass className="w-6 h-6" /></button>
          <button onClick={() => setCurrentPage('shop')} className={`p-2 transition-all ${currentPage === 'shop' ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'}`}><ShoppingBag className="w-6 h-6" /></button>
          
          <button onClick={() => setCurrentPage('home')} className="w-14 h-14 -mt-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-2xl flex items-center justify-center border-4 border-neutral-900 group active:scale-95 transition-transform">
            <Home className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          <button onClick={() => setCurrentPage('wallet')} className={`p-2 transition-all ${currentPage === 'wallet' ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'}`}><Wallet className="w-6 h-6" /></button>
          <button onClick={() => setCurrentPage('profile')} className={`p-2 transition-all ${currentPage === 'profile' ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'}`}><User className="w-6 h-6" /></button>
        </div>
      </nav>
    </div>
  );
};

export default App;
