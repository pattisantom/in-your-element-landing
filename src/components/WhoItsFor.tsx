"use client";

import { motion } from "framer-motion";
import { TrendingUp, Sparkles, RefreshCw, Compass } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Mid-level managers",
    description:
      "You're leading people but nobody taught you how. You want a clear framework to lead with intention and credibility.",
  },
  {
    icon: Sparkles,
    title: "New leaders",
    description:
      "You've just stepped into a leadership role and want to build confidence, authority, and a genuine presence from day one.",
  },
  {
    icon: RefreshCw,
    title: "Navigating change",
    description:
      "Restructures, new teams, new industries. You're adapting and need tools to lead yourself and others through uncertainty.",
  },
  {
    icon: Compass,
    title: "Seeking purpose",
    description:
      "You're accomplished but something feels off. You want to lead in a way that's truly aligned with who you are.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Is this you?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Who this is for
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            This program was built for professionals at a turning point,
            ready to lead differently.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl p-7 hover:border-brand hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                <c.icon
                  className="text-brand group-hover:text-white transition-colors"
                  size={24}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {c.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
