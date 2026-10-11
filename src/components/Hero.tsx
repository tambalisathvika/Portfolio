"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ArrowRight, Mail, Code, Sparkles, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden grid-bg">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Welcome & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-medium backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{PORTFOLIO_DATA.personal.status}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 flex items-center gap-1 font-mono text-[11px]">
                <MapPin className="w-3 h-3 text-gray-400" />
                {PORTFOLIO_DATA.personal.location}
              </span>
            </div>

            {/* Main Headline (like reference portfolio) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Welcome to{" "}
              <span className="text-blue-500 font-extrabold">
                {PORTFOLIO_DATA.personal.name}&apos;s
              </span>{" "}
              Portfolio
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            {/* Call To Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <span>View Projects</span>
              </a>

              {/* Direct Social Icon Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Highlights Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-blue-400" />
                <span>Responsive Web Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>n8n Workflow Automation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Clean Code & Fast Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-6 border border-white/15 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-gray-400">
                    sathvika.dev
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                  Full Stack & Automation
                </span>
              </div>

              {/* Profile Card Body */}
              <div className="space-y-4 text-left">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                    Primary Focus
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Modern Websites & n8n Workflows
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Building responsive web applications and connecting Google Sheets, Gmail, and APIs into automated business pipelines.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-gray-500 block mb-1">
                      Web Development
                    </span>
                    <span className="text-sm font-semibold text-blue-400">
                      React • Tailwind • JS
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-gray-500 block mb-1">
                      Automation Tools
                    </span>
                    <span className="text-sm font-semibold text-indigo-400">
                      n8n • Sheets • Gmail
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-between text-xs">
                  <span className="text-gray-300">Explore active GitHub projects</span>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-semibold font-mono"
                  >
                    @tambalisathvika ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
