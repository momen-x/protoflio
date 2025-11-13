"use client";
import React from "react";
import { motion } from "framer-motion";
import services from "@/app/data/Services";
import Tilt from "react-parallax-tilt";
import { IconType } from "react-icons";
import ReusableTitle from "../ReusableTitle";
import { useLanguage } from "@/app/context/LanguageContext";

const ServiceCard = ({
  index,
  title,
  icon: Icon,
}: {
  index: number;
  title: string;
  icon: IconType;
}) => {
  const { t } = useLanguage();
  return (
    <motion.div
      className="group bg-linear-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Icon Container */}
      <div className="mb-4 p-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
        <Icon className="text-white text-2xl" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-white mb-2">{t(title)}</h3>
    </motion.div>
  );
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-4 md:py-24 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <ReusableTitle
          description={t("about.overview")}
          title={t("about.intro")}
        />

        {/* Description Section - Enhanced Design */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative group">
            {/* Animated gradient border effect */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Main content card */}
            <div className="relative bg-linear-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-gray-700/50 shadow-2xl">
              {/* Decorative quote icon */}
              <div className="absolute top-6 left-6 text-blue-500/20 text-6xl font-serif leading-none select-none mb-6">
                {"\""}
              </div>

              {/* Story text */}
              <motion.p
                className="text-base md:text-lg text-gray-200 leading-relaxed md:leading-loose relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t("about.story")}
              </motion.p>

              {/* Decorative elements */}
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>

              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-24 mx-auto bg-linear-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div>
          <div className="text-center mb-12">
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("about.whatdo")}
            </motion.h3>
            <motion.p className="text-gray-200 max-w-2xl mx-auto">
              {t("about.services")}
            </motion.p>
          </div>

          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            scale={1.02}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  index={index}
                  {...service}
                  title={service.title}
                  icon={service.Icon}
                />
              ))}
            </motion.div>
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
