import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Badge from "../utils/Badge";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end p-6"
        >
          <div className="flex gap-3">
            <Button
              size="sm"
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 px-3 py-1">
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Decorative gradient border on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />
    </motion.div>
  );
}
