"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    console.log(wordsArray);
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                // Highlight key words with professional gradient
                [
                  "Tomorrow's",
                  "Web",
                  "Solutions",
                  "Today",
                  "Digital",
                  "Business",
                  "Growth",
                ].includes(word)
                  ? "text-gradient font-semibold"
                  : "dark:text-slate-100 text-slate-900"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold leading-tight", className)}>
      {/* Professional typography improvements */}
      <div className="my-4">
        {/* Enhanced readability and professional styling */}
        <div className="leading-snug tracking-tight">{renderWords()}</div>
      </div>
    </div>
  );
};
