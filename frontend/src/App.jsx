import { useState, useEffect } from 'react';
import { categories } from './data/categories';
import { initialQuestions } from './data/questions';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionCard from './components/QuestionCard';
import CategoriesView from './components/CategoriesView';
import AskQuestionModal from './components/AskQuestionModal';
import { Filter, TrendingUp } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAskModal, setShowAskModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ 
    title: '', 
    content: '', 
    category: '', 
    tags: '' 
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [questions, setQuestions] = useState(initialQuestions);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUpvote = (id) => {
    setQuestions(questions.map(q => 
      q.id === id 
        ? { ...q, upvotes: q.isUpvoted ? q.upvotes - 1 : q.upvotes + 1, isUpvoted: !q.isUpvoted }
        : q
    ));
  };

  const handleAskQuestion = () => {
    if (newQuestion.title.trim() && newQuestion.content.trim()) {
      const question = {
        id: Date.now(),
        title: newQuestion.title,
        content: newQuestion.content,
        author: "You",
        authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        category: newQuestion.category || "General",
        tags: newQuestion.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        upvotes: 0,
        answers: 0,
        views: 0,
        timeAgo: "Just now",
        isUpvoted: false,
        difficulty: "Beginner",
        solved: false
      };
      setQuestions([question, ...questions]);
      setNewQuestion({ title: '', content: '', category: '', tags: '' });
      setShowAskModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-400/5 to-rose-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative flex">
        <div className="hidden lg:block">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {showMobileMenu && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
            <div className="w-72 bg-white/95 backdrop-blur-xl h-full shadow-2xl">
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        )}

        <div className="flex-1 lg:ml-0">
          <Header 
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setShowAskModal={setShowAskModal}
          />
          
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {activeTab === 'home' && 'Latest Questions'}
                  {activeTab === 'categories' && 'Browse Categories'}
                  {activeTab === 'trending' && 'Trending Questions'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {activeTab === 'home' && 'Discover fresh questions from your academic community'}
                  {activeTab === 'categories' && 'Explore questions by subject and find your expertise'}
                  {activeTab === 'trending' && 'Popular questions that everyone is discussing'}
                </p>
              </div>
              {activeTab === 'home' && (
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm bg-white/80 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                    <TrendingUp className="w-4 h-4" />
                    Sort by
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {activeTab === 'categories' ? (
                <CategoriesView categories={categories} isLoaded={isLoaded} />
              ) : (
                questions.map((question) => (
                  <QuestionCard 
                    key={question.id} 
                    question={question} 
                    handleUpvote={handleUpvote}
                    categories={categories}
                    isLoaded={isLoaded}
                  />
                ))
              )}
            </div>

            {activeTab !== 'categories' && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                  Load More Questions
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <AskQuestionModal 
        showAskModal={showAskModal}
        setShowAskModal={setShowAskModal}
        newQuestion={newQuestion}
        setNewQuestion={setNewQuestion}
        handleAskQuestion={handleAskQuestion}
        categories={categories}
      />
    </div>
  );
};

export default App;