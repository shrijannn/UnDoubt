import { Search, Plus, Bell, Menu, X, BrainCircuit } from 'lucide-react';

const Header = ({ 
  showMobileMenu, 
  setShowMobileMenu, 
  searchQuery, 
  setSearchQuery, 
  setShowAskModal 
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Toggle and Logo */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-3 rounded-xl hover:bg-gradient-to-r hover:from-violet-100 hover:to-purple-100 transition-all duration-300"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex items-center gap-3 lg:hidden">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Undoubt
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-focus-within:text-violet-500" />
              <input
                type="text"
                placeholder="Search questions, topics, or discover something new..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 placeholder-gray-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">⌘K</kbd>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-3 text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-300">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>

            <button 
              onClick={() => setShowAskModal(true)}
              className="group bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span className="font-medium">Ask Question</span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 p-2 hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500">Level 5 Scholar</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
