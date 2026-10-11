"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, Server, Wrench, BrainCircuit } from "lucide-react";

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: PORTFOLIO_DATA.skills.frontend,
      accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Backend & Automation",
      icon: Server,
      skills: PORTFOLIO_DATA.skills.backendAndAutomation,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Databases & Tools",
      icon: Wrench,
      skills: PORTFOLIO_DATA.skills.databaseAndTools,
      accent: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Core Fundamentals",
      icon: BrainCircuit,
      skills: PORTFOLIO_DATA.skills.fundamentals,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-base">
            Languages, frameworks, automation tools, and technologies I work with to build reliable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-blue-500/30 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl border ${group.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                      >
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                        <span className="text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded bg-black/40 border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
