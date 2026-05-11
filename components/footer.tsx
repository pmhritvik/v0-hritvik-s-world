"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-border"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 Hritvik Gaur</p>
        <p>
          Built with{" "}
          <a 
            href="https://nextjs.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Next.js
          </a>
          {", "}
          <a 
            href="https://tailwindcss.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Tailwind CSS
          </a>
          {" & "}
          <a 
            href="https://www.framer.com/motion/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Framer Motion
          </a>
        </p>
      </div>
    </motion.footer>
  )
}
