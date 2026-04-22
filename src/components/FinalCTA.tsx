"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand to-brand-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <Sparkles size={14} />
            Your next chapter starts here
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Join In Your Element today
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop waiting for permission to lead. Everything you need to step
            fully into your potential is already inside you. This program just
            shows you how to access it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://outlook.office.com/bookwithme/user/de934c8f5aaa4b01a1ec7ce2e5939bfb%40elevative.com.au/meetingtype/60d6fd23-73db-4238-ad79-630b664c55d7?anonymous"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-brand font-black rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-1 text-lg"
            >
              Book a free 30-min call
              <ArrowRight size={20} />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all text-base"
            >
              Explore the curriculum
            </a>
          </div>

          <p className="mt-8 text-white/50 text-sm">
            Lifetime access · Self-paced · 100% online
          </p>
        </motion.div>
      </div>
    </section>
  );
}
