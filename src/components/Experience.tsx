'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  delay: number;
}

const TimelineItem = ({ role, company, period, description, stack, delay }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l-2 border-white/10 last:pb-0"
  >
    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-bg-primary border-2 border-accent-primary rounded-full" />

    <div className="glass-card p-6 ml-4 hover:border-accent-primary/50 transition-colors">
      <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <h4 className="text-accent-primary font-mono text-sm">{company}</h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full">
          <Calendar size={12} />
          {period}
        </div>
      </div>

      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded border border-accent-secondary/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t.experience.roles[0].role,
      company: 'Softplan',
      period: 'Sept 2025 - Mar 2026',
      description: t.experience.roles[0].description,
      stack: ['Ansible', 'OpenStack', 'CI/CD', 'Automated Testing'],
    },
    {
      role: t.experience.roles[1].role,
      company: 'Softplan',
      period: 'Mar 2024 - Sept 2025',
      description: t.experience.roles[1].description,
      stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    },
    {
      role: t.experience.roles[2].role,
      company: 'Softplan',
      period: 'Apr 2022 - Mar 2024',
      description: t.experience.roles[2].description,
      stack: ['Robot Framework', 'SOAP-UI', 'GitLab CI', 'Test Scenarios'],
    },
    {
      role: t.experience.roles[3].role,
      company: 'Varied (Softplan / Balsystem)',
      period: 'Apr 2014 - Apr 2022',
      description: t.experience.roles[3].description,
      stack: ['SQL Server', 'Oracle', 'Customer Support', 'Analysis'],
    },
  ];

  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 mb-4">
            <Briefcase size={16} className="text-accent-secondary" />
            <span className="text-sm font-mono text-accent-secondary">{t.experience.careerPath}</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            {t.experience.title} <span className="text-white">{t.experience.highlight}</span>
          </h2>
        </motion.div>

        <div className="mt-8">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
