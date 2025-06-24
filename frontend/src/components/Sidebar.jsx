import { Home, BookOpen, TrendingUp, Users, Award, Zap, Brain, Sparkles } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-72 bg-white/80 backdrop-blur-xl border-r border-white/20 h-screen sticky top-0 overflow-y-auto shadow-2xl">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-2 h-2 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Undoubt
            </h1>
            <p className="text-xs text-gray-500">Clear your doubts</p>
          </div>
        </div>
        
        <nav className="space-y-2 mb-8">
          <button 
            onClick={() => setActiveTab('home')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === 'home' 
                ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105' 
                : 'hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 hover:transform hover:scale-105'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home Feed</span>
          </button>
          <button 
            onClick={() => setActiveTab('categories')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === 'categories' 
                ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105' 
                : 'hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 hover:transform hover:scale-105'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Categories</span>
          </button>
          <button 
            onClick={() => setActiveTab('trending')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              activeTab === 'trending' 
                ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-105' 
                : 'hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 hover:transform hover:scale-105'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Trending</span>
            <span className="ml-auto text-xs bg-gradient-to-r from-pink-500 to-rose-400 text-white px-2 py-1 rounded-full">Hot</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 hover:transform hover:scale-105 transition-all duration-300">
            <Users className="w-5 h-5" />
            <span className="font-medium">Following</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 hover:transform hover:scale-105 transition-all duration-300">
            <Award className="w-5 h-5" />
            <span className="font-medium">Leaderboard</span>
          </button>
        </nav>

        <div className="relative overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-2xl p-6 text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5" />
              <h3 className="font-bold">Your Progress</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Questions Asked</span>
                <span className="font-bold text-lg">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Best Answers</span>
                <span className="font-bold text-lg">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">Reputation</span>
                <span className="font-bold text-lg text-yellow-300">2,340</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div className="bg-gradient-to-r from-yellow-300 to-orange-300 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;