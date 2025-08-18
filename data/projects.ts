// data/projects.ts
export type Project = {
  id: string;
  title: string;
  image: string;
  stack: string[]; // ["Next.js 15", "Sanity", "Stripe", "Clerk", "TS"]
  summary: string; // short 1–2 sentences (shows on card)
  details: string; // longer text (shows in dialog)
  links?: { live?: string; repo?: string };
};

export const projects: Project[] = [
  {
    id: "learnly-lms",
    title: "Learnly — Modern LMS Platform",
    image: "/p2.png",
    stack: ["Next.js 15", "Sanity", "Stripe", "Clerk", "TypeScript"],
    summary:
      "Full-stack LMS with course management, role-based auth, and secure payments. Built for scale with Server Actions, caching, and structured CMS content.",
    details:
      "Admin dashboard, RBAC (Student/Instructor/Admin), subscriptions & one-time payments, Sanity content models for courses/lessons, ISR & caching optimizations.",
    links: {
      live: "https://lms-omega-two.vercel.app/",
      repo: "https://github.com/HediHammami/Course-Platform-LMS",
    },
  },
  {
    id: "headset-store",
    title: "Headset Store — Modern eCommerce",
    image: "/p1.png",
    stack: ["Next.js", "Sanity", "TypeScript", "Stripe"],
    summary:
      "Responsive eCommerce store for headsets with dynamic product listings, secure Stripe checkout, and CMS-driven management.",
    details:
      "Developed a full-featured online store using Next.js for SSR and optimal performance. Integrated Sanity CMS for seamless product management and TypeScript for maintainable code. Implemented secure payment flows with Stripe and designed a modern, responsive UI with smooth animations and efficient state management.",
    links: {
      live: "http://ecommerce-sanity-stripe-swart.vercel.app/",
      repo: "https://github.com/HediHammami/ecommerce_sanity_stripe",
    },
  },
  {
    id: "road-code-quiz",
    title: "Interactive Road Code Quiz",
    image: "/p4.png",
    stack: ["Next.js", "Sanity", "TypeScript"],
    summary:
      "Quiz platform for driving theory prep with randomized questions, instant feedback, and mobile-first design.",
    details:
      "Built an interactive quiz app to simulate real driving theory exams. Features include randomized practice tests, instant scoring with explanations, and progress tracking. Sanity CMS allows easy updates to questions and answers, while Next.js optimizations ensure fast navigation and SEO-friendly performance. Fully responsive for desktop and mobile users.",
    links: {
      live: "https://road-code-quiz-app.vercel.app/",
      repo: "https://github.com/HediHammami/Road-Code-Quiz-App",
    },
  },
  {
    id: "agency-site",
    title: "Marketing Agency One-Page Website",
    image: "/agency.png",
    stack: ["Next.js", "TailwindCSS", "Framer Motion"],
    summary:
      "One-page marketing agency site with responsive design, smooth animations, and a modern Next.js + Tailwind build.",
    details:
      "Designed and developed a sleek, single-page website for a marketing agency. Focused on responsive layouts, clean UI components, and engaging user interactions powered by Framer Motion animations. Built with Next.js for performance and SEO optimization.",
    links: { live: "https://www.omarketingpros.com/", repo: "#" },
  },
  {
    id: "fastfood-app",
    title: "Fast Food Ordering App",
    image: "/fast-food.png",
    stack: ["React Native", "Appwrite"],
    summary:
      "Mobile ordering app built with React Native and Appwrite, enabling users to browse menus, add items to cart, and place orders.",
    details:
      "Developed a fast food ordering app with React Native for cross-platform mobile support. Integrated Appwrite backend for user authentication, database, and order management. Implemented smooth navigation, responsive UI components, and real-time cart updates for an easy ordering experience.",
    links: { live: "#", repo: "https://github.com/HediHammami/fast-food-app" },
  },
];
