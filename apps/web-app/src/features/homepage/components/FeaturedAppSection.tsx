'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import type { AppData } from '../data/apps';

type FeaturedAppSectionProps = {
  app: AppData;
};

export function FeaturedAppSection({ app }: FeaturedAppSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const features = app.features || [];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveFeature(Math.min(newIndex, features.length - 1));
  };

  const scrollToFeature = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth * 0.85;
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center py-20 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${app.gradient.from} 0%, ${app.gradient.to} 100%)`,
      }}
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)',
            left: '-20%',
            top: '-20%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            right: '-10%',
            bottom: '-10%',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div className="relative z-10" style={{ opacity, y }}>
        {/* ヘッダー部分 */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6">
              Featured Project
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              {app.name}
            </h2>
            <p className="text-xl md:text-2xl text-cyan-200 font-medium mb-6">
              {app.tagline}
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              {app.description}
            </p>
          </motion.div>
        </div>

        {/* 横スクロールカード */}
        {features.length > 0 && (
          <div className="relative">
            {/* スクロールコンテナ */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-[calc((100vw-1280px)/2+24px)] pb-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* インジケーター */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToFeature(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? 'w-8 bg-cyan-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Feature ${index + 1}`}
                />
              ))}
            </div>

            {/* スクロールヒント */}
            <motion.div
              className="flex items-center justify-center gap-2 mt-8 text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-sm">スワイプして詳細を見る</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/60 text-sm">
            Coming Soon
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
