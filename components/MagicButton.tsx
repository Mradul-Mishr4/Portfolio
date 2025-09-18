import React from "react";

/**
 * Professional CTA Button Component
 * Enhanced for better accessibility and modern design
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-xl p-[1px] 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      onClick={handleClick}
      aria-label={title}
    >
      {/* Professional gradient border */}
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                     bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#3b82f6_100%)]"
      />

      {/* Enhanced button content */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
             bg-slate-950 dark:bg-slate-900 px-7 text-sm font-semibold text-white 
             backdrop-blur-3xl gap-2 transition-all duration-300 hover:bg-slate-900 
             dark:hover:bg-slate-800 ${otherClasses}`}
      >
        {position === "left" && (
          <span className="text-blue-400 transition-transform group-hover:translate-x-1">
            {icon}
          </span>
        )}
        <span className="tracking-wide">{title}</span>
        {position === "right" && (
          <span className="text-blue-400 transition-transform group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
