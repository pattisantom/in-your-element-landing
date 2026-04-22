"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Briefcase, Infinity } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "5", label: "In-depth modules" },
  { icon: Clock, value: "100%", label: "Self-paced learning" },
  { icon: Briefcase, value: "3+ sectors", label: "Real-world experience" },
  { icon: Infinity, value: "Lifetime", label: "Access & updates" },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-brand border-y border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4 md:border-r md:last:border-r-0 border-white/20"
            >
              <s.icon className="text-white/80 mb-2" size={28} />
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-white/70 text-sm font-medium mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
