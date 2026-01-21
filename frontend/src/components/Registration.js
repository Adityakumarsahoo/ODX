import React, { useState, useEffect } from 'react';
import { Trophy, Users, Crosshair, Shield, CreditCard, Upload, ChevronRight } from 'lucide-react';
import qrCodeImg from '../assets/Qr-code.png';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    inGameName: '',
    playerId: '',
    mobileNumber: '',
    email: '',
    teamType: '',
    teamName: '',
    playerCount: '',
    paidEntry: '',
    paymentMode: '',
    availableDate: '',
    agreeRules: false,
    understandPrize: false,
    whatsappNumber: '',
    paymentScreenshot: null
  });

  // Force reset fields on mount to ensure no pre-selection persists
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      teamType: '',
      playerCount: '',
      paidEntry: false,
      paymentScreenshot: null
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        paymentScreenshot: e.target.files[0]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        data.append(key, formData[key]);
      });

      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Thanks for Resistation');
        // Reset form or redirect if needed
        setFormData({
            fullName: '',
            inGameName: '',
            playerId: '',
            mobileNumber: '',
            email: '',
            teamType: '',
            teamName: '',
            playerCount: '',
            paidEntry: '',
            paymentMode: '',
            availableDate: '',
            agreeRules: false,
            understandPrize: false,
            whatsappNumber: ''
        });
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please ensure the backend server is running.');
    }
  };

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-2">
      <Icon className="text-krafton-yellow" size={24} />
      <h3 className="text-xl font-bold text-white uppercase tracking-wider">{title}</h3>
    </div>
  );

  const InputGroup = ({ label, required, children }) => (
    <div className="mb-6 group">
      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-krafton-yellow transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  const TextInput = ({ name, placeholder, type = "text", required }) => (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-krafton-dark-gray/50 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-krafton-yellow focus:ring-1 focus:ring-krafton-yellow transition-all placeholder-gray-600 font-medium"
        onChange={handleChange}
      />
      <div className="absolute inset-0 border border-transparent group-hover:border-gray-600 pointer-events-none rounded transition-colors" />
    </div>
  );

  const RadioOption = ({ name, value, label, current, required }) => (
    <label className={`
      relative flex items-center justify-center p-4 cursor-pointer rounded border transition-all
      ${current === value 
        ? 'bg-krafton-yellow/10 border-krafton-yellow text-krafton-yellow' 
        : 'bg-krafton-dark-gray/30 border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-krafton-dark-gray/50'}
    `}>
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden"
        onChange={handleChange}
        checked={current === value}
        required={required}
      />
      <span className="font-bold uppercase tracking-wider text-sm">{label}</span>
      {current === value && (
        <div className="absolute inset-0 border-2 border-krafton-yellow rounded opacity-50 blur-[2px]" />
      )}
    </label>
  );

  return (
    <div className="min-h-screen bg-krafton-black relative font-sans">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-krafton-black via-transparent to-krafton-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-krafton-black/80 to-krafton-black" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black italic text-white mb-2 tracking-tighter"
              style={{ textShadow: '0 0 20px rgba(255, 222, 0, 0.3)' }}>
            ODx <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow to-yellow-600">TOURNAMENT</span>
          </h1>
          <p className="text-gray-400 text-lg tracking-widest uppercase border-t border-b border-gray-800 py-2 inline-block">
            Official Registration Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Tournament Info Card */}
          <div className="bg-krafton-dark-gray/80 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-krafton-yellow" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="text-krafton-yellow" /> Tournament Details
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Join the ultimate battleground challenge starting <span className="text-white font-bold">27 January 2026</span>. 
                  Prove your skills and dominate the arena.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center bg-black/40 p-3 rounded border border-white/5">
                    <span className="text-gray-400">Entry Fee</span>
                    <span className="text-krafton-yellow font-bold text-lg">₹100</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/40 p-3 rounded border border-white/5">
                    <span className="text-gray-400">Per Kill Reward</span>
                    <span className="text-krafton-yellow font-bold">₹5</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider text-center">Prize Pool</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">🥇</div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">1st Place</div>
                      <div className="text-xl font-bold text-white">₹1000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center text-2xl">🥈</div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">2nd Place</div>
                      <div className="text-xl font-bold text-white">₹500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Details */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-8 rounded-xl">
            <SectionTitle icon={Users} title="Player Information" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <InputGroup label="Full Name" required>
                <TextInput name="fullName" placeholder="ENTER YOUR FULL NAME" required />
              </InputGroup>

              <InputGroup label="In-Game Name (IGN)" required>
                <TextInput name="inGameName" placeholder="ENTER EXACT IGN" required />
              </InputGroup>

              <InputGroup label="Player ID / Character ID" required>
                <TextInput name="playerId" placeholder="5123456789" required />
              </InputGroup>

              <InputGroup label="Mobile Number" required>
                <TextInput name="mobileNumber" type="tel" placeholder="10 DIGIT NUMBER" required />
              </InputGroup>
            </div>

            <InputGroup label="Email Address">
              <TextInput name="email" type="email" placeholder="YOUR@EMAIL.COM" />
            </InputGroup>
          </div>

          {/* Team Details */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-8 rounded-xl">
            <SectionTitle icon={Crosshair} title="Squad Configuration" />
            
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Team Type *</label>
              <div className="grid grid-cols-3 gap-4">
                {['Solo', 'Duo', 'Squad'].map(type => (
                  <RadioOption key={type} name="teamType" value={type} label={type} current={formData.teamType} required />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputGroup label="Team Name">
                <TextInput name="teamName" placeholder="E.G. TEAM SOUL" />
              </InputGroup>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Players Count *</label>
                <div className="grid grid-cols-4 gap-2">
                  {['1', '2', '3', '4'].map(count => (
                    <RadioOption key={count} name="playerCount" value={count} label={count} current={formData.playerCount} required />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-8 rounded-xl">
            <SectionTitle icon={CreditCard} title="Payment Verification" />
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
               <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Payment Mode *</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['UPI', 'PhonePe', 'GPay', 'Paytm'].map(mode => (
                      <RadioOption key={mode} name="paymentMode" value={mode} label={mode} current={formData.paymentMode} required />
                    ))}
                  </div>
                  
                  {formData.paymentMode && (
                    <div className="mt-6 animate-fade-in-up">
                      <div className="bg-white p-4 rounded-lg inline-block shadow-lg">
                        <img src={qrCodeImg} alt="Payment QR Code" className="w-48 h-48 object-contain" />
                      </div>
                      <p className="text-gray-400 text-xs mt-2 font-mono">Scan to pay via {formData.paymentMode}</p>
                    </div>
                  )}
               </div>
               
               <InputGroup label="Transaction Screenshot" required>
                  <label className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-krafton-yellow transition-colors cursor-pointer bg-black/20 block">
                    <input 
                      type="file" 
                      accept="image/*,.pdf" 
                      className="hidden" 
                      onChange={handleFileChange}
                      required
                    />
                    <Upload className={`mx-auto mb-2 ${formData.paymentScreenshot ? 'text-krafton-yellow' : 'text-gray-500'}`} />
                    <span className={`text-sm font-medium ${formData.paymentScreenshot ? 'text-krafton-yellow' : 'text-gray-400'}`}>
                      {formData.paymentScreenshot ? formData.paymentScreenshot.name : 'Click to upload payment proof'}
                    </span>
                  </label>
               </InputGroup>
            </div>

            <InputGroup label="Payment Confirmation" required>
              <label className="flex items-center gap-4 p-4 border border-gray-700 rounded hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="relative inline-flex items-center">
                  <input 
                    type="checkbox" 
                    name="paidEntry" 
                    required
                    className="sr-only peer"
                    onChange={handleChange}
                    checked={!!formData.paidEntry}
                  />
                  <div className="w-14 h-7 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-krafton-yellow rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-krafton-yellow"></div>
                </div>
                <span className="text-white font-medium group-hover:text-krafton-yellow transition-colors">I have paid the entry fee of ₹100</span>
              </label>
            </InputGroup>
          </div>

          {/* Final Checks */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-8 rounded-xl">
             <SectionTitle icon={Shield} title="Terms & Verification" />

             <div className="space-y-4">
               <label className="flex items-start space-x-4 cursor-pointer group">
                 <div className="relative mt-1">
                   <input
                     type="checkbox"
                     name="agreeRules"
                     required
                     className="peer sr-only"
                     onChange={handleChange}
                   />
                   <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-krafton-yellow peer-checked:border-krafton-yellow transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 transition-opacity">
                     ✓
                   </div>
                 </div>
                 <div>
                   <span className="text-white font-bold">I accept the Tournament Rules & Fair Play Policy</span>
                   <p className="text-xs text-gray-500 mt-1">Any use of hacks/cheats will result in immediate disqualification and ban.</p>
                 </div>
               </label>

               <label className="flex items-start space-x-4 cursor-pointer group">
                 <div className="relative mt-1">
                   <input
                     type="checkbox"
                     name="understandPrize"
                     required
                     className="peer sr-only"
                     onChange={handleChange}
                   />
                   <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-krafton-yellow peer-checked:border-krafton-yellow transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 transition-opacity">
                     ✓
                   </div>
                 </div>
                 <span className="text-white font-bold">I understand the Prize Distribution structure</span>
               </label>
             </div>

             <div className="mt-8 pt-8 border-t border-gray-800">
               <InputGroup label="WhatsApp Number for Updates" required>
                  <TextInput name="whatsappNumber" type="tel" placeholder="FOR ROOM ID & PASS" required />
               </InputGroup>
             </div>
          </div>

          {/* Submit Action */}
          <div className="pt-8 pb-20">
            <button
              type="submit"
              className="w-full bg-krafton-yellow text-black text-xl font-black italic uppercase tracking-tighter py-6 px-8 rounded clip-path-polygon hover:bg-yellow-400 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(255,222,0,0.3)] flex items-center justify-center gap-3"
            >
              Confirm Registration <ChevronRight size={28} />
            </button>
            <p className="text-center text-gray-600 text-xs mt-4">
              By registering, you agree to the Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
