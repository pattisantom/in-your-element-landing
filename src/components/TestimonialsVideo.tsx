"use client";

import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

export default function TestimonialsVideo() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Real results
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Leaders who&apos;ve been transformed
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden p-2 max-w-[400px] mx-auto"
        >
          <VideoPlayer
            src="/videos/testimonials.mp4"
            autoplayMuted={false}
            className="w-full aspect-[9/16] rounded-2xl"
          />
          <p className="text-center text-sm text-gray-500 py-4 px-4">
            Hear from leaders who&apos;ve been through the program
          </p>
        </motion.div>
      </div>
    </section>
  );
}
