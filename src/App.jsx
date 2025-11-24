import React, { useState, useEffect } from 'react';
import { Trophy, Zap, Target, Flame, Shield, Star, TrendingUp, Award, Crown, ChevronRight, BarChart3, Activity, Users, Lock, Check, ArrowUpRight, Sparkles, Crosshair, Swords, HeartPulse, Sun, Moon, Component, Shirt, Footprints, Copy, Calendar, Dumbbell, Timer, ClipboardList } from 'lucide-react';

const CricketPlayerProfile = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [glowIntensity, setGlowIntensity] = useState(0);
  const [characterBounce, setCharacterBounce] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const theme = {
    bg: isDarkMode ? 'bg-black' : 'bg-gray-100',
    panel: isDarkMode ? 'bg-zinc-950' : 'bg-white',
    panelBorder: isDarkMode ? 'border-zinc-800' : 'border-gray-200',
    subPanel: isDarkMode ? 'bg-zinc-900' : 'bg-gray-50',
    subPanelBorder: isDarkMode ? 'border-zinc-800' : 'border-gray-200',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSub: isDarkMode ? 'text-zinc-400' : 'text-gray-500',
    iconBase: isDarkMode ? 'text-zinc-600' : 'text-gray-400',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
      setCharacterBounce(Math.sin(glowIntensity * 0.1) * 5);
    }, 50);
    return () => clearInterval(interval);
  }, [glowIntensity]);

  const handleCopy = () => {
    navigator.clipboard.writeText("0xC475A6d06f67122bb55e1bF5BB03b7AE4EDfCedf");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const player = {
    name: "HARDIK PANDYA",
    number: "33",
    nationality: "IND",
    role: "Power All-Rounder",
    tier: "S+",
    overall: 91,
    potential: 95,
    level: 45,
    xp: 7850,
    maxXp: 10000,
    image: "hardik.png",
    team: {
      national: "India",
      club: "Mumbai Indians",
      logo: "🇮🇳"
    },
    seasonStats: {
      matches: 14,
      runs: 485,
      wickets: 18,
      catches: 8
    },
    gear: [
      { name: "Kashmir Willow MK-II", type: "Bat", rarity: "legendary", boost: "+5 PWR" },
      { name: "Speedster Spikes v4", type: "Shoes", rarity: "epic", boost: "+3 SPD" },
      { name: "Mumbai Indians Kit 25", type: "Kit", rarity: "rare", boost: "+2 STM" }
    ],
    traits: [
      { label: "LEADER", color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
      { label: "AGGRESSIVE", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
      { label: "CLUTCH", color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" }
    ],
    stats: {
      batting: { overall: 89 },
      bowling: { overall: 95 }
    },
    attributes: {
      technical: { value: 82, max: 100 },
      tactical: { value: 79, max: 100 },
      physical: { value: 94, max: 100 }
    },
    physicalStats: {
      battingStyle: "Right",
      age: 32,
      height: "179 CM",
      foot: "Right"
    },
    performance: {
      condition: 100,
      form: "Excellent",
      status: "Ready"
    },
    abilities: [
      { name: "Death Over Finisher", unlocked: true, level: "MAX", icon: "⚡" },
      { name: "Yorker Specialist", unlocked: true, level: "MAX", icon: "🎯" },
      { name: "Power Hitter", unlocked: true, level: 5, icon: "💥" },
      { name: "Clutch Performer", unlocked: false, level: 3, icon: "🔥" }
    ],
    recentMatches: [
      { vs: "AUS", score: "87(55)", wickets: "2/28", result: "W" },
      { vs: "ENG", score: "45(32)", wickets: "1/35", result: "W" },
      { vs: "SA", score: "23(19)", wickets: "3/22", result: "L" },
      { vs: "NZ", score: "92(56)", wickets: "1/41", result: "W" },
      { vs: "PAK", score: "65(42)", wickets: "2/30", result: "W" }
    ],
    matchHistory: [
      { date: "24 Nov", opp: "Australia", format: "T20", runs: 45, balls: 22, wkts: 2, pts: 120 },
      { date: "21 Nov", opp: "South Africa", format: "T20", runs: 12, balls: 8, wkts: 0, pts: 15 },
      { date: "18 Nov", opp: "England", format: "ODI", runs: 87, balls: 65, wkts: 1, pts: 145 },
      { date: "15 Nov", opp: "New Zealand", format: "ODI", runs: 34, balls: 28, wkts: 3, pts: 95 },
    ],
    training: [
      { name: "Power Hitting Drill", type: "Batting", duration: "45m", progress: 80, status: "Active" },
      { name: "Death Bowling Sim", type: "Bowling", duration: "30m", progress: 40, status: "Pending" },
      { name: "Cardio & Agility", type: "Fitness", duration: "60m", progress: 100, status: "Completed" }
    ],
    achievements: [
      { name: "World Cup Champion", icon: "🏆", rarity: "legendary" },
      { name: "IPL Winner", icon: "👑", rarity: "epic" },
      { name: "50+ Sixes", icon: "⭐", rarity: "rare" }
    ]
  };

  const getRarityColor = (rarity) => {
    const colors = {
      legendary: 'from-yellow-400 via-orange-500 to-red-500',
      epic: 'from-purple-400 via-pink-500 to-purple-600',
      rare: 'from-blue-400 via-cyan-500 to-blue-600'
    };
    return colors[rarity];
  };

  const SeasonSnapshotCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <BarChart3 className="w-5 h-5 text-blue-500" />
        SEASON SNAPSHOT
      </h3>
      <div className="grid grid-cols-4 gap-2">
        <div className={`${theme.subPanel} rounded-lg p-2 text-center border ${theme.subPanelBorder}`}>
          <div className={`text-xs ${theme.textSub} mb-1`}>MAT</div>
          <div className={`text-xl font-black ${theme.text}`}>{player.seasonStats.matches}</div>
        </div>
        <div className={`${theme.subPanel} rounded-lg p-2 text-center border ${theme.subPanelBorder}`}>
          <div className={`text-xs ${theme.textSub} mb-1`}>RUNS</div>
          <div className="text-xl font-black text-orange-500">{player.seasonStats.runs}</div>
        </div>
        <div className={`${theme.subPanel} rounded-lg p-2 text-center border ${theme.subPanelBorder}`}>
          <div className={`text-xs ${theme.textSub} mb-1`}>WKT</div>
          <div className="text-xl font-black text-purple-500">{player.seasonStats.wickets}</div>
        </div>
        <div className={`${theme.subPanel} rounded-lg p-2 text-center border ${theme.subPanelBorder}`}>
          <div className={`text-xs ${theme.textSub} mb-1`}>CT</div>
          <div className="text-xl font-black text-green-500">{player.seasonStats.catches}</div>
        </div>
      </div>
    </div>
  );

  const SignatureGearCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Shield className="w-5 h-5 text-purple-500" />
        LOADOUT
      </h3>
      <div className="space-y-3">
        {player.gear.map((item, idx) => (
          <div key={idx} className={`flex items-center gap-3 p-3 ${theme.subPanel} rounded-xl border ${theme.subPanelBorder} hover:border-purple-500/50 transition-colors group cursor-pointer`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-gradient-to-br ${getRarityColor(item.rarity)} text-white shadow-lg border border-black/20`}>
              {item.type === 'Bat' && '🏏'}
              {item.type === 'Shoes' && '👟'}
              {item.type === 'Kit' && '👕'}
            </div>
            <div className="flex-1">
              <div className={`text-sm font-bold ${theme.text} group-hover:text-purple-500 transition-colors`}>{item.name}</div>
              <div className={`text-xs ${theme.textSub} uppercase flex items-center gap-1`}>
                {item.rarity}
              </div>
            </div>
            <div className={`text-xs font-black ${isDarkMode ? 'text-purple-400 bg-purple-400/10' : 'text-purple-600 bg-purple-100'} px-2 py-1 rounded`}>
              {item.boost}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const FitnessCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <HeartPulse className="w-5 h-5 text-green-500" />
        CONDITION
      </h3>
      <div className="space-y-5">
        <div>
           <div className="flex justify-between text-xs font-bold mb-1">
              <span className={theme.textSub}>STAMINA</span>
              <span className="text-green-500">98%</span>
           </div>
           <div className={`h-3 ${theme.subPanel} rounded-full overflow-hidden border ${theme.subPanelBorder}`}>
              <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[98%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
           </div>
        </div>
        <div>
           <div className="flex justify-between text-xs font-bold mb-1">
              <span className={theme.textSub}>MORALE</span>
              <span className="text-blue-500">100%</span>
           </div>
           <div className={`h-3 ${theme.subPanel} rounded-full overflow-hidden border ${theme.subPanelBorder}`}>
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
           </div>
        </div>
      </div>
    </div>
  );

  const PlayStyleCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Swords className="w-5 h-5 text-red-500" />
        PLAYSTYLE & TRAITS
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {player.traits.map((trait, idx) => (
          <span key={idx} className={`px-3 py-1 rounded-md text-xs font-black border ${trait.bg} ${trait.color} ${trait.border}`}>
            {trait.label}
          </span>
        ))}
      </div>
      <div className={`${theme.subPanel} p-3 rounded-xl border ${theme.subPanelBorder}`}>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-bold ${theme.textSub}`}>IMPACT ZONE</span>
          <span className={`text-xs font-bold ${theme.text}`}>HIGH</span>
        </div>
        <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[85%]"></div>
        </div>
        <div className={`text-[10px] ${theme.textSub} mt-2 text-center`}>
          Dominates in death overs • High Strike Rate vs Spin
        </div>
      </div>
    </div>
  );

  const AchievementsCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Trophy className="w-5 h-5 text-yellow-500" />
        TROPHY CASE
      </h3>
      <div className="space-y-3">
        {player.achievements.map((achievement, idx) => (
          <div key={idx} className={`p-4 rounded-xl border-2 bg-gradient-to-r ${getRarityColor(achievement.rarity)} hover:scale-105 transition-transform cursor-pointer relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl text-white">{achievement.icon}</div>
                <div>
                  <div className="text-sm font-bold text-white">{achievement.name}</div>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-white opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PowerStatsCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Activity className="w-5 h-5 text-orange-500" />
        POWER SUMMARY
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border-2 border-red-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-2">🏏</div>
          <div className="text-3xl font-black text-red-500">{player.stats.batting.overall}</div>
          <div className={`text-xs ${theme.textSub} mt-1`}>BATTING</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-4 text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-2">⚡</div>
          <div className="text-3xl font-black text-purple-500">{player.stats.bowling.overall}</div>
          <div className={`text-xs ${theme.textSub} mt-1`}>BOWLING</div>
        </div>
      </div>
    </div>
  );

  const SkillsCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6 h-full`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Target className="w-5 h-5 text-cyan-500" />
        SKILLS & ATTRIBUTES
      </h3>
      <div className="space-y-4">
        {Object.entries(player.attributes).map(([key, stat]) => (
          <div key={key}>
            <div className="flex justify-between mb-2">
              <span className={`text-sm font-bold uppercase ${theme.textSub}`}>{key}</span>
              <span className={`text-lg font-black ${theme.text}`}>{stat.value}</span>
            </div>
            <div className={`h-3 ${theme.subPanel} rounded-full overflow-hidden border-2 ${theme.subPanelBorder}`}>
              <div className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500" style={{ width: `${(stat.value / stat.max) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SpecialMovesCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6 h-full`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Zap className="w-5 h-5 text-yellow-500" />
        SPECIAL MOVES
      </h3>
      <div className="space-y-3">
        {player.abilities.map((ability, idx) => (
          <div key={idx} className={`relative p-4 rounded-xl border-2 transition-all ${
            ability.unlocked ? 'bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/50 hover:border-orange-500' : `${theme.subPanel} ${theme.subPanelBorder}`
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border-2 ${
                  ability.unlocked ? 'bg-gradient-to-br from-orange-500 to-red-500 border-black text-white' : `${theme.subPanelBorder} ${theme.iconBase}`
                }`}>
                  {ability.unlocked ? ability.icon : <Lock className="w-5 h-5" />}
                </div>
                <div>
                  <div className={`text-sm font-bold ${theme.text}`}>{ability.name}</div>
                  <div className={`text-xs ${theme.textSub}`}>{ability.unlocked ? '✓ Unlocked' : '🔒 Locked'}</div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-black border-2 ${
                ability.level === 'MAX' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 border-black text-black' : `${theme.subPanelBorder} ${theme.textSub}`
              }`}>
                {ability.level === 'MAX' ? 'MAX' : `LVL ${ability.level}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RecentFormCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6 h-full`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <TrendingUp className="w-5 h-5 text-green-500" />
        RECENT FORM
      </h3>
      <div className="space-y-2">
        {player.recentMatches.map((match, idx) => (
          <div key={idx} className={`flex items-center justify-between p-3 ${theme.subPanel} border-2 ${theme.subPanelBorder} rounded-xl hover:border-orange-500/50 transition-all`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-sm text-white border-2 ${
                match.result === 'W' ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-black' : 'bg-gradient-to-br from-red-400 to-red-600 border-black'
              }`}>
                {match.result}
              </div>
              <div>
                <div className={`text-sm font-bold ${theme.text}`}>vs {match.vs}</div>
                <div className={`text-xs ${theme.textSub}`}>{match.score} • {match.wickets}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PlayerInfoCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6 h-full`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Users className="w-5 h-5 text-blue-400" />
        BIO DATA
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {Object.entries(player.physicalStats).map(([key, value]) => (
          <div key={key} className={`${theme.subPanel} border-2 ${theme.subPanelBorder} rounded-xl p-3`}>
            <div className={`text-xs ${theme.textSub} mb-1 uppercase`}>{key}</div>
            <div className="text-lg font-black text-orange-500">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl">
        <div className="text-xs text-orange-500 font-bold mb-1">CONTRACT STATUS</div>
        <div className={`text-sm font-medium ${theme.text}`}>Signed until 2028 • Key Player</div>
      </div>
    </div>
  );

  const MatchesHistoryCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6 h-full`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Calendar className="w-5 h-5 text-blue-500" />
        GAME LOGS
      </h3>
      <div className="space-y-2">
        <div className={`flex justify-between text-[10px] font-bold ${theme.textSub} px-4 pb-2 border-b ${theme.panelBorder}`}>
          <div className="w-16">DATE</div>
          <div className="flex-1">OPPONENT</div>
          <div className="w-12 text-center">RUNS</div>
          <div className="w-12 text-center">WKTS</div>
          <div className="w-12 text-right">PTS</div>
        </div>
        {player.matchHistory.map((match, idx) => (
          <div key={idx} className={`flex justify-between items-center p-3 ${theme.subPanel} border ${theme.subPanelBorder} rounded-xl hover:bg-zinc-800/50 transition-colors`}>
            <div className={`w-16 text-xs font-bold ${theme.textSub}`}>{match.date}</div>
            <div className="flex-1">
              <div className={`text-sm font-bold ${theme.text}`}>{match.opp}</div>
              <div className="text-[10px] text-zinc-500">{match.format}</div>
            </div>
            <div className={`w-12 text-center font-bold ${theme.text}`}>{match.runs}</div>
            <div className="w-12 text-center font-bold text-purple-500">{match.wkts}</div>
            <div className="w-12 text-right font-black text-orange-500">+{match.pts}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const TrainingCard = () => (
    <div className={`${theme.panel} border-2 ${theme.panelBorder} rounded-2xl p-6 h-full`}>
      <h3 className={`text-lg font-black mb-4 flex items-center gap-2 ${theme.text}`}>
        <Dumbbell className="w-5 h-5 text-green-500" />
        ACTIVE DRILLS
      </h3>
      <div className="space-y-4">
        {player.training.map((drill, idx) => (
          <div key={idx} className={`${theme.subPanel} p-4 rounded-xl border ${theme.subPanelBorder}`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-800 border ${theme.subPanelBorder}`}>
                  {drill.type === 'Batting' && '🏏'}
                  {drill.type === 'Bowling' && '⚡'}
                  {drill.type === 'Fitness' && '🏃'}
                </div>
                <div>
                  <div className={`text-sm font-bold ${theme.text}`}>{drill.name}</div>
                  <div className={`text-xs ${theme.textSub} flex items-center gap-1`}>
                    <Timer className="w-3 h-3" /> {drill.duration}
                  </div>
                </div>
              </div>
              <div className={`text-[10px] font-black px-2 py-1 rounded ${
                drill.status === 'Completed' ? 'bg-green-500/20 text-green-500' : 
                drill.status === 'Active' ? 'bg-orange-500/20 text-orange-500' : 'bg-zinc-700 text-zinc-400'
              }`}>
                {drill.status}
              </div>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className={`h-full ${drill.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'}`} 
                style={{ width: `${drill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`w-full h-screen ${theme.bg} ${theme.text} flex overflow-hidden transition-colors duration-500`}>
      <div className={`w-20 ${theme.panel} border-r ${theme.panelBorder} flex flex-col items-center py-6 shrink-0 z-20`}>
        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl mb-8 flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
          <Shield className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex flex-col gap-2">
          {[
            { icon: '🏠', active: false },
            { icon: '👤', active: true },
            { icon: '⚡', active: false },
            { icon: '📊', active: false },
            { icon: '🎯', active: false }
          ].map((item, idx) => (
            <button
              key={idx}
              className={`w-14 h-14 rounded-xl transition-all flex items-center justify-center text-2xl ${
                item.active
                  ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500 shadow-lg shadow-orange-500/30 text-orange-500'
                  : `hover:${theme.subPanel} border border-transparent ${theme.iconBase}`
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex">
        <div className={`w-[35%] bg-gradient-to-b ${isDarkMode ? 'from-zinc-950 via-black to-zinc-950' : 'from-white via-gray-50 to-white'} border-r ${theme.panelBorder} flex flex-col relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-red-500/10"></div>
          </div>

          <div className={`p-6 border-b ${theme.panelBorder} relative z-10`}>
            <button className={`flex items-center gap-2 ${theme.textSub} hover:${theme.text} transition-colors group`}>
              <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold tracking-wider">BACK</span>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center relative p-8">
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-2 border-dashed border-orange-500/30 animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute w-[90%] h-[90%] rounded-full border border-red-500/20"></div>
              <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-radial from-orange-500/20 to-transparent animate-pulse"></div>
              
              <div className="absolute w-64 h-32 rounded-full bg-gradient-to-r from-orange-500/30 via-red-500/30 to-orange-500/30 blur-2xl bottom-[-20px]"
                style={{ opacity: 0.4 + (glowIntensity / 200) }}
              ></div>
            </div>

            <div className="relative z-10" style={{ transform: `translateY(${characterBounce}px)` }}>
              <div className="absolute -inset-4 bg-gradient-to-b from-orange-500/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative w-[380px] h-[500px]">
                <img src={player.image} alt={player.name} className="w-full h-full object-contain z-20 relative drop-shadow-2xl" />
                
                <div className="absolute top-10 right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center border-4 border-black shadow-xl animate-pulse text-black z-30">
                  <div className="text-center">
                    <div className="text-2xl font-black">{player.overall}</div>
                    <div className="text-xs font-bold">PWR</div>
                  </div>
                </div>

                <div className="absolute top-10 left-4 bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center font-black text-2xl border-4 border-black text-white shadow-lg rotate-12 hover:rotate-0 transition-transform z-30">
                  #{player.number}
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 px-6 py-2 rounded-full font-black text-xl shadow-lg border-4 border-black flex items-center gap-2 text-black z-30">
                  <Crown className="w-5 h-5" />
                  {player.tier}
                </div>
              </div>

              <div className="absolute right-0 top-32">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg border-2 border-black animate-bounce text-white">
                  ⚡
                </div>
              </div>
              <div className="absolute left-0 top-48">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shadow-lg border-2 border-black animate-bounce text-white" style={{ animationDelay: '0.5s' }}>
                  🎯
                </div>
              </div>
            </div>

            <div className={`absolute bottom-8 left-8 right-8 ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-xl rounded-2xl border-2 border-orange-500/50 p-4 shadow-2xl z-40`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-black border-2 border-black text-white">
                    {player.level}
                  </div>
                  <div>
                    <div className={`text-xs ${theme.textSub}`}>LEVEL</div>
                    <div className={`text-sm font-bold ${theme.text}`}>{player.name}</div>
                  </div>
                </div>
                <div className="text-xs text-orange-400 font-bold">{player.xp}/{player.maxXp} XP</div>
              </div>
              <div className={`h-3 ${theme.subPanel} rounded-full overflow-hidden border ${theme.subPanelBorder}`}>
                <div className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 relative" style={{ width: `${(player.xp / player.maxXp) * 100}%` }}>
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex-1 flex flex-col ${theme.bg}`}>
          <div className={`h-20 border-b ${theme.panelBorder} flex items-center justify-between px-8 ${isDarkMode ? 'bg-zinc-950/50' : 'bg-white/50'}`}>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 rounded-xl flex items-center justify-center text-2xl">
                  {player.team.logo}
                </div>
                <div>
                  <div className={`text-xs ${theme.textSub} mb-1`}>TEAM</div>
                  <div className={`text-sm font-bold ${theme.text}`}>{player.team.national}</div>
                </div>
              </div>
              <div className={`h-10 w-px ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-300'}`}></div>
              <div>
                <div className={`text-xs ${theme.textSub} mb-1`}>CLUB</div>
                <div className="text-sm font-bold text-orange-500">{player.team.club}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2 border-2 border-black/50 text-white">
                <Sparkles className="w-4 h-4" />
                UPGRADE
              </button>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-11 h-11 ${theme.subPanel} rounded-xl flex items-center justify-center ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-200'} transition-colors border ${theme.subPanelBorder}`}
              >
                {isDarkMode ? 
                  <Sun className="w-5 h-5 text-white" /> : 
                  <Moon className="w-5 h-5 text-zinc-900" />
                }
              </button>

              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-11 h-11 ${theme.subPanel} rounded-xl flex items-center justify-center ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-200'} transition-colors border ${isFavorite ? 'border-yellow-500/50' : theme.subPanelBorder}`}
              >
                <Star className={`w-5 h-5 transition-all ${isFavorite ? 'text-yellow-500 fill-yellow-500' : theme.iconBase}`} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <div className={`${theme.panel} border-2 border-orange-500/30 rounded-2xl p-6 mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-orange-500 font-bold mb-2 tracking-widest">{player.nationality} • {player.role}</div>
                    <h1 className="text-4xl font-black mb-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                      {player.name}
                    </h1>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-xs font-bold text-green-400 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        {player.performance.status}
                      </div>
                      <div className="px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full text-xs font-bold text-orange-400">
                        {player.performance.form}
                      </div>
                    </div>
                  </div>
                  <div className="text-6xl font-black bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {player.overall}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                {['OVERVIEW', 'ABILITIES', 'STATS', 'MATCHES', 'TRAINING'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab.toLowerCase())}
                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      selectedTab === tab.toLowerCase()
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/50 text-white'
                        : `${theme.subPanel} ${theme.textSub} hover:opacity-80`
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                
                {selectedTab === 'overview' && (
                  <>
                    <div className="space-y-6">
                      <PowerStatsCard />
                      <SeasonSnapshotCard />
                      <SignatureGearCard />
                    </div>
                    <div className="space-y-6">
                      <AchievementsCard />
                      <FitnessCard /> 
                      <PlayStyleCard />
                    </div>
                  </>
                )}

                {selectedTab === 'abilities' && (
                  <>
                    <div className="space-y-6">
                      <SkillsCard />
                    </div>
                    <div className="space-y-6">
                      <SpecialMovesCard />
                    </div>
                  </>
                )}

                {selectedTab === 'stats' && (
                  <>
                    <div className="space-y-6">
                      <RecentFormCard />
                    </div>
                    <div className="space-y-6">
                      <PlayerInfoCard />
                    </div>
                  </>
                )}

                {selectedTab === 'matches' && (
                  <>
                    <div className="col-span-2">
                      <MatchesHistoryCard />
                    </div>
                  </>
                )}

                {selectedTab === 'training' && (
                  <>
                    <div className="col-span-2">
                      <TrainingCard />
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>

          <div className={`h-20 border-t ${theme.panelBorder} flex items-center justify-between px-8 ${isDarkMode ? 'bg-zinc-950/50' : 'bg-white/50'}`}>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <div className={`text-sm ${theme.textSub}`}>Transfer Value</div>
                <div className="text-2xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">$2.5M</div>
              </div>
              
              <div className="flex flex-col relative">
                <div className={`text-[10px] ${theme.textSub} font-bold mb-0.5`}>OWNED BY</div>
                <div className={`flex items-center gap-2 text-xs font-mono ${theme.text}`}>
                  0xC475...Cedf 
                  <button onClick={handleCopy} className="p-1 hover:bg-zinc-800 rounded transition-colors">
                    {copySuccess ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className={`w-3 h-3 cursor-pointer hover:text-orange-500 transition-colors`} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className={`px-6 py-3 ${theme.subPanel} border ${theme.subPanelBorder} rounded-lg font-bold text-sm hover:opacity-80 transition-all flex items-center gap-2 ${theme.text}`}>
                <BarChart3 className="w-4 h-4" />
                COMPARE
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2 border-2 border-black/50 text-white">
                ADD TO SQUAD
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketPlayerProfile;