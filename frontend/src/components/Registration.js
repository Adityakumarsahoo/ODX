import React, { useState, useEffect } from 'react';
import { Trophy, Users, Crosshair, Shield, CreditCard, Upload, ChevronRight, User, Phone, Mail, Hash, Gamepad } from 'lucide-react';
import qrCodeImg from '../assets/Qr-code.png';

// --- Sub-components defined OUTSIDE the main component to prevent re-renders ---

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

const TextInput = ({ name, placeholder, type = "text", required, icon: Icon, value, onChange }) => (
  <div className="relative group/input">
    {Icon && (
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-krafton-yellow transition-colors duration-300 pointer-events-none z-10">
        <Icon size={18} />
      </div>
    )}
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      className={`w-full bg-krafton-dark-gray/50 border border-gray-700 text-white ${Icon ? 'pl-12' : 'px-4'} pr-4 py-3.5 rounded-lg focus:outline-none focus:border-krafton-yellow focus:ring-1 focus:ring-krafton-yellow transition-all duration-300 placeholder-gray-600 font-medium hover:bg-krafton-dark-gray/70`}
    />
    <div className="absolute inset-0 border border-transparent group-hover/input:border-gray-600 pointer-events-none rounded-lg transition-colors duration-300" />
  </div>
);

const RadioOption = ({ name, value, label, current, required, onChange }) => (
  <label className={`
    relative flex items-center justify-center p-2 md:p-4 cursor-pointer rounded border transition-all duration-300
    ${current === value 
      ? 'bg-krafton-yellow/10 border-krafton-yellow text-krafton-yellow shadow-[0_0_15px_rgba(255,222,0,0.2)]' 
      : 'bg-krafton-dark-gray/30 border-gray-700 text-gray-400 hover:border-gray-500 hover:bg-krafton-dark-gray/50 hover:text-gray-200'}
  `}>
    <input
      type="radio"
      name={name}
      value={value}
      className="hidden"
      onChange={onChange}
      checked={current === value}
      required={required}
    />
    <span className="font-bold uppercase tracking-wider text-xs md:text-sm">{label}</span>
    {current === value && (
      <div className="absolute inset-0 border-2 border-krafton-yellow rounded opacity-50 blur-[2px]" />
    )}
  </label>
);

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

      const baseUrl = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');
      const response = await fetch(`${baseUrl}/register`, {
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

  return (
    <div className="min-h-screen bg-krafton-black relative font-sans overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20 scale-105 animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-krafton-black via-transparent to-krafton-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-krafton-black/90 to-krafton-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 py-6 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black italic text-white mb-4 tracking-tighter drop-shadow-2xl"
              style={{ textShadow: '0 0 30px rgba(255, 222, 0, 0.4)' }}>
            ODx <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow via-yellow-400 to-yellow-600">TOURNAMENT</span>
          </h1>
          <div className="relative inline-block">
            <p className="text-gray-400 text-sm md:text-lg tracking-[0.2em] md:tracking-[0.3em] uppercase border-y border-gray-800 py-2 md:py-3 px-8">
              Official Registration Portal
            </p>
            <div className="absolute -left-2 top-0 bottom-0 w-[2px] bg-krafton-yellow/50" />
            <div className="absolute -right-2 top-0 bottom-0 w-[2px] bg-krafton-yellow/50" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
          {/* Tournament Info Card */}
          <div className="bg-krafton-dark-gray/80 backdrop-blur-xl border border-white/10 p-4 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-gradient-to-b from-krafton-yellow to-yellow-600" />
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Trophy className="text-krafton-yellow drop-shadow-lg" size={32} /> 
                  <span className="italic">TOURNAMENT DETAILS</span>
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                  Join the ultimate battleground challenge starting <span className="text-krafton-yellow font-bold">27 January 2026</span>. 
                  Prove your skills and dominate the arena.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center bg-black/40 p-4 rounded-lg border border-white/5 hover:border-krafton-yellow/30 transition-colors">
                    <span className="text-gray-400 font-medium tracking-wide">ENTRY FEE</span>
                    <span className="text-krafton-yellow font-bold text-xl">₹100</span>
                  </div>
                  <div className="flex justify-between items-center bg-black/40 p-4 rounded-lg border border-white/5 hover:border-krafton-yellow/30 transition-colors">
                    <span className="text-gray-400 font-medium tracking-wide">PER KILL REWARD</span>
                    <span className="text-krafton-yellow font-bold text-xl">₹5</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-black/60 to-black/30 p-6 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Trophy size={120} />
                </div>
                <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-[0.2em] text-center border-b border-white/10 pb-2">Prize Pool Distribution</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-5 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-3xl shadow-lg shadow-yellow-500/20">🥇</div>
                    <div>
                      <div className="text-[10px] md:text-xs text-yellow-200 uppercase tracking-wider font-bold">Champion</div>
                      <div className="text-2xl font-black text-white italic">₹1000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-3xl shadow-lg shadow-gray-500/20">🥈</div>
                    <div>
                      <div className="text-[10px] md:text-xs text-gray-300 uppercase tracking-wider font-bold">Runner Up</div>
                      <div className="text-2xl font-black text-white italic">₹500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player Details */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-4 md:p-8 rounded-2xl shadow-xl">
            <SectionTitle icon={Users} title="Player Information" />
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <InputGroup label="Full Name" required>
                <TextInput 
                  name="fullName" 
                  placeholder="ENTER YOUR FULL NAME" 
                  required 
                  icon={User} 
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup label="In-Game Name (IGN)" required>
                <TextInput 
                  name="inGameName" 
                  placeholder="ENTER EXACT IGN" 
                  required 
                  icon={Gamepad} 
                  value={formData.inGameName}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup label="Player ID / Character ID" required>
                <TextInput 
                  name="playerId" 
                  placeholder="5123456789" 
                  required 
                  icon={Hash} 
                  value={formData.playerId}
                  onChange={handleChange}
                />
              </InputGroup>

              <InputGroup label="Mobile Number" required>
                <TextInput 
                  name="mobileNumber" 
                  type="tel" 
                  placeholder="10 DIGIT NUMBER" 
                  required 
                  icon={Phone} 
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>

            <div className="mt-6">
              <InputGroup label="Email Address">
                <TextInput 
                  name="email" 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM" 
                  icon={Mail} 
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
          </div>

          {/* Team Details */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-4 md:p-8 rounded-2xl shadow-xl">
            <SectionTitle icon={Crosshair} title="Squad Configuration" />
            
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Team Type *</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Solo', 'Duo', 'Squad'].map(type => (
                  <RadioOption 
                    key={type} 
                    name="teamType" 
                    value={type} 
                    label={type} 
                    current={formData.teamType} 
                    required 
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <InputGroup label="Team Name">
                <TextInput 
                  name="teamName" 
                  placeholder="E.G. TEAM SOUL" 
                  value={formData.teamName}
                  onChange={handleChange}
                />
              </InputGroup>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Players Count *</label>
                <div className="grid grid-cols-4 gap-3">
                  {['1', '2', '3', '4'].map(count => (
                    <RadioOption 
                      key={count} 
                      name="playerCount" 
                      value={count} 
                      label={count} 
                      current={formData.playerCount} 
                      required 
                      onChange={handleChange}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-4 md:p-8 rounded-2xl shadow-xl">
            <SectionTitle icon={CreditCard} title="Payment Verification" />
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8">
               <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Payment Mode *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['UPI', 'PhonePe', 'GPay', 'Paytm'].map(mode => (
                        <RadioOption 
                          key={mode} 
                          name="paymentMode" 
                          value={mode} 
                          label={mode} 
                          current={formData.paymentMode} 
                          required 
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {formData.paymentMode && (
                    <div className="animate-fade-in-up bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                      <div className="bg-white p-3 rounded-lg inline-block shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <img src={qrCodeImg} alt="Payment QR Code" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
                      </div>
                      <p className="text-krafton-yellow text-xs mt-4 font-mono uppercase tracking-wider">
                        Scan to pay via <span className="font-bold">{formData.paymentMode}</span>
                      </p>
                    </div>
                  )}
               </div>
               
               <div className="flex flex-col justify-between">
                 <InputGroup label="Transaction Screenshot" required>
                    <label className={`
                      flex flex-col items-center justify-center h-full min-h-[200px] md:min-h-[250px]
                      border-2 border-dashed rounded-xl p-4 md:p-8 text-center transition-all duration-300 cursor-pointer
                      ${formData.paymentScreenshot 
                        ? 'border-krafton-yellow bg-krafton-yellow/5' 
                        : 'border-gray-700 bg-black/20 hover:border-gray-500 hover:bg-black/30'}
                    `}>
                      <input 
                        type="file" 
                        accept="image/*,.pdf" 
                        className="hidden" 
                        onChange={handleFileChange}
                        required
                      />
                      <div className={`p-4 rounded-full mb-4 ${formData.paymentScreenshot ? 'bg-krafton-yellow/20' : 'bg-gray-800'}`}>
                        <Upload className={formData.paymentScreenshot ? 'text-krafton-yellow' : 'text-gray-400'} size={32} />
                      </div>
                      <span className={`text-sm font-medium block max-w-[200px] truncate ${formData.paymentScreenshot ? 'text-krafton-yellow' : 'text-gray-400'}`}>
                        {formData.paymentScreenshot ? formData.paymentScreenshot.name : 'Click to upload payment proof'}
                      </span>
                      {!formData.paymentScreenshot && (
                        <p className="text-xs text-gray-500 mt-2">Supports JPG, PNG, PDF</p>
                      )}
                    </label>
                 </InputGroup>
               </div>
            </div>

            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <InputGroup label="Payment Confirmation" required>
                <label className="flex items-center gap-4 cursor-pointer group select-none">
                  <div className="relative inline-flex items-center">
                    <input 
                      type="checkbox" 
                      name="paidEntry" 
                      required
                      className="sr-only peer"
                      onChange={handleChange}
                      checked={!!formData.paidEntry}
                    />
                    <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-300 after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-krafton-yellow peer-checked:after:bg-white peer-checked:after:border-white transition-colors"></div>
                  </div>
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">I confirm that I have paid the entry fee of ₹100</span>
                </label>
              </InputGroup>
            </div>
          </div>

          {/* Final Checks */}
          <div className="bg-krafton-dark-gray/60 backdrop-blur-md border border-white/5 p-4 md:p-8 rounded-2xl shadow-xl">
             <SectionTitle icon={Shield} title="Terms & Verification" />

             <div className="space-y-5 bg-black/20 p-6 rounded-xl border border-white/5">
               <label className="flex items-start space-x-4 cursor-pointer group select-none">
                 <div className="relative mt-1">
                   <input
                     type="checkbox"
                     name="agreeRules"
                     required
                     className="peer sr-only"
                     onChange={handleChange}
                   />
                   <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-krafton-yellow peer-checked:border-krafton-yellow transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 transition-opacity transform scale-50 peer-checked:scale-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                 </div>
                 <div>
                   <span className="text-gray-200 font-bold group-hover:text-white transition-colors">I accept the Tournament Rules & Fair Play Policy</span>
                   <p className="text-xs text-gray-500 mt-1">Any use of hacks/cheats will result in immediate disqualification.</p>
                 </div>
               </label>

               <label className="flex items-start space-x-4 cursor-pointer group select-none">
                 <div className="relative mt-1">
                   <input
                     type="checkbox"
                     name="understandPrize"
                     required
                     className="peer sr-only"
                     onChange={handleChange}
                   />
                   <div className="w-6 h-6 border-2 border-gray-600 rounded bg-transparent peer-checked:bg-krafton-yellow peer-checked:border-krafton-yellow transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 peer-checked:opacity-100 transition-opacity transform scale-50 peer-checked:scale-100">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                 </div>
                 <span className="text-gray-200 font-bold group-hover:text-white transition-colors">I understand the Prize Distribution structure</span>
               </label>
             </div>

             <div className="mt-8 pt-8 border-t border-gray-800">
               <InputGroup label="WhatsApp Number for Updates" required>
                  <TextInput 
                    name="whatsappNumber" 
                    type="tel" 
                    placeholder="FOR ROOM ID & PASS" 
                    required 
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                  />
               </InputGroup>
             </div>
          </div>

          {/* Submit Action */}
          <div className="pt-8 pb-20">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-krafton-yellow to-yellow-500 text-black text-lg md:text-2xl font-black italic uppercase tracking-tighter py-4 px-6 md:py-6 md:px-8 rounded-xl hover:from-yellow-400 hover:to-yellow-300 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_30px_rgba(255,222,0,0.3)] flex items-center justify-center gap-4 group"
            >
              Confirm Registration <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-gray-500 text-xs mt-6 font-medium">
              By registering, you agree to the Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;