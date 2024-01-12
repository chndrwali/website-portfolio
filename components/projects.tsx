'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { TYPHOGRAPHY, projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import { useLanguageContext } from '@/context/language-context';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  const { language } = useLanguageContext();

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 max-w-[1900px] mb-14 md:mb-20 lg:mb-28">
      <SectionHeading>{TYPHOGRAPHY[language].MY_PROJECT}</SectionHeading>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
