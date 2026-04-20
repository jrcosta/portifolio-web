'use client';

import { motion } from 'framer-motion';
import { FlaskConical, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const AutomationLabs = () => {
  const { t } = useLanguage();
  const actionGroupClass = 'flex flex-col gap-3 shrink-0 w-full sm:w-[300px]';
  const actionButtonBaseClass = 'w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all text-sm';
  const actionButtonSecondaryClass = `${actionButtonBaseClass} border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white font-mono`;
  const actionButtonPrimaryClass = `${actionButtonBaseClass} bg-accent-primary text-black font-bold hover:bg-green-400`;

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

            <div className={actionGroupClass}>
              <a
                href="https://github.com/jrcosta/portifolio-automacao-api-restassured"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonSecondaryClass}
              >
                <Github size={16} />
                {t.labs.viewCode}
              </a>
              <a
                href="https://jrcosta.github.io/portifolio-automacao-api-restassured/"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonPrimaryClass}
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

            <div className={actionGroupClass}>
              <a
                href="https://github.com/jrcosta/qagent"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonSecondaryClass}
              >
                <Github size={16} />
                {t.labs.cards.agent.links.agentRepo}
              </a>
              <a
                href="https://github.com/jrcosta/repo_alvo_api_simples"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonSecondaryClass}
              >
                <Github size={16} />
                {t.labs.cards.agent.links.targetRepo}
              </a>
              <a
                href="https://jrcosta.github.io/qagent/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonPrimaryClass}
              >
                <ExternalLink size={16} />
                {t.labs.cards.agent.links.executionResults}
              </a>
            </div>
          </motion.div>

          {/* Card 2 — E2E Cypress (Ativo) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-wrap justify-between items-center gap-6 hover:border-accent-primary/50 transition-colors"
          >
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-primary/20 text-accent-primary">
                  {t.labs.cards.e2e.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" title="Live" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t.labs.cards.e2e.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t.labs.cards.e2e.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cypress', 'E2E', 'UI Automation', 'Shopify'].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={actionGroupClass}>
              <a
                href="https://github.com/jrcosta/portifolio-automacao-cypress"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonSecondaryClass}
              >
                <Github size={16} />
                {t.labs.viewCode}
              </a>
              <a
                href="https://jrcosta.github.io/portifolio-automacao-cypress/"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonPrimaryClass}
              >
                <ExternalLink size={16} />
                {t.labs.viewReport}
              </a>
            </div>
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

            <div className={actionGroupClass}>
              <a
                href="https://github.com/jrcosta/portifolio-automacao-k6"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonSecondaryClass}
              >
                <Github size={16} />
                {t.labs.viewCode}
              </a>
              <a
                href="https://jrcosta.github.io/portifolio-automacao-k6/"
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonPrimaryClass}
              >
                <ExternalLink size={16} />
                {t.labs.viewHtmlReport}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationLabs;
