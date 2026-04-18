'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const handleTyping = () => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts]);

  return (
    <span>
      {displayedText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-sm font-mono text-gray-400">{t.hero.openToWork}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.hero.greeting} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Eneri Junior
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-accent-primary font-mono mb-8 h-[60px]">
            &gt; <Typewriter texts={t.hero.roles} />
          </div>

          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-accent-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors"
            >
              {t.hero.viewExperience}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-mono text-gray-300"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </motion.div>

        {/* Visual Content (Code Snippet) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary opacity-30 blur-lg" />
          <div className="relative bg-[#1e1e1e] rounded-lg border border-white/10 shadow-2xl p-6 font-mono text-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500 text-xs">{t.hero.code.fileName}</span>
            </div>

            <div className="space-y-1">
              <div className="flex">
                <span className="text-purple-400 mr-2">public class</span>
                <span className="text-yellow-300">{t.hero.code.className}</span>
                <span className="text-white"> {'{'}</span>
              </div>
              <div className="flex pl-4">
                <span className="text-purple-400 mr-2">private String</span>
                <span className="text-blue-300">{t.hero.code.nameVariable}</span>
                <span className="text-white"> = </span>
                <span className="text-green-400">&quot;Eneri Junior&quot;</span>
                <span className="text-white">;</span>
              </div>
              <div className="flex pl-4">
                <span className="text-purple-400 mr-2">private String[]</span>
                <span className="text-blue-300">{t.hero.code.stackVariable}</span>
                <span className="text-white"> = {'{'}</span>
              </div>
              <div className="flex pl-8">
                <span className="text-green-400">&quot;{t.hero.code.stackValues[0]}&quot;</span>
                <span className="text-white">, </span>
                <span className="text-green-400">&quot;{t.hero.code.stackValues[1]}&quot;</span>
                <span className="text-white">,</span>
              </div>
              <div className="flex pl-8">
                <span className="text-green-400">&quot;{t.hero.code.stackValues[2]}&quot;</span>
                <span className="text-white">, </span>
                <span className="text-green-400">&quot;{t.hero.code.stackValues[3]}&quot;</span>
                <span className="text-white">, </span>
                <span className="text-green-400">&quot;{t.hero.code.stackValues[4]}&quot;</span>
              </div>
              <div className="flex pl-4">
                <span className="text-white">{'};'}</span>
              </div>
              <div className="flex pl-4 mt-2">
                <span className="text-purple-400">public void</span>
                <span className="text-blue-300 ml-2">{t.hero.code.methodName}</span>
                <span className="text-white">() {'{'}</span>
              </div>
              <div className="flex pl-8">
                <span className="text-gray-500">{t.hero.code.comment}</span>
              </div>
              <div className="flex pl-8">
                <span className="text-blue-300">{t.hero.code.qualityClass}</span>
                <span className="text-white">.{t.hero.code.qualityMethod}();</span>
              </div>
              <div className="flex pl-4">
                <span className="text-white">{'}'}</span>
              </div>
              <div className="flex">
                <span className="text-white">{'}'}</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
