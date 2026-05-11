"use client"

import { motion } from "framer-motion"

export function IntroSection() {
  return (
    <section className="py-16 scroll-mt-24" id="intro">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Intro
        </span>
        <div className="max-w-3xl space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            {"I'm Hritvik, a Product Manager with 8+ years of experience leading products from zero-to-one across EdTech, PropTech, and Biotech. I care about turning user research into roadmaps that ship, and shipping into measurable outcomes — things like 28× lead growth, 50% faster product lifecycles, and 19% conversion lifts."}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            {"I'm currently in Seattle finishing my MS in Information Management at the University of Washington, specializing in AI and Product/Program Management, and I'm looking for senior PM roles where I can build AI-enabled products that actually move the needle for customers."}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
