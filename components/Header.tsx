"use client";
import Image from "next/image";
import { ModeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <div className="mx-auto max-w-xl px-4 py-4 flex items-center justify-between">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src="/pp.png"
            alt="Profile picture"
            width={250}
            height={250}
            className="cursor-pointer transition-all duration-300 hover:scale-110"
            priority
          />
        </div>
        <ModeToggle />
      </div>
    </motion.header>
  );
}
