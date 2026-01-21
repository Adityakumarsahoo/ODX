import React from 'react';
import { ArrowRight } from 'lucide-react';
import homeImg from '../assets/home.png';

const News = () => {
  const newsItems = [
    {
      id: 1,
      category: "ESPORTS",
      title: "Team Soul Secures Top Spot in Week 3 of ODx Battleground",
      date: "Jan 20, 2026",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "In a stunning display of dominance, Team Soul cleared the lobby with 15 kills in the final circle..."
    },
    {
      id: 2,
      category: "UPDATE",
      title: "Patch Notes 3.4: New Mode 'Shadow Force' Added",
      date: "Jan 18, 2026",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The latest update brings a samurai-themed event, new melee mechanics, and a revamped Pochinki..."
    },
    {
      id: 3,
      category: "COMMUNITY",
      title: "Interview with Jonathan Gaming: 'We are ready for PMGC'",
      date: "Jan 15, 2026",
      image: homeImg,
      excerpt: "Exclusive insights from the MVP himself on the team's preparation for the upcoming global championship..."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic text-white mb-2 tracking-tighter uppercase">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow to-yellow-600">News</span>
            </h1>
          </div>
          <button className="hidden md:flex items-center gap-2 text-krafton-yellow font-bold uppercase tracking-widest hover:text-white transition-colors mt-4 md:mt-0">
            View Archive <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={item.id} className={`group cursor-pointer ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-krafton-yellow text-black text-xs font-black uppercase px-2 py-1 rounded mb-2 inline-block">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.date}</div>
                <h3 className={`font-black text-white italic uppercase leading-tight group-hover:text-krafton-yellow transition-colors ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
