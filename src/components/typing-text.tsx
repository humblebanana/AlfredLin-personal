"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // ms before starting
}

export default function TypingText({
  text,
  className,
  speed = 28,
  delay = 600,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span
          aria-hidden
          className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] animate-blink"
        />
      )}
    </span>
  );
}
