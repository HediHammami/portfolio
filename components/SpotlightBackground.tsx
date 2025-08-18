"use client";
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

export default function SpotlightBackground() {
  // Start at 0,0 to avoid SSR mismatch
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x = useSpring(mx, { stiffness: 150, damping: 30 });
  const y = useSpring(my, { stiffness: 150, damping: 30 });

  const bg = useMotionTemplate`radial-gradient(600px at ${x}px ${y}px, rgba(99,102,241,0.18), transparent 80%)`;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div className="absolute inset-0" style={{ background: bg }} />
    </div>
  );
}
