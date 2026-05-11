"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Globe, Linkedin, ArrowUpRight } from "lucide-react"

const contacts = [
  {
    label: "Email",
    value: "pmhritvik@gmail.com",
    href: "mailto:pmhritvik@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "206-798-0422",
    href: "tel:206-798-0422",
    icon: Phone,
  },
  {
    label: "Website",
    value: "hritvikgaur.com",
    href: "https://hritvikgaur.com",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pmhritvik",
    href: "https://linkedin.com/in/pmhritvik",
    icon: Linkedin,
  },
]

export function ContactSection() {
  return (
    <section className="py-16 scroll-mt-24" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Contact
        </span>
        
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                    <contact.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{contact.label}</p>
                    <p className="text-sm text-foreground">{contact.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
