"use client";

import { FiShield, FiFlag, FiCode, FiAward } from "react-icons/fi";
import { FaTerminal } from "react-icons/fa";

const PLATFORMS = [
  {
    name: "TryHackMe",
    subtitle: "Top 8% Worldwide",
    icon: FaTerminal,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    metricValue: "0",
    metricLabel: "ROOMS COMPLETED",
    progress: 10,
    progressColor: "bg-red-500",
  },
  {
    name: "LetsDefend",
    subtitle: "Blue-team simulations",
    icon: FiShield,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    metricValue: "0",
    metricLabel: "SOC INVESTIGATIONS",
    progress: 5,
    progressColor: "bg-blue-500",
  },
  {
    name: "picoCTF",
    subtitle: "Binary, web & crypto",
    icon: FiFlag,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50",
    metricValue: "0",
    metricLabel: "CHALLENGES SOLVED",
    progress: 8,
    progressColor: "bg-rose-500",
  },
  {
    name: "LeetCode",
    subtitle: "Data structures & algorithms",
    icon: FiCode,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    metricValue: "0",
    metricLabel: "PROBLEMS SOLVED",
    progress: 15,
    progressColor: "bg-amber-500",
  },
  {
    name: "HackerRank",
    subtitle: "Problem solving & coding",
    icon: FiAward,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    metricValue: "0",
    metricLabel: "BADGES EARNED",
    progress: 12,
    progressColor: "bg-emerald-500",
  },
];

export default function Practice() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 overflow-hidden">
      
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
        
        <div className="space-y-8 md:pt-2"> 
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Continuous Learning
              </h2>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              HANDS-ON
              <span className="block mt-1 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                PRACTICE.
              </span>
            </h1>
            
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Beyond the job, I sharpen my skills daily on hands-on security labs and CTF platforms, 
              simulating real attacks and defenses to stay ahead of evolving threats.
            </p>
          </div>

        
          <div className="flex gap-12 pt-4 border-t border-slate-100">
            <div>
              <span className="block text-3xl font-bold text-slate-900">0+</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                CHALLENGES COMPLETED
              </span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-slate-900">5</span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                ACTIVE PLATFORMS
              </span>
            </div>
          </div>
        </div>

       
        <div className="rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm p-6 shadow-sm space-y-5">
          {PLATFORMS.map((platform, idx) => (
            <div key={idx} className="space-y-2.5">
              
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${platform.iconBg} ${platform.iconColor}`}>
                  <platform.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 leading-none">
                    {platform.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-medium mt-1 block">
                    {platform.subtitle}
                  </span>
                </div>
              </div>

              
              <div className="space-y-1 pl-12">
                <div className="flex items-baseline justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    {platform.metricLabel}
                  </span>
                  <span className="text-xs font-extrabold text-slate-900 font-mono">
                    {platform.metricValue}
                  </span>
                </div>

                
                <div className="relative h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${platform.progressColor}`} 
                    style={{ width: `${platform.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}