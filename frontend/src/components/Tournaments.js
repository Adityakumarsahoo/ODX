import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import homeImg from '../assets/home.png';

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "ODx Battleground Championship S5",
      date: "Jan 27, 2026",
      time: "18:00 IST",
      slots: "18/20 Teams",
      prize: "₹1,000",
      map: "Erangel + Miramar",
      status: "Registration Open",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Weekend Wars: Squad Showdown",
      date: "Feb 02, 2026",
      time: "20:00 IST",
      slots: "05/25 Teams",
      prize: "₹5,000",
      map: "Sanhok Only",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Solo Sniper Challenge",
      date: "Feb 05, 2026",
      time: "16:00 IST",
      slots: "45/100 Players",
      prize: "₹2,000",
      map: "Vikendi",
      status: "Registration Open",
      image: homeImg
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-2 tracking-tighter uppercase">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow to-yellow-600">Events</span>
          </h1>
          <div className="h-1 w-24 bg-krafton-yellow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="group bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-krafton-yellow/50 transition-all hover:transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 right-4 bg-krafton-yellow text-black text-xs font-black uppercase px-3 py-1 rounded z-10">
                  {tournament.status}
                </div>
                <img 
                  src={tournament.image} 
                  alt={tournament.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-black text-white italic uppercase mb-4 leading-tight group-hover:text-krafton-yellow transition-colors">
                  {tournament.title}
                </h3>
                
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-krafton-yellow" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-krafton-yellow" />
                    <span>{tournament.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-krafton-yellow" />
                    <span>{tournament.map}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={16} className="text-krafton-yellow" />
                    <span>{tournament.slots}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-500 uppercase">Prize Pool</div>
                    <div className="text-xl font-bold text-white">{tournament.prize}</div>
                  </div>
                  <button className="bg-white/10 hover:bg-krafton-yellow hover:text-black text-white p-3 rounded-full transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
