import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/CreatePageUrl";

export default function ProjectShowcase({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  // Map project titles to IDs for navigation
  const projectIds = {
    "Crwn Clothn": "crwn-clothn",
    Zinter: "zinter",
    "Auto Spa Club": "auto-spa-club",
    Soultunes: "soultunes",
  };

  const projectId = projectIds[project.title];

  return (
    <Link to={`${createPageUrl("")}${projectId}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-pointer"
      >
        {/* Image Container */}
        <div
          className={`relative h-[150px] md:h-[350px] rounded-2xl overflow-hidden mb-6 ${project.color}`}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
            >
              <ArrowUpRight className="w-6 h-6 text-black" />
            </motion.div>
          </motion.div>
        </div>

        {/* Project Info */}
        <div>
          <p className="text-sm text-gray-500 mb-2">{project.client}</p>
          <h3 className="text-2xl font-light mb-1 group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.category}</p>
        </div>
      </motion.div>
    </Link>
  );
}
