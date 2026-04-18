'use client';

import { motion } from 'framer-motion';
import { Database, Server, ShieldCheck, Cloud } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  delay: number;
}

const SkillCard = ({ title, icon: Icon, skills, delay }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass-card p-6 hover:border-accent-primary/50 transition-colors group h-full"
  >
    <div className="mb-4 text-accent-primary p-3 bg-accent-primary/10 rounded-lg w-fit group-hover:bg-accent-primary/20 transition-colors">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-2 text-gray-400 font-mono text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.quality,
      icon: ShieldCheck,
      skills: ['RestAssured', 'Robot Framework', 'JUnit 5 / Mockito', 'SOAP-UI', 'Performance Testing'],
    },
    {
      title: t.skills.categories.backend,
      icon: Server,
      skills: ['Java 21', 'Spring Boot 3', 'Microservices', 'REST APIs', 'JPA / Hibernate'],
    },
    {
      title: t.skills.categories.devops,
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'GitHub/GitLab Actions', 'Ansible', 'CI/CD Pipelines'],
    },
    {
      title: t.skills.categories.data,
      icon: Database,
      skills: ['PostgreSQL', 'Oracle / SQL Server', 'RabbitMQ', 'Git / GitFlow', 'AI Tools (Copilot)'],
    },
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t.skills.title} <span className="text-accent-primary">{t.skills.highlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => (
            <SkillCard key={cat.title} {...cat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
