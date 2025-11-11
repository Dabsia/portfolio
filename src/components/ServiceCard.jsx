import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <h3 className="text-3xl font-light mb-8 pb-6 border-b border-gray-200">
        {service.title}
      </h3>

      <ul className="space-y-4">
        {service.items.map((item, idx) => (
          <li key={idx} className="text-gray-600 font-light flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mt-2 mr-3 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
