"use client";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-12"
>
  <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
    Experience
  </h2>

  <div className="mt-3">
    {/* ShiftPoint */}
    <div className="space-y-3">
      <p className="text-sm text-gray-600 dark:text-gray-400">Aug 2024 - Present</p>
      <p className="font-medium">Full-Stack Web Developer</p>
      <p className="text-sm text-blue-600 dark:text-blue-400">ShiftPoint</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Improved Shopify store conversion rates by 25% through custom templates, optimized checkout flows, 
        and performance tuning. Enhanced backend efficiency by refactoring APIs and database queries, while 
        integrating third-party services for seamless payments and inventory management. 
        Built internal <span className="text-black dark:text-white">React/MERN applications</span> such as dashboards 
        and management tools to streamline operations. Collaborated in Agile sprints to launch 
        high-impact e-commerce features on time.
      </p>
    </div>

    {/* 3StoryConsulting */}
    <div className="space-y-3 mt-6">
      <p className="text-sm text-gray-600 dark:text-gray-400">Apr 2023 - Apr 2024</p>
      <p className="font-medium">Full-Stack Web Developer</p>
      <p className="text-sm text-blue-600 dark:text-blue-400">3StoryConsulting</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Delivered 10+ custom WordPress sites for e-commerce and service businesses, optimizing performance 
        and boosting SEO rankings by 35%. Automated workflows by integrating payment gateways, shipping tools, 
        and CRMs. Migrated outdated builds to secure, lightweight solutions. In addition, developed internal 
        <span className="text-black dark:text-white"> MERN-based projects</span> like inventory and reporting systems 
        to support business operations. Trained clients to manage content confidently post-launch.
      </p>
    </div>
  </div>
</motion.section>


  );
}

export default Experience;
