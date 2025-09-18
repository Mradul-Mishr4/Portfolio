import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/**
       *  UI: Spotlights - Updated for professional look
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(59, 130, 246, 0.15)"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="rgba(99, 102, 241, 0.1)"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="rgba(147, 51, 234, 0.08)"
        />
      </div>

      {/**
       *  UI: Professional grid background
       */}
      <div
        className="h-screen w-full dark:bg-slate-950 bg-slate-50 dark:bg-grid-white/[0.02] bg-grid-slate-900/[0.04]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Professional gradient overlay */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center 
         dark:bg-slate-950 bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-6">
            <p className="uppercase tracking-wider text-sm font-medium text-blue-600 dark:text-blue-400 max-w-md mx-auto">
              Final Year B.Tech Student • Aspiring Full-Stack Developer
            </p>

            {/**
             * Professional headline with better typography
             */}
            <TextGenerateEffect
              words="Building Tomorrow's Web Solutions Today"
              className="heading text-center text-slate-900 dark:text-slate-100"
            />

            <p className="subheading text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
              I'm Mradul Mishra, a final year B.Tech student and passionate web
              developer from India. Specializing in modern web technologies like
              React, Next.js, and full-stack development. Ready to bring fresh
              ideas and technical skills to your projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#projects">
              <MagicButton
                title="View My Projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 
                       text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 
                       transition-all duration-300 font-medium"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
