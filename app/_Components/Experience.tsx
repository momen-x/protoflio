"use client";
/* eslint-disable @next/next/no-img-element */

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { containerVariants } from "./About/About";
import ReusableTitle from "./ReusableTitle";
import myExperience from "@/app/data/Experience";
import { useLanguage } from "../context/LanguageContext";

const ExperienceCart = ({
  experience,
}: {
  experience: (typeof myExperience)[0];
}) => {
  const { t } = useLanguage();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "1rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        color: "white",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.1)",
      }}
      date={t(experience.date)} // Translate the date
      dateClassName="text-white font-semibold text-sm md:text-base"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.1)",
      }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.path}
            alt={t(experience.title)}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
          {t(experience.title)}
        </h3>

        <ul className="mt-4 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`${experience.title}-point-${index}`}
              className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start"
            >
              <span className="text-blue-400 mr-2">•</span>
              {t(point)} {/* Translate each point */}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useLanguage(); // Add this hook

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
          title={t("experience.title")} // Translate title
          description={t("experience.workExperience")} // Translate description
        />

        {/* Timeline Section */}
        <motion.div className="mt-8 md:mt-20">
          <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
            {myExperience.map((experience, index) => (
              <ExperienceCart
                key={`experience-${index}-${experience.title}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
