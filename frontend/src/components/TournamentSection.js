import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TournamentCard = ({ title, status, dates, color }) => (
  <div className={`min-w-[280px] h-[360px] p-6 flex flex-col justify-between rounded-lg relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1 ${color === 'yellow' ? 'bg-krafton-yellow text-black' : 'bg-white text-black'}`}>
    <div className="flex flex-col h-full">
      <div className="flex-grow flex items-center justify-center">
         {/* Placeholder for Logo */}
         <div className="w-24 h-24 border-4 border-black rounded-full flex items-center justify-center font-bold text-xl">
            LOGO
         </div>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className={`text-sm font-bold mb-4 ${status === 'Open + Invite' ? 'text-green-600' : 'text-green-600'}`}>{status}</p>
        
        <div className="text-xs font-semibold opacity-80">
          <p>Dates:</p>
          <p>{dates}</p>
        </div>
      </div>
    </div>
  </div>
);

const TournamentSection = () => {
  const tournaments = [
    { title: 'IN-KR 2023', status: 'Invite', dates: '26th Oct 2023 to 28th Oct 2023', color: 'yellow' },
    { title: 'BGIS 2023', status: 'Open + Invite', dates: '20th Jul 2023 to 15th Oct 2023', color: 'white' },
    { title: 'BMIC 2025', status: 'Invite', dates: '31st Oct 2025 to 2nd Nov 2025', color: 'white' }, // Using dark theme card style for variety if needed, but image shows white/yellow mostly. Let's stick to the image style.
    { title: 'BMSO 2025', status: 'Invite', dates: '18th Sep 2025 to 12th Oct 2025', color: 'white' },
  ];

  return (
    <section className="py-12 px-8 bg-krafton-black">
      <h2 className="text-krafton-yellow text-lg font-bold mb-6 uppercase tracking-wider">Past Tournaments</h2>
      
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {tournaments.map((t, index) => (
            <TournamentCard key={index} {...t} />
          ))}
          
           {/* Gradient overlay for scroll hint if needed, or just arrows */}
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white">
                <ChevronLeft size={20} />
            </button>
            <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-white">
                <ChevronRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
