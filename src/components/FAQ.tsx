"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long do I have access to the program?",
    answer:
      "You have lifetime access to In Your Element from the moment you enroll. That means you can work through the content at your own pace, revisit modules whenever you need a refresh, and automatically receive all future updates and additional content at no extra cost.",
  },
  {
    question: "Is this program suitable for a first-time leader?",
    answer:
      "Absolutely. In Your Element was specifically designed with new and emerging leaders in mind. Whether you've just been promoted, taken on a new team, or are preparing for a leadership role, the program gives you the foundational tools, mindsets, and frameworks to lead with confidence from day one. No prior leadership training required.",
  },
  {
    question: "What's the difference between The Training and The Bundle?",
    answer:
      "The Training gives you full access to the complete self-paced program: all 5 modules, video lessons, worksheets, leadership challenges, and the proprietary leadership framework. The Bundle includes everything in The Training plus three personalised 1:1 coaching sessions with Mariana, a tailored leadership roadmap, and direct email access between sessions. It's the right choice for those who want a more supported and accelerated experience.",
  },
  {
    question: "Can I do this alongside a full-time job?",
    answer:
      "Yes, that's exactly how it was designed. The modules are structured in short, focused lessons you can complete in 20-30 minutes. Most participants work through the program over 6-8 weeks, fitting it around their existing schedule. There are no live sessions, no deadlines, and no pressure. You move at the pace that works for you.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-colors ${
        isOpen ? "border-brand bg-brand/5" : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-6 text-left"
      >
        <span className="flex-1 text-base font-semibold text-gray-900">
          {faq.question}
        </span>
        <ChevronDown
          className={`text-brand shrink-0 mt-0.5 transition-transform duration-300 ${
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
            <div className="px-6 pb-6 border-t border-brand/20">
              <p className="text-gray-600 mt-4 leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Got questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Frequently asked
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
