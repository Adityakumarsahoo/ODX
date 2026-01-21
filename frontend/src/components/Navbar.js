import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 md:gap-4 group">
          <div className="relative">
            <div className="text-white font-black text-2xl md:text-3xl tracking-tighter italic group-hover:scale-105 transition-transform" 
                 style={{ textShadow: '0 0 10px rgba(255,222,0,0.5)' }}>
              ODx
            </div>
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-krafton-yellow rounded-full animate-pulse"></div>
          </div>
          <div className="w-px h-8 bg-white/20 rotate-12"></div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm tracking-[0.2em] leading-none">BATTLEGROUNDS</span>
            <span className="text-krafton-yellow text-[10px] font-bold tracking-[0.4em] uppercase">Mobile India</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-gray-400">
            <Link to="/" className="relative hover:text-white transition-colors py-2 group">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-krafton-yellow transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/tournaments" className="relative hover:text-white transition-colors py-2 group">
              TOURNAMENTS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-krafton-yellow transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/rankings" className="relative hover:text-white transition-colors py-2 group">
              RANKINGS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-krafton-yellow transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/news" className="relative hover:text-white transition-colors py-2 group">
              NEWS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-krafton-yellow transition-all group-hover:w-full"></span>
            </Link>
            <Link to="#" className="relative hover:text-white transition-colors py-2 group">
              MEDIA
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-krafton-yellow transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white hover:text-krafton-yellow transition-colors">
            <Search size={20} />
          </button>
          <div className="w-px h-4 bg-white/20"></div>
          <Link to="/admin" className="text-white hover:text-krafton-yellow text-xs font-bold tracking-widest transition-colors uppercase">
            Admin
          </Link>
          <Link to="/registration" className="px-5 py-2 text-xs font-bold text-black bg-krafton-yellow hover:bg-yellow-400 rounded transition-all uppercase tracking-wider shadow-[0_0_10px_rgba(255,222,0,0.3)] hover:shadow-[0_0_20px_rgba(255,222,0,0.5)]">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-krafton-yellow transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden flex flex-col gap-4 animate-fade-in">
          <Link to="/" className="text-white font-bold tracking-widest py-3 border-b border-white/5 hover:text-krafton-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/tournaments" className="text-white font-bold tracking-widest py-3 border-b border-white/5 hover:text-krafton-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
            TOURNAMENTS
          </Link>
          <Link to="/rankings" className="text-white font-bold tracking-widest py-3 border-b border-white/5 hover:text-krafton-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
            RANKINGS
          </Link>
          <Link to="/news" className="text-white font-bold tracking-widest py-3 border-b border-white/5 hover:text-krafton-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
            NEWS
          </Link>
          <Link to="#" className="text-white font-bold tracking-widest py-3 border-b border-white/5 hover:text-krafton-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
            MEDIA
          </Link>
          <Link to="/admin" className="text-white font-bold tracking-widest py-3 border-b border-white/5 hover:text-krafton-yellow transition-colors" onClick={() => setMobileMenuOpen(false)}>
            ADMIN LOGIN
          </Link>
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/registration" className="w-full py-3 text-sm font-bold text-black bg-krafton-yellow rounded uppercase text-center" onClick={() => setMobileMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
