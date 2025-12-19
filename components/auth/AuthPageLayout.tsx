"use client";

import { motion } from "framer-motion";

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* 🔹 Animated Curvy Background */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          fill="#22c55e"
          fillOpacity="0.15"
          d="M0,300 C200,200 400,400 600,300 800,200 1000,400 1200,300 1400,200 1440,300 1440,300 L1440,0 L0,0 Z"
          animate={{
            d: [
              "M0,300 C200,200 400,400 600,300 800,200 1000,400 1200,300 1400,200 1440,300 1440,300 L1440,0 L0,0 Z",
              "M0,320 C200,260 400,340 600,320 800,300 1000,360 1200,320 1400,280 1440,320 1440,320 L1440,0 L0,0 Z",
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* 🔹 Content */}
      <div className="relative z-10 w-full px-4">
        {children}
      </div>
    </div>
  );
};

export default AuthPageLayout;
