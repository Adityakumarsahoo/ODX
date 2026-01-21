import React from 'react';
import { Trophy, Medal, Crosshair, Skull } from 'lucide-react';

const Rankings = () => {
  const leaderboardData = [
    { rank: 1, team: "Team Soul", matches: 15, wwcd: 4, kills: 142, points: 285, trend: "up" },
    { rank: 2, team: "GodLike Esports", matches: 15, wwcd: 3, kills: 156, points: 278, trend: "down" },
    { rank: 3, team: "Team XSpark", matches: 15, wwcd: 2, kills: 118, points: 245, trend: "up" },
    { rank: 4, team: "Blind Esports", matches: 14, wwcd: 3, kills: 125, points: 230, trend: "same" },
    { rank: 5, team: "Orange Rock", matches: 15, wwcd: 1, kills: 110, points: 198, trend: "up" },
    { rank: 6, team: "Global Esports", matches: 15, wwcd: 1, kills: 98, points: 185, trend: "down" },
    { rank: 7, team: "Entity Gaming", matches: 14, wwcd: 2, kills: 105, points: 175, trend: "same" },
    { rank: 8, team: "Numen Gaming", matches: 15, wwcd: 0, kills: 92, points: 160, trend: "down" },
    { rank: 9, team: "Revenant Esports", matches: 13, wwcd: 1, kills: 88, points: 155, trend: "up" },
    { rank: 10, team: "Enigma Gaming", matches: 15, wwcd: 0, kills: 85, points: 142, trend: "same" },
  ];

  const MVPData = [
    { player: "ODx-Viper", team: "ODx Esports", kills: 55, damage: "9.2k" },
    { player: "ODx-Shadow", team: "ODx Esports", kills: 48, damage: "8.1k" },
    { player: "Mortal", team: "Soul", kills: 45, damage: "7.8k" },
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic text-white mb-2 tracking-tighter uppercase">
            Season 5 <span className="text-transparent bg-clip-text bg-gradient-to-r from-krafton-yellow to-yellow-600">Rankings</span>
          </h1>
          <div className="h-1 w-16 md:w-24 bg-krafton-yellow mx-auto"></div>
          <p className="text-gray-400 mt-4 uppercase tracking-widest text-xs md:text-sm">Official Leaderboard • Week 4</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2 space-y-4">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <Trophy className="text-krafton-yellow" /> Standings
                </h2>
                <div className="flex gap-2">
                  <button className="px-2 md:px-3 py-1 bg-krafton-yellow text-black font-bold text-[10px] md:text-xs uppercase rounded">Overall</button>
                  <button className="px-2 md:px-3 py-1 bg-gray-800 text-gray-400 font-bold text-[10px] md:text-xs uppercase rounded hover:bg-gray-700">Weekly</button>
                </div>
             </div>

             <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
               <div className="grid grid-cols-12 bg-black/60 p-3 md:p-4 text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-white/5">
                 <div className="col-span-1 text-center">#</div>
                 <div className="col-span-5 md:col-span-5">Team</div>
                 <div className="col-span-2 text-center">Matches</div>
                 <div className="col-span-2 text-center">WWCD</div>
                 <div className="col-span-1 text-center hidden md:block">Kills</div>
                 <div className="col-span-2 md:col-span-1 text-right pr-2 md:pr-4">Pts</div>
               </div>
               
               {leaderboardData.map((team, index) => (
                 <div key={index} className={`grid grid-cols-12 p-3 md:p-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors ${index < 3 ? 'bg-gradient-to-r from-yellow-500/5 to-transparent' : ''}`}>
                   <div className="col-span-1 text-center font-black text-base md:text-lg text-gray-600 italic">
                     {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : team.rank}
                   </div>
                   <div className="col-span-5 md:col-span-5 font-bold text-white text-xs md:text-base flex items-center gap-2 md:gap-3">
                     <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black ${index === 0 ? 'bg-krafton-yellow text-black' : 'bg-gray-800 text-gray-400'}`}>
                        {team.team.substring(0, 1)}
                     </div>
                     <span className="truncate">{team.team}</span>
                   </div>
                   <div className="col-span-2 text-center text-gray-400 font-medium text-xs md:text-base">{team.matches}</div>
                   <div className="col-span-2 text-center text-white font-bold text-xs md:text-base">{team.wwcd}</div>
                   <div className="col-span-1 text-center text-gray-400 hidden md:block">{team.kills}</div>
                   <div className="col-span-2 md:col-span-1 text-right pr-2 md:pr-4 text-krafton-yellow font-black text-base md:text-lg">{team.points}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-8">
            {/* MVP Card */}
            <div className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Skull size={100} className="text-krafton-yellow" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 uppercase italic">
                <Crosshair className="text-krafton-yellow" /> Top Fraggers
              </h3>
              
              <div className="space-y-4">
                {MVPData.map((player, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-2xl font-black text-gray-700 italic">0{idx + 1}</div>
                    <div className="flex-1">
                      <div className="text-white font-bold uppercase">{player.player}</div>
                      <div className="text-xs text-krafton-yellow">{player.team}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">{player.kills} <span className="text-[10px] text-gray-500">KILLS</span></div>
                      <div className="text-xs text-gray-500">{player.damage} DMG</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Stats */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
               <h3 className="text-xl font-bold text-white mb-4 uppercase italic flex items-center gap-2">
                 <Medal className="text-krafton-yellow" /> Map Win Rate
               </h3>
               <div className="space-y-4">
                 <div>
                   <div className="flex justify-between text-xs text-gray-400 mb-1">
                     <span>ERANGEL</span>
                     <span>Team Soul (35%)</span>
                   </div>
                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-krafton-yellow w-[35%]"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs text-gray-400 mb-1">
                     <span>MIRAMAR</span>
                     <span>GodLike (28%)</span>
                   </div>
                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[28%]"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-xs text-gray-400 mb-1">
                     <span>SANHOK</span>
                     <span>Blind (22%)</span>
                   </div>
                   <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[22%]"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
