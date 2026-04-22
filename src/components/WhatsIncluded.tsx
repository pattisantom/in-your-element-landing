"use client";

import { motion } from "framer-motion";
import {
  Play,
  FileText,
  Zap,
  Layout,
  Infinity,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Video lessons",
    description:
      "High-quality, bite-sized video lessons you can watch at your own pace, on any device, any time.",
  },
  {
    icon: FileText,
    title: "Worksheets & workbooks",
    description:
      "Printable and fillable worksheets that turn insights into actionable plans you'll actually use.",
  },
  {
    icon: Zap,
    title: "Leadership challenges",
    description:
      "Real-world micro-challenges after each module to apply what you've learned immediately.",
  },
  {
    icon: Layout,
    title: "Leadership framework",
    description:
      "A proprietary, end-to-end leadership model that integrates everything across the 5 modules.",
  },
  {
    icon: Infinity,
    title: "Lifetime access",
    description:
      "Revisit modules whenever you need a refresh. All future updates are included at no extra cost.",
  },
  {
    icon: Users,
    title: "1:1 coaching add-on",
    description:
      "Upgrade to The Bundle for three personalised 1:1 sessions with Mariana to accelerate your growth.",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Everything you get
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            What&apos;s included
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            A complete, self-contained learning experience with everything you
            need to grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-7 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:border-brand/30 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                <f.icon
                  className="text-brand group-hover:text-white transition-colors"
                  size={22}
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
              {f.title === "1:1 coaching add-on" && (
                <span className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Bundle only
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
