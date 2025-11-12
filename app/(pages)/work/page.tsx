/* eslint-disable @next/next/no-img-element */
"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import github from "@/public/assets/github.png";
import { projects } from "@/app/data/projects";
import "./work.css";
import ReusableTitle from "../../_Components/ReusableTitle";
import { useLanguage } from "@/app/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const ProjectCard = ({
  name,
  description,
  tags = [],
  image,
  source_code_link,
  project_link,
}: {
  index: number;
  name: string;
  description: string;
  tags?: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  project_link: string;
}) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={450}
        className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-2xl w-full border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
      >
        <div className="relative w-full h-48 rounded-xl overflow-hidden group">
          <img
            src={image}
            alt={`${t(name)} project image`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button
              onClick={() => window.open(project_link, "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
            >
              {t("work.livedemo")}
            </button>
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Image
                src={github}
                alt="source code"
                width={20}
                height={20}
                className="object-contain cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{t(name)}</h3>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            {t(description)}
          </p>
        </div>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  tag.color === "blue-text-gradient"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : tag.color === "green-text-gradient"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : tag.color === "pink-text-gradient"
                    ? "bg-pink-500/20 text-pink-300 border border-pink-500/30"
                    : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const WorkPage = () => {
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
        <ReusableTitle title={t("work.title")} description={t("work.description")} />

        {/* Description */}
        <motion.div className="w-full flex justify-center">
          <motion.p className="text-gray-300 text-lg text-center max-w-3xl leading-relaxed bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30">
            {t("work.content")}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="mt-16 flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkPage;
