import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const HighlightCard = ({ title, image }) => (
  <div className="min-w-[300px] group cursor-pointer">
    <div className="relative h-48 rounded-lg overflow-hidden mb-3">
      <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 bg-krafton-yellow rounded-full flex items-center justify-center text-black">
          <Play fill="currentColor" size={24} />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 w-10 h-10 bg-krafton-yellow rounded-full flex items-center justify-center text-black group-hover:opacity-0 transition-opacity">
          <Play fill="currentColor" size={20} />
      </div>
    </div>
    <h3 className="text-white font-medium text-sm">{title}</h3>
  </div>
);

const HighlightsSection = () => {
  const highlights = [
    {
      title: 'TOP MOMENTS - ROUND 03 | realme BGIS 2025',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'TOP MOMENTS - ROUND 02 | realme BGIS 2025',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'TOP FINISHES - GROUP B & A - Week 04 | realme BGIS 2025',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <section className="py-12 px-8 bg-krafton-black">
      <h2 className="text-krafton-yellow text-lg font-bold mb-6 uppercase tracking-wider">Highlights</h2>
      
      <div className="flex gap-6 overflow-x-auto pb-4">
        {highlights.map((item, index) => (
          <HighlightCard key={index} {...item} />
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

export default HighlightsSection;
