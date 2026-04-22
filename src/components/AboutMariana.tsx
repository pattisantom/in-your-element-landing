"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const credentials = [
  "10+ years in leadership development",
  "Certified Executive Coach",
  "Corporate, government & NFP sectors",
  "Founder of Elevative",
  "Speaker & facilitator",
];

function MarianaPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-brand-50 flex items-center justify-center">
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-brand-50">
          <div className="w-32 h-32 rounded-full bg-brand flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl font-black tracking-tight">MM</span>
          </div>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/mariana.jpg"
          alt="Mariana Marcano"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-top"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-brand/20 to-transparent pointer-events-none" />
    </div>
  );
}

export default function AboutMariana() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <MarianaPhoto />
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border border-gray-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Mariana Marcano
              </p>
              <p className="text-xs text-brand font-medium">
                Founder, Elevative
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Leadership Coach &amp; Facilitator
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pt-8 lg:pt-0"
          >
            <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-4">
              Your guide
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Hi, I&apos;m Mariana
            </h2>
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                I spent over a decade working inside organisations, watching
                brilliant people shrink in meeting rooms, over-explain
                themselves in emails, and second-guess decisions they already
                knew the answer to. Not because they weren&apos;t capable. Because
                nobody had shown them how to lead from who they actually are.
              </p>
              <p>
                That&apos;s why I built Elevative, and why I created In Your Element.
                This isn&apos;t a generic leadership course. Every module, every
                framework, every challenge comes from real work with real people
                across corporate, government and not-for-profit sectors.
              </p>
              <p>
                My approach is direct, practical, and deeply human. I&apos;ll push
                you forward, but only toward who you already are at your best.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Credentials
              </p>
              <div className="flex flex-wrap gap-2">
                {credentials.map((c, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 text-brand text-sm font-medium border border-brand/20"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
