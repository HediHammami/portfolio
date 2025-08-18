"use client";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
        Education
      </h2>

      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Oct 2019 - Jun 2022
            </p>
            <p className="font-medium">Master&apos;s in Computer Science</p>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Université Privée des Études Scientifiques et Technologiques
              (UPES)
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Education;
