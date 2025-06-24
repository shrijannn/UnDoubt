import { TrendingUp } from 'lucide-react';

const CategoriesView = ({ categories, isLoaded }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => {
        const IconComponent = category.icon; // Ensure icon is a React component
        const progress = Math.min((category.count / 1250) * 100, 100); // Avoid going over 100%

        return (
          <div 
            key={index}
            className={`group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 ${
              isLoaded ? 'animate-in slide-in-from-bottom-4 duration-700' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}></div>
            
            <div className="relative z-10">
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Active Questions</span>
                  <span className="font-bold text-lg">{category.count?.toLocaleString?.() || 0}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${category.gradient} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Growth */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Weekly Growth</span>
                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  +{Math.floor(Math.random() * 20 + 5)}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesView;
