import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ChevronRight } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    // Check if already authenticated
    if (localStorage.getItem('adminAuth') === 'true') {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check server connection.');
    }
  };

  return (
    <div className="min-h-screen bg-krafton-black relative font-sans flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-krafton-black via-transparent to-krafton-black" />
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-krafton-dark-gray/80 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-krafton-yellow to-yellow-600" />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black italic text-white mb-2 tracking-tighter uppercase">
              Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow to-yellow-600">Portal</span>
            </h1>
            <p className="text-gray-400 text-xs tracking-widest uppercase">
              Restricted Access Only
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Username</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-gray-700 text-white pl-12 pr-4 py-3 rounded focus:outline-none focus:border-krafton-yellow focus:ring-1 focus:ring-krafton-yellow transition-all placeholder-gray-600"
                  placeholder="ENTER USERNAME"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-gray-700 text-white pl-12 pr-4 py-3 rounded focus:outline-none focus:border-krafton-yellow focus:ring-1 focus:ring-krafton-yellow transition-all placeholder-gray-600"
                  placeholder="ENTER PASSWORD"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black text-lg font-black italic uppercase tracking-tighter py-4 px-6 rounded clip-path-polygon hover:bg-gray-200 transition-all shadow-lg flex items-center justify-center gap-2 group mt-8"
            >
              Access Dashboard
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
