"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Summary() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-1"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
          Med Hedi Hammami
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
        <p className="">Tunis ,Tunisia</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-3"
      >
        <h2 className="text-lg font-semibold">
          Crafting Full-Stack Experiences for the Modern Web
        </h2>
        <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
          Full stack web developer working with{" "}
          <span className="text-black dark:text-white">
            React, Next.js, Node.js, and Express
          </span>
          . Skilled in building dynamic applications and scalable APIs that
          bring ideas to life. Experienced with{" "}
          <span className="text-black dark:text-white">
            MongoDB, SQL databases, and REST/GraphQL
          </span>
          , ensuring efficient data handling across projects.
        </p>
        <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
          Beyond coding from scratch, I also work with{" "}
          <span className="text-black dark:text-white">
            WordPress, Shopify, and other CMS platforms
          </span>
          , helping businesses create flexible websites with custom
          functionality. Passionate about delivering clean, maintainable code
          and seamless user experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3 mt-3"
      >
        <Button
          asChild
          className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white
        transition-transform hover:scale-105"
        >
          {/* open in new tab */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>

        <Link
          href="https://github.com/HediHammami"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mohamed-hedi-hammami-305469360/"
          className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
        </Link>
      </motion.div>
    </section>
  );
}
