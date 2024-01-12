'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData, TYPHOGRAPHY } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/context/language-context';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const { language } = useLanguageContext();

  return (
    <section id="skills" ref={ref} className="mb-8 sm:mb-16 md:mb-20 lg:mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center">
      <SectionHeading>{TYPHOGRAPHY[language].SKILLS_ME}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white dark:bg-white/10 dark:text-white/80 borderBlack rounded-xl px-5 py-3 mb-2 sm:mb-3 md:mb-4"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
