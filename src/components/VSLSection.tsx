"use client";

import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

export default function VSLSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Watch: The framework behind assertive communication
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Mariana shares the core frameworks that help leaders communicate
            with clarity and confidence, a preview of what&apos;s inside the program.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <VideoPlayer
            src="/videos/vsl.mp4"
            autoplayMuted={true}
            loop={true}
            className="w-full aspect-video shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
