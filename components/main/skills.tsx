"use client";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.95)" }}
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-20 px-4"
    >
      {/* Skill Title and Text */}
      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="text-lg text-gray-300">
          Explore my technical expertise below.
        </p>
      </div>

      <SkillText />

      {/* Reusable skill section */}
      {[
        { title: "Coding Skill", data: OTHER_SKILL },
        { title: "General Skills", data: SKILL_DATA },
        { title: "Backend Skills", data: BACKEND_SKILL },

      ].map((section, idx) => (
        <div key={idx} className="w-full mt-6">
          <h3 className="text-2xl font-semibold text-cyan-300 text-center mb-4">
            {section.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {section.data.map((skill, i) => (
              <div
                key={skill.skill_name}
                className="skill-card-wrapper transition-transform hover:scale-105"
              >
                <div className="skill-card w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white/10 border border-cyan-500/30 backdrop-blur-md shadow-lg rounded-xl">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    index={i}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Background Video (unchanged) */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
