"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number; // ms per character reveal
  delay?: number;    // ms before starting
}

/**
 * TextScramble — reveals text character by character with a hacker-style
 * random-character scramble effect.
 *
 * Usage:
 *   <TextScramble text="Modernizing Public Service" className="..." />
 */
export function TextScramble({
  text,
  className = "",
  duration = 40,
  delay = 200,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(
    text.split("").map(() => " ")
  );
  const frameRef = useRef<NodeJS.Timeout | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const timer = setTimeout(() => {
      let currentIndex = 0;
      let scrambleCount = 0;
      const MAX_SCRAMBLE = 6;

      function tick() {
        setDisplay((prev) => {
          const next = [...prev];

          // Scramble unrevealed chars
          for (let i = currentIndex; i < text.length; i++) {
            if (text[i] === " ") {
              next[i] = " ";
            } else {
              next[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }

          return next;
        });

        scrambleCount++;

        if (scrambleCount >= MAX_SCRAMBLE) {
          // Lock in current char
          if (currentIndex < text.length) {
            setDisplay((prev) => {
              const next = [...prev];
              next[currentIndex] = text[currentIndex];
              return next;
            });
            currentIndex++;
            scrambleCount = 0;
          }
        }

        if (currentIndex < text.length) {
          frameRef.current = setTimeout(tick, duration / MAX_SCRAMBLE);
        }
      }

      tick();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [text, duration, delay]);

  return (
    <span className={className} aria-label={text}>
      {display.map((char, i) => (
        <span
          key={i}
          className={char !== text[i] && char !== " " ? "text-[#2563EB]/60" : ""}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
