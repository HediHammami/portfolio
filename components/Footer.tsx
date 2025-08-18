"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-16 border-t border-gray-200 dark:border-zinc-800 py-6 text-center"
    >
      <div className="flex flex-col items-center gap-3">
        <Button
          asChild
          className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white
        transition-transform hover:scale-105"
        >
          <a href="mailto:hedihammami95@gmail.com">Contact Me</a>
        </Button>

        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Med Hedi Hammami. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
