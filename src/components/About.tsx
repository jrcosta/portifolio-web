'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">{t.about.title}</h2>
            <div className="h-1 bg-accent-primary flex-grow max-w-[100px]" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-gray-300 leading-relaxed">
            <div className="md:col-span-2 space-y-4 text-lg">
              <p>
                {t.about.item1} <strong>{t.about.strong1}</strong>.
              </p>
              <p>
                {t.about.item2} <span className="text-accent-primary">{t.about.years}</span> {t.about.item2b} <span className="text-white font-bold">{t.about.strong2}</span>{t.about.item2c}
              </p>
              <p>
                {t.about.item3} <span className="text-white">{t.about.sdet}</span>{t.about.item3b}
              </p>
            </div>

            <div className="glass-card p-6 h-fit bg-bg-card/50">
              <h3 className="text-xl mb-4 text-white border-b border-white/10 pb-2">{t.about.quickInfo}</h3>
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 font-mono text-sm">
                <span className="text-gray-500">{t.about.location}:</span>
                <span className="text-right text-gray-300">SC, Brazil</span>

                <span className="text-gray-500">{t.about.experience}:</span>
                <span className="text-right text-gray-300">{t.about.totalYears}</span>

                <span className="text-gray-500">{t.about.focus}:</span>
                <span className="text-right text-gray-300">{t.about.focusValue}</span>

                <span className="text-gray-500">{t.about.degree}:</span>
                <span className="text-right text-gray-300">{t.about.degreeText}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
