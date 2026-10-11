"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { ExternalLink, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function CodingProfilesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return GithubIcon;
      case "LinkedIn":
        return LinkedinIcon;
      default:
        return Terminal;
    }
  };

  return (
    <section id="profiles" className="py-24 relative bg-[#060a12]/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <span>Online Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer & Professional <span className="text-blue-500">Profiles</span>
          </h2>
          <p className="text-gray-400 text-base">
            Check out my active code repositories, ongoing projects, and professional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.codingProfiles.map((profile, idx) => {
            const Icon = getIcon(profile.name);
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between text-left group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                      {profile.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{profile.name}</h3>
                  <p className="text-xs font-mono text-gray-400 mb-3">{profile.handle}</p>
                  <p className="text-gray-300 text-xs leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
