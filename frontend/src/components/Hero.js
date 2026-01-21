import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, FileText } from 'lucide-react';
import playingImg from '../assets/E-Sport.png';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex items-center">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80")',
            backgroundPosition: 'center 20%'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      </div>
      
      {/* Animated Particles/Effects (CSS Only) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-krafton-yellow rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-krafton-yellow animate-pulse"></span>
            <span className="text-krafton-yellow text-xs font-bold tracking-wider uppercase">Official Tournament 2026</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black italic text-white leading-tight tracking-tighter">
            ODx <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow to-yellow-600 drop-shadow-[0_0_15px_rgba(255,222,0,0.5)]">
              BATTLEGROUND
            </span>
            <br />
            <span className="text-4xl md:text-6xl text-gray-200">TOURNAMENT</span> 🔥
          </h1>
          
          <div className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed border-l-4 border-krafton-yellow pl-6">
            <p>
              Get ready for an action-packed gaming showdown presented by the <strong className="text-white">ODx Team</strong>! 
              Join the ultimate battleground challenge starting <strong className="text-white">27 January 2026</strong>.
            </p>
          </div>
          
          {/* Stats/Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-krafton-yellow font-bold text-2xl">₹100</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider font-bold">Entry Fee</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-krafton-yellow font-bold text-2xl">₹5/Kill</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider font-bold">Reward</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors col-span-2 md:col-span-1">
              <div className="text-krafton-yellow font-bold text-2xl">₹1,000</div>
              <div className="text-gray-500 text-xs uppercase tracking-wider font-bold">Prize Pool</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/registration" className="group relative inline-flex items-center justify-center px-8 py-4 bg-krafton-yellow text-black font-black text-lg italic uppercase tracking-wider clip-path-polygon hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,222,0,0.4)]">
              <span>Join Tournament</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/rules" className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg italic uppercase tracking-wider hover:bg-white/5 transition-all">
              <FileText className="mr-2 w-5 h-5 text-krafton-yellow" />
              Rules & Regulations
            </Link>

            <button className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg italic uppercase tracking-wider hover:bg-white/5 transition-all">
              <Zap className="mr-2 w-5 h-5 text-krafton-yellow" />
              Watch Trailer
            </button>
          </div>
        </div>

        {/* Right Visual (Abstract Graphic or Character) */}
        <div className="hidden lg:block flex-1 relative">
           {/* This could be a character image if available, for now using a stylized card */}
           <div className="relative z-10 bg-gradient-to-b from-gray-900 to-black border border-white/10 p-2 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
             <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img 
                  src={playingImg}
                  alt="Tournament Featured" 
                  className="object-cover w-full h-full opacity-80 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xs font-bold text-krafton-yellow uppercase tracking-widest mb-2">Next Match</div>
                  <div className="text-3xl font-black text-white italic">ERANGEL</div>
                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
                    <span className="flex items-center gap-1">🕒 27 Jan</span>
                    <span className="flex items-center gap-1">👥 Squad</span>
                    <span className="flex items-center gap-1">🎥 Live</span>
                  </div>
                </div>
             </div>
           </div>
           
           {/* Decorative elements behind */}
           <div className="absolute -top-10 -right-10 w-full h-full border-2 border-krafton-yellow/20 rounded-2xl -z-10"></div>
           <div className="absolute -bottom-10 -left-10 w-full h-full bg-gray-800/20 rounded-2xl -z-10 backdrop-blur-sm"></div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] text-white uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-krafton-yellow to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
