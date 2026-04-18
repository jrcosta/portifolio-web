'use client';

import { motion } from 'framer-motion';
import { FlaskConical, ExternalLink, Github, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AutomationLabs = () => {
  const { t } = useLanguage();

  return (
    <section id="labs" className="section bg-bg-secondary relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-4">
            <FlaskConical size={16} className="text-accent-primary" />
            <span className="text-sm font-mono text-accent-primary">CI/CD + GitHub Pages</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            {t.labs.title} <span className="text-accent-primary">{t.labs.highlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.labs.subtitle}</p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Card 1 — API RestAssured (Ativo) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-wrap justify-between items-center gap-6 hover:border-accent-primary/50 transition-colors"
          >
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-primary/20 text-accent-primary">
                  {t.labs.cards.api.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" title="Live" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.labs.cards.api.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t.labs.cards.api.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Java 21', 'RestAssured', 'JUnit 5', 'Allure', 'GitHub Actions'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://github.com/jrcosta/portifolio-automacao-api-restassured"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-sm font-mono"
              >
                <Github size={16} />
                {t.labs.viewCode}
              </a>
              <a
                href="https://jrcosta.github.io/portifolio-automacao-api-restassured/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary text-black font-bold hover:bg-green-400 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                {t.labs.viewReport}
              </a>
            </div>
          </motion.div>

          {/* Card 2 — QAgent (Ativo) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-wrap justify-between items-center gap-6 hover:border-accent-primary/50 transition-colors"
          >
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-primary/20 text-accent-primary">
                  {t.labs.cards.agent.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" title="Live" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.labs.cards.agent.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t.labs.cards.agent.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Agents', 'Prompt Engineering', 'Automation', 'GitHub Pages'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://github.com/jrcosta/qagent"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-sm font-mono"
              >
                <Github size={16} />
                {t.labs.cards.agent.links.agentRepo}
              </a>
              <a
                href="https://github.com/jrcosta/repo_alvo_api_simples"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-sm font-mono"
              >
                <Github size={16} />
                {t.labs.cards.agent.links.targetRepo}
              </a>
              <a
                href="https://jrcosta.github.io/qagent/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary text-black font-bold hover:bg-green-400 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                {t.labs.cards.agent.links.executionResults}
              </a>
            </div>
          </motion.div>

          {/* Card 2 — E2E Cypress (Em Breve) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-6 opacity-60 border-dashed"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[rgba(20,184,166,0.15)] text-teal-400">
                {t.labs.cards.e2e.badge}
              </span>
              <div className="flex items-center gap-1 text-xs font-mono text-gray-500">
                <Clock size={12} />
                {t.labs.comingSoon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t.labs.cards.e2e.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.labs.cards.e2e.description}
            </p>
          </motion.div>

          {/* Card 3 — Load Testing k6 (Ativo) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-wrap justify-between items-center gap-6 hover:border-accent-primary/50 transition-colors"
          >
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-primary/20 text-accent-primary">
                  {t.labs.cards.performance.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" title="Live" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.labs.cards.performance.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t.labs.cards.performance.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {['k6', 'JavaScript', 'Load Testing', 'API Performance'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://github.com/jrcosta/portifolio-automacao-k6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-sm font-mono"
              >
                <Github size={16} />
                {t.labs.cards.performance.links.repository}
              </a>
              <a
                href="https://github.com/jrcosta/portifolio-automacao-k6/blob/main/k6/load-test.js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary text-black font-bold hover:bg-green-400 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                {t.labs.cards.performance.links.scenario}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationLabs;
