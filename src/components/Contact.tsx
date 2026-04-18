'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      href: 'mailto:jr.icm.sc@gmail.com',
      icon: Mail,
      label: 'Email',
      value: 'jr.icm.sc@gmail.com',
      color: 'text-accent-primary',
      bg: 'bg-accent-primary/10',
    },
    {
      href: 'https://linkedin.com/in/enerijr',
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/enerijr',
      color: 'text-[#0077b5]',
      bg: 'bg-[#0077b5]/10',
      external: true,
    },
    {
      href: 'https://github.com/jrcosta',
      icon: Github,
      label: 'GitHub',
      value: '@jrcosta',
      color: 'text-white',
      bg: 'bg-white/10',
      external: true,
    },
    {
      href: undefined,
      icon: Phone,
      label: 'Phone',
      value: '+55 (48) 98427-3267',
      color: 'text-accent-secondary',
      bg: 'bg-accent-secondary/10',
    },
  ];

  return (
    <section id="contact" className="section bg-bg-secondary relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            {t.contact.title} <span className="text-accent-primary">{t.contact.highlight}</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            {t.contact.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contacts.map((item) => {
              const Icon = item.icon;
              const Tag = item.href ? 'a' : 'div';
              return (
                <Tag
                  key={item.label}
                  {...(item.href ? {
                    href: item.href,
                    ...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})
                  } : {})}
                  className={`glass-card p-8 hover:bg-white/5 transition-all group flex flex-col items-center gap-4 ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className={`p-4 rounded-full ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold">{item.label}</h3>
                  <span className="text-gray-400">{item.value}</span>
                </Tag>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
