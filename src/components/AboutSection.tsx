"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Code2, Cpu, Zap, Binary, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const highlightIcons = [Code2, Cpu, Zap, Binary];

  return (
    <section id="about" className="py-24 relative bg-[#060a12]/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <span>Introduction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-400 text-base">
            {PORTFOLIO_DATA.about.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Bio Paragraphs */}
          <div className="lg:col-span-6 space-y-5 text-gray-300 text-sm leading-relaxed text-left">
            {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
              <p key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                {p}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Responsive Design First</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                <span>Automated Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Clean & Readable Code</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.about.highlights.map((h, idx) => {
              const Icon = highlightIcons[idx] || Code2;
              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel p-6 border border-white/10 hover:border-blue-500/30 transition-all text-left space-y-3 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{h.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
