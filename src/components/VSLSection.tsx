"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEO_ID = "CI68YDCkJ10";

export default function VSLSection() {
  const [playing, setPlaying] = useState(false);

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
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&showinfo=0`}
              allow="autoplay; fullscreen"
              allowFullScreen
              frameBorder="0"
              style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
            />
          ) : (
            <div
              className="absolute inset-0 cursor-pointer group"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setPlaying(true)}
            >
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                  <Play className="text-brand ml-1" size={36} fill="#534AB7" />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
