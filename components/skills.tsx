'use client';

// Skills.tsx
import React from 'react';
import SectionHeading from './section-heading';
import { skillsData, TYPHOGRAPHY } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/context/language-context';
import Tech from './tech/tech';

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
    <section id="skills" ref={ref} className="py-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <SectionHeading>{TYPHOGRAPHY[language].SKILLS_ME}</SectionHeading>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <Tech key={index} {...skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
