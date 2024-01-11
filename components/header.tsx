'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useLanguageContext } from '@/context/language-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const { language, setLanguage } = useLanguageContext();
  const handleToggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ID' : 'EN');
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="z-[999] bg-green-500 relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className="hidden sm:flex items-center fixed top-0 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li className="h-3/4 flex items-center justify-center relative" key={link.hash} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Link
                className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300', {
                  'text-gray-950 dark:text-gray-200': activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <p className="fixed md:top-10 top-5 sm:hidden left-10">Candra Wali Sanjaya</p>
        <button aria-label="EN" role="button" className="fixed md:top-10 top-5 right-10" onClick={handleToggleLanguage}>
          {language}
        </button>
      </div>
      {/* Hamburger Menu */}
      <button aria-label="Toggle menu" role="button" className="sm:hidden fixed top-1 left-1 z-50 p-2 min-h-[44px] min-w-[44px]" onClick={handleToggleMobileMenu}>
        <div className="block bg-white w-6 h-1 mb-1"></div>
        <div className="block bg-white w-6 h-1 mb-1"></div>
        <div className="block bg-white w-6 h-1"></div>
      </button>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div className="sm:hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-40 flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <ul className="flex flex-col items-center text-white text-centerr">
            {links.map((link) => (
              <li key={link.hash} className="mx-auto">
                <Link
                  className={clsx('py-3', {
                    'font-bold': activeSection === link.name,
                  })}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setIsMobileMenuOpen(false); // Close the mobile menu on link click
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
