"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <span>Background & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-blue-500">Learning</span>
          </h2>
          <p className="text-gray-400 text-base">
            Academic qualifications and practical milestones that have shaped my technical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Education */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-2xl glass-panel p-6 border border-white/10 hover:border-blue-500/30 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-blue-400 flex items-center gap-1 shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                    <span>{edu.institution}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Milestones & Practical Experience */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Milestones & Growth</h3>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.milestones.map((m) => (
                <div
                  key={m.id}
                  className="rounded-2xl glass-panel p-6 border border-white/10 hover:border-indigo-500/30 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">{m.title}</h4>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                      {m.badge}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>{m.organization}</span>
                    <span>{m.date}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed pt-1">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
