"use client";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", duration = 2.5 }: AnimatedCounterProps) {
  return (
    <CountUp
      end={value}
      suffix={suffix}
      duration={duration}
      enableScrollSpy
      scrollSpyDelay={200}
    />
  );
}
