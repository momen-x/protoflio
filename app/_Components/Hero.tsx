"use client";
import { motion } from "framer-motion";
import ComputerCanvas from "./ComputerCanvas";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Content - Positioned at top */}
      <div className="relative z-10 px-4 pt-20 max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Line and dot with colors */}
          <div className="w-5 h-5 rounded-full bg-linear-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-500/30" />
          <div className="w-1 sm:h-80 h-40 rounded-full bg-linear-to-b from-blue-400/80 to-purple-400/80" />
        </div>

        <div className="ml-4">
          {/* White text with gradient accent */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            {t("hero.who")}
            <span className="text-transparent bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text">
              {t("hero.name")}
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
            {t("hero.about")}
          </p>

          {/* CTA buttons with proper colors */}
          <div className="mt-8 flex gap-4">
            <Link href={"#work"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                {t("hero.myWork")}
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
            >
              {t("hero.cv")}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Canvas Container - Positioned below text */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3">
        <ComputerCanvas />
      </div>
      {/* Scroll Indicator - Fixed and centered for both LTR and RTL */}
      <div className="absolute bottom-1 left-0 right-0 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-14 rounded-3xl border-4 border-white/40 flex justify-center items-start p-2 backdrop-blur-sm bg-white/10">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-white"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
