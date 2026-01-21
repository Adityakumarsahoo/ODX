import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const MediaCard = ({ title, source, published, image }) => (
  <div className="min-w-[300px] bg-krafton-dark-gray rounded-lg overflow-hidden group cursor-pointer hover:bg-gray-800 transition-colors">
    <div className="h-40 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
    </div>
    
    <div className="p-4">
      <h3 className="text-white font-bold text-lg mb-4 line-clamp-2">{title}</h3>
      
      <div className="flex justify-between text-xs text-gray-400 mb-4">
        <div>
          <p className="mb-1">Source</p>
          <p className="text-white">{source}</p>
        </div>
        <div>
          <p className="mb-1">Published</p>
          <p className="text-white">{published}</p>
        </div>
      </div>
      
      <div className="flex items-center text-krafton-yellow text-sm font-bold gap-1">
        Read more <ArrowUpRight size={16} />
      </div>
    </div>
  </div>
);

const MediaSection = () => {
  const news = [
    { 
      title: 'KRAFTON Invites Bids for a Revolution...', 
      source: 'KRAFTON India', 
      published: '24th June 2025',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { 
      title: 'Team Versatile Lifts the Coveted ...', 
      source: 'ANI News', 
      published: '28th April 2025',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    { 
      title: 'KRAFTON Launches BGMI Rising...', 
      source: 'NDTV Sports', 
      published: '26th April 2025',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  return (
    <section className="py-12 px-8 bg-krafton-black">
      <h2 className="text-krafton-yellow text-lg font-bold mb-6 uppercase tracking-wider">Media</h2>
      
      <div className="flex gap-6 overflow-x-auto pb-4">
        {news.map((item, index) => (
          <MediaCard key={index} {...item} />
        ))}
      </div>
       <div className="flex justify-end gap-2 mt-4">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white">
                <ChevronLeft size={20} />
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white">
                <ChevronRight size={20} />
            </button>
        </div>
    </section>
  );
};

export default MediaSection;
