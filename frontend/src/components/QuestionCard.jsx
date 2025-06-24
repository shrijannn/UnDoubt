import { ChevronUp, ChevronDown, MessageCircle, Eye, Share2, Star } from 'lucide-react';

const QuestionCard = ({ 
  question, 
  handleUpvote, 
  categories,
  isLoaded 
}) => {
  const categoryData = categories.find(c => c.name === question.category);
  
  return (
    <div className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 hover:scale-[1.02] ${isLoaded ? 'animate-in slide-in-from-bottom-4 duration-700' : ''}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center gap-3 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-4">
          <button 
            onClick={() => handleUpvote(question.id)}
            className={`p-3 rounded-xl transition-all duration-300 ${
              question.isUpvoted 
                ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg transform scale-110' 
                : 'hover:bg-gradient-to-r hover:from-violet-100 hover:to-purple-100 hover:scale-110'
            }`}
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          <span className={`text-lg font-bold ${question.isUpvoted ? 'text-violet-600' : 'text-gray-700'}`}>
            {question.upvotes}
          </span>
          <button className="p-3 rounded-xl hover:bg-gradient-to-r hover:from-violet-100 hover:to-purple-100 hover:scale-110 transition-all duration-300">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-sm px-3 py-1 bg-gradient-to-r ${categoryData?.gradient || 'from-gray-500 to-gray-400'} text-white rounded-full font-medium shadow-lg`}>
              {question.category}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              question.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
              question.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {question.difficulty}
            </span>
            {question.solved && (
              <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3" />
                Solved
              </span>
            )}
            <span className="text-gray-500 text-sm ml-auto">{question.timeAgo}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-violet-600 cursor-pointer transition-colors duration-300 line-clamp-2">
            {question.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {question.content}
          </p>
          
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {question.tags.map((tag, index) => (
              <span key={index} className="text-sm px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full hover:from-violet-200 hover:to-purple-200 cursor-pointer transition-all duration-300">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <img 
                src={question.authorAvatar} 
                alt={question.author}
                className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{question.author}</p>
                <p className="text-xs text-gray-500">Scholar Level 3</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2 hover:text-violet-600 cursor-pointer transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{question.answers} answers</span>
              </div>
              <div className="flex items-center gap-2 hover:text-violet-600 cursor-pointer transition-colors">
                <Eye className="w-4 h-4" />
                <span>{question.views} views</span>
              </div>
              <button className="flex items-center gap-2 hover:text-violet-600 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
