import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Registration from './components/Registration';
import Rankings from './components/Rankings';
import Tournaments from './components/Tournaments';
import News from './components/News';
import { MessageSquare, X, MessageCircle, Mail, HelpCircle } from 'lucide-react';

// Layout wrapper to include Navbar and Footer on every page (except maybe full-screen ones if needed)
const Layout = ({ children }) => {
  const [showHelp, setShowHelp] = useState(false);

  // Hide Navbar on specific routes if needed, or pass props
  return (
    <div className="min-h-screen bg-krafton-black text-white font-sans selection:bg-krafton-yellow selection:text-black">
      <Navbar />
      <main>
        {children}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-8 bottom-8 z-50 flex flex-col items-end gap-3">
        {showHelp && (
            <div className="flex flex-col gap-3 mb-2 animate-fade-in-up">
              <a href="https://wa.me/918018389108" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105 min-w-[160px]">
                <span className="font-bold text-sm tracking-wide">WhatsApp</span>
                <MessageCircle size={20} />
              </a>
              
              <a href="mailto:toadityakumarsahoo@gmail.com" className="flex items-center justify-between gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105 min-w-[160px]">
                <span className="font-bold text-sm tracking-wide">Email Us</span>
                <Mail size={20} />
              </a>

              <button className="flex items-center justify-between gap-3 bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105 min-w-[160px]">
                <span className="font-bold text-sm tracking-wide">FAQs</span>
                <HelpCircle size={20} />
              </button>
            </div>
        )}

        <button 
          onClick={() => setShowHelp(!showHelp)}
          className={`p-4 rounded-full shadow-2xl transition-all border border-white/10 ${
            showHelp 
              ? 'bg-krafton-yellow text-black rotate-90' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {showHelp ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>
      
      {/* Footer Placeholder */}
      <footer className="bg-black py-8 px-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 ODx Presents, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/registration" element={<Layout><Registration /></Layout>} />
        <Route path="/rankings" element={<Layout><Rankings /></Layout>} />
        <Route path="/tournaments" element={<Layout><Tournaments /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
