"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

const BOOKING_URL =
  "https://outlook.office.com/bookwithme/user/de934c8f5aaa4b01a1ec7ce2e5939bfb%40elevative.com.au/meetingtype/60d6fd23-73db-4238-ad79-630b664c55d7?anonymous";

const trainingIncludes = [
  "5 in-depth video modules",
  "Worksheets & workbooks",
  "Leadership challenge activities",
  "Proprietary leadership framework",
  "Lifetime access + all updates",
];

const bundleIncludes = [
  "Everything in The Training",
  "3 x 1:1 coaching sessions with Mariana",
  "Personalised leadership roadmap",
  "Direct email access between sessions",
  "Priority support & accountability",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand font-semibold text-sm uppercase tracking-widest mb-3">
            Invest in yourself
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Choose the level of support that suits where you are right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* The Training */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Self-paced
              </p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">
                The Training
              </h3>
              <p className="text-gray-500 text-sm">
                Everything you need to lead with confidence.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-5xl font-black text-gray-900">
                $1,100
                <span className="text-lg font-medium text-gray-400 ml-1">
                  AUD
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">One-time payment</p>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {trainingIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-4 px-6 rounded-full border-2 border-brand text-brand font-bold hover:bg-brand hover:text-white transition-all text-base"
            >
              Book a free 30-min call
            </a>
          </motion.div>

          {/* The Bundle — featured */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-white rounded-3xl border-2 border-brand p-8 flex flex-col shadow-lg shadow-brand/10"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 bg-brand text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                <Star size={12} fill="white" />
                Most popular
              </div>
            </div>

            <div className="mb-6 mt-2">
              <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-2">
                Coaching included
              </p>
              <h3 className="text-2xl font-black text-gray-900 mb-1">
                The Bundle
              </h3>
              <p className="text-gray-500 text-sm">
                Training + personalised 1:1 coaching with Mariana.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-5xl font-black text-gray-900">
                $1,650
                <span className="text-lg font-medium text-gray-400 ml-1">
                  AUD
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">One-time payment</p>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {bundleIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-4 px-6 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition-all text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a free 30-min call
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Not sure which option is right for you? Questions?{" "}
          <a
            href="mailto:hello@elevative.com.au"
            className="text-brand hover:underline"
          >
            Contact us
          </a>
        </motion.p>
      </div>
    </section>
  );
}
