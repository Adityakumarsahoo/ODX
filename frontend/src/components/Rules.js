import React from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Crosshair, 
  Trophy, 
  Users, 
  Clock, 
  CreditCard, 
  WifiOff, 
  MessageSquare, 
  Gavel, 
  Gift 
} from 'lucide-react';

const Rules = () => {
  return (
    <div className="min-h-screen bg-krafton-black pt-24 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic text-white mb-4 md:mb-6 uppercase tracking-tighter">
            Rules <span className="text-krafton-yellow">&</span> Regulations
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto border-l-4 border-krafton-yellow pl-4 text-left">
            Fair play and sportsmanship are the cornerstones of our tournament. Please read the following rules carefully before registering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          
          {/* Eligibility */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                <Users size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Eligibility</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>All players must have a valid BGMI account.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Only registered players are allowed to participate.</span>
              </li>
            </ul>
          </div>

          {/* Entry & Registration */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                <CreditCard size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Entry & Registration</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Entry fee is ₹100 per team (non-refundable).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Registration is confirmed only after successful payment and form submission.</span>
              </li>
            </ul>
          </div>

          {/* Match Timing */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                <Clock size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Match Timing</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Tournament starts on <strong className="text-white">27 January 2026</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Players must join the room 10 minutes before match time.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Late entry may lead to disqualification.</span>
              </li>
            </ul>
          </div>

          {/* Fair Play Policy */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                <Shield size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Fair Play Policy</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Use of hacks, cheats, mods, scripts, or third-party tools is strictly prohibited.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Any player found cheating will be immediately disqualified without refund.</span>
              </li>
            </ul>
          </div>

          {/* Game Settings */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Crosshair size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Game Settings</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Map, mode, and room details will be shared before the match.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Default BGMI tournament settings will be followed.</span>
              </li>
            </ul>
          </div>

          {/* Team Rules */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-pink-500/20 rounded-lg text-pink-400">
                <Users size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Team Rules</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Team changes after registration are not allowed.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Substitute players are not permitted.</span>
              </li>
            </ul>
          </div>

          {/* Scoring & Rewards */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-400">
                <Trophy size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Scoring & Rewards</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
               <div className="bg-black/30 p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-3xl mb-1">🥇</div>
                  <div className="text-krafton-yellow font-bold text-lg">1st Prize</div>
                  <div className="text-white font-black text-2xl">₹1000</div>
               </div>
               <div className="bg-black/30 p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-3xl mb-1">🥈</div>
                  <div className="text-gray-300 font-bold text-lg">2nd Prize</div>
                  <div className="text-white font-black text-2xl">₹500</div>
               </div>
               <div className="bg-black/30 p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-3xl mb-1">🎯</div>
                  <div className="text-red-400 font-bold text-lg">Per Kill</div>
                  <div className="text-white font-black text-2xl">₹5</div>
               </div>
            </div>
            <div className="mt-4 flex items-start gap-3 text-gray-300">
               <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
               <span>Kill rewards will be counted only for valid in-game eliminations.</span>
            </div>
          </div>

          {/* Disconnection Policy */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                <WifiOff size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Disconnection Policy</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>No rematch or compensation for internet issues, device problems, or power cuts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Players are responsible for their own network stability.</span>
              </li>
            </ul>
          </div>

          {/* Behavior & Conduct */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-rose-500/20 rounded-lg text-rose-400">
                <MessageSquare size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Behavior & Conduct</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Abusive language, threats, or misconduct will result in immediate disqualification.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Respect organizers and fellow players.</span>
              </li>
            </ul>
          </div>

          {/* Result Declaration */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                <Gavel size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Result Declaration</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Organizer’s decision will be final and binding in all matters.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Results will be announced after match verification.</span>
              </li>
            </ul>
          </div>

          {/* Prize Distribution */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Gift size={28} />
              </div>
              <h2 className="text-xl font-black italic text-white uppercase tracking-wider">Prize Distribution</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-krafton-yellow shrink-0 mt-1" />
                <span>Prizes will be transferred via UPI / Online payment within 24–48 hours after result declaration.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-2 text-krafton-yellow">
                <AlertTriangle size={24} />
                <h3 className="text-lg font-bold uppercase">Important Note</h3>
              </div>
              <p className="text-gray-400 text-sm max-w-xl mx-auto">
                  By registering for the tournament, you acknowledge that you have read, understood, and agreed to abide by all the rules mentioned above.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
