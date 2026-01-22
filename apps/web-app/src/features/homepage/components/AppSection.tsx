'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { AppData } from '../data/apps';

type AppSectionProps = {
  app: AppData;
  index: number;
};

export function AppSection({ app, index }: AppSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // スクロールに応じたアニメーション値
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // 交互にレイアウトを変える
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${app.gradient.from} 0%, ${app.gradient.to} 100%)`,
      }}
    >
      {/* 装飾的な背景要素 */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${isEven ? '20%' : '80%'} 50%, ${app.gradient.from}40 0%, transparent 50%)`,
        }}
      />

      {/* 浮遊する装飾 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{
          background: app.gradient.from,
          left: isEven ? '10%' : '70%',
          top: '20%',
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
          style={{ opacity, y, scale }}
        >
          {/* アプリ情報 */}
          <div className="flex-1 text-center md:text-left">
            <motion.span
              className="inline-block text-wine-light text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              App {String(index + 1).padStart(2, '0')}
            </motion.span>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {app.name}
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/70 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {app.description}
            </motion.p>

            <motion.a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-wine hover:bg-wine-light text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-wine/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>アプリを開く</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>
          </div>

          {/* アプリのビジュアル（プレースホルダー） */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -5 : 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* グロー効果 */}
              <div
                className="absolute inset-0 blur-3xl opacity-50"
                style={{ background: app.gradient.from }}
              />
              
              {/* カード */}
              <motion.div
                className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* 内部の装飾 */}
                <div className="absolute inset-0 bg-gradient-to-br from-wine/20 to-transparent" />
                <div className="relative text-6xl font-bold text-white/20">
                  {app.name.charAt(0)}
                </div>
                
                {/* 光の反射効果 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
