import React from "react";
import { motion } from "framer-motion";

export default function SkillBadge({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-semibold text-gray-900">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {skill.level}%
        </span>
      </div>

      {/* Progress bar container */}
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden relative">
        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-lg`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </motion.div>
  );
}
