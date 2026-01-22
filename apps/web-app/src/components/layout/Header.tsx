'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Apps', href: '#apps' },
  { label: 'Status', href: '/status' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 背景のブラー効果 */}
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" />
      
      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <motion.a
          href="#"
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-wine-light">app.</span>
          <span className="text-white">babl</span>
          <span className="text-wine">.tech</span>
        </motion.a>

        {/* PC用ナビゲーション */}
        <motion.ul
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-white/80 hover:text-wine-light transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* ハンバーガーメニューボタン（スマホ用） */}
        <motion.button
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </nav>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-dark/95 backdrop-blur-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-2xl text-white hover:text-wine-light transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
