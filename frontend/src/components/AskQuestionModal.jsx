import { X } from 'lucide-react';

const AskQuestionModal = ({ showAskModal, setShowAskModal, newQuestion, setNewQuestion, handleAskQuestion, categories }) => {
  if (!showAskModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Ask a Question
            </h2>
            <p className="text-gray-600 mt-1">Share your doubt with the community</p>
          </div>
          <button 
            onClick={() => setShowAskModal(false)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Question Title
            </label>
            <input
              type="text"
              placeholder="What's your question? Be specific and clear..."
              value={newQuestion.title}
              onChange={(e) => setNewQuestion({...newQuestion, title: e.target.value})}
              className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 bg-white/50"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Description
            </label>
            <textarea
              rows="6"
              placeholder="Provide more details about your question..."
              value={newQuestion.content}
              onChange={(e) => setNewQuestion({...newQuestion, content: e.target.value})}
              className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 bg-white/50 resize-none"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Category
              </label>
              <select
                value={newQuestion.category}
                onChange={(e) => setNewQuestion({...newQuestion, category: e.target.value})}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 bg-white/50"
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tags
              </label>
              <input
                type="text"
                placeholder="e.g. python, algorithms, beginner"
                value={newQuestion.tags}
                onChange={(e) => setNewQuestion({...newQuestion, tags: e.target.value})}
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 bg-white/50"
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-4 pt-6">
            <button 
              onClick={() => setShowAskModal(false)}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              Cancel
            </button>
            <button 
              onClick={handleAskQuestion}
              className="px-8 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 font-medium hover:scale-105"
            >
              Post Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionModal;