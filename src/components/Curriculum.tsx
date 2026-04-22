"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock } from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Leadership Presence & Confidence",
    duration: "8 lessons",
    description:
      "Discover what genuine leadership presence looks and feels like. Learn how to show up with authority and authenticity in any room, naturally. We'll unpack the mindset shifts, body language, and vocal habits that project confidence from the inside out.",
    topics: [
      "Defining your personal leadership identity",
      "The psychology of authority and presence",
      "Body language and vocal tonality",
      "Overcoming imposter syndrome",
      "Building unshakeable self-belief",
    ],
  },
  {
    number: "02",
    title: "Emotional Intelligence in Leadership",
    duration: "7 lessons",
    description:
      "High-performing leaders understand themselves and the people around them. This module teaches you to read the room, regulate your reactions, and respond (not react) under pressure.",
    topics: [
      "Self-awareness as a leadership superpower",
      "Managing triggers and emotional reactivity",
      "Empathy without losing authority",
      "Building psychological safety in teams",
      "Reading and influencing team dynamics",
    ],
  },
  {
    number: "03",
    title: "Assertive Communication",
    duration: "9 lessons",
    description:
      "Speak so people listen. This module breaks down how to communicate directly, handle difficult conversations, and set boundaries while maintaining respect and trust.",
    topics: [
      "The assertiveness spectrum: passive to aggressive",
      "Structuring difficult conversations",
      "Saying no with confidence and grace",
      "Giving and receiving feedback",
      "Executive-level written communication",
    ],
  },
  {
    number: "04",
    title: "Strategic Decision-Making",
    duration: "6 lessons",
    description:
      "Stop second-guessing and start leading decisively. You'll learn frameworks to make faster, smarter decisions, even in ambiguous, high-stakes situations.",
    topics: [
      "Values-based decision-making frameworks",
      "Managing risk and uncertainty",
      "Inclusive decision-making with teams",
      "When to decide vs. when to consult",
      "Recovering from poor decisions",
    ],
  },
  {
    number: "05",
    title: "Public Speaking & Executive Presence",
    duration: "8 lessons",
    description:
      "Whether it's a board meeting, team all-hands, or conference keynote, this module prepares you to speak with power, clarity, and impact. No scripts. No performing. Just you.",
    topics: [
      "Structuring talks for maximum impact",
      "Handling nerves and managing adrenaline",
      "Storytelling for leaders",
      "Q&A mastery and thinking on your feet",
      "Virtual presence and video communication",
    ],
  },
];

function AccordionItem({
  mod,
  isOpen,
  onToggle,
}: {
  mod: (typeof modules)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all ${
        isOpen ? "border-brand shadow-md" : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left"
      >
        <span className="text-3xl font-black text-brand/20 w-10 shrink-0">
          {mod.number}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-base font-bold text-gray-900 leading-tight">
            {mod.title}
          </p>
          <p className="text-sm text-gray-400 mt-0.5">{mod.duration}</p>
        </div>
        <ChevronDown
          className={`text-brand shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 border-t border-gray-100">
              <p className="text-gray-600 mt-5 mb-4 leading-relaxed">
                {mod.description}
              </p>
              <ul className="space-y-2">
                {mod.topics.map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            The program
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            5 modules. One complete transformation.
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Each module builds on the last, giving you a complete and
            integrated leadership toolkit.
          </p>
        </motion.div>

        <div className="space-y-3">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <AccordionItem
                mod={mod}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <Lock size={14} />
            Enroll to unlock all module content
          </div>
        </div>
      </div>
    </section>
  );
}
