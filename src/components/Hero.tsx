"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Lead with confidence, even in high-pressure situations",
  "Communicate with clarity and assertiveness",
  "Build influence without losing your authentic voice",
  "Make decisive, values-driven decisions",
  "Inspire your team and navigate change with ease",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-to-br from-white via-brand-50 to-brand-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-bl from-brand to-transparent rounded-bl-full" />
      </div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — headline + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Leadership Coaching Program
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.08] tracking-tight mb-6">
              Lead with{" "}
              <span className="text-brand">clarity, confidence</span> &{" "}
              <span className="text-brand">influence</span>, in your voice, at
              your pace
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              A self-paced leadership program designed for professionals ready
              to step fully into their potential. No corporate jargon, no
              performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://outlook.office.com/bookwithme/user/de934c8f5aaa4b01a1ec7ce2e5939bfb%40elevative.com.au/meetingtype/60d6fd23-73db-4238-ad79-630b664c55d7?anonymous"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Book a free 30-min call
                <ArrowRight size={18} />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand text-brand font-bold rounded-full hover:bg-brand/5 transition-all text-base"
              >
                See what&apos;s inside
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Lifetime access · Self-paced · No prerequisites
            </p>
          </motion.div>

          {/* Right — benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-brand-100"
          >
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
              What you&apos;ll achieve
            </p>
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="text-brand mt-0.5 shrink-0"
                    size={22}
                  />
                  <span className="text-gray-700 font-medium leading-snug">
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-light to-brand border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">200+</span>{" "}
                leaders have transformed their careers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
