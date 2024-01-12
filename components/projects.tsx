'use client';

// Import the Certificates and Models components if they exist
// import Certificates from './path-to-certificates-component';
// import Models from './path-to-models-component';

import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import { TYPHOGRAPHY, projectsData, certificatesData, modelsData } from '@/lib/data';
import Project from './project/project';
import Certificates from './project/certificates'; // Import Certificates component
import Models from './project/models'; // Import Models component
import { useSectionInView } from '@/lib/hooks';
import { useLanguageContext } from '@/context/language-context';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  const { language } = useLanguageContext();

  const [selectedCategory, setSelectedCategory] = React.useState('All'); // Ubah nilai awal menjadi 'All'
  const [activeButton, setActiveButton] = React.useState('All'); // Ubah nilai awal menjadi 'All'

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'All': // Ubah dari 'Projects' menjadi 'All'
        return [
          ...projectsData.map((project, index) => <Project key={index} {...project} />),
          ...certificatesData.map((certificate, index) => <Certificates key={index} {...certificate} />),
          ...modelsData.map((model, index) => <Models key={index} {...model} />),
        ];
      case 'Projects':
        return projectsData.map((project, index) => <Project key={index} {...project} />);
      case 'Certi':
        return certificatesData.map((certificate, index) => <Certificates key={index} {...certificate} />);
      case 'Model':
        return modelsData.map((model, index) => <Models key={index} {...model} />);
      default:
        return null;
    }
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 max-w-[1900px] mb-14 md:mb-20 lg:mb-28">
      <SectionHeading>{TYPHOGRAPHY[language].MY_PROJECT}</SectionHeading>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '60px',
        }}
      >
        <button className={`btn-project ${activeButton === 'All' ? 'active2' : ''}`} onClick={() => handleCategoryClick('All')}>
          All
        </button>
        <button className={`btn-project ${activeButton === 'Projects' ? 'active2' : ''}`} onClick={() => handleCategoryClick('Projects')}>
          Projects
        </button>
        <button className={`btn-project ${activeButton === 'Certi' ? 'active2' : ''}`} onClick={() => handleCategoryClick('Certi')}>
          Certificates
        </button>
        <button className={`btn-project ${activeButton === 'Model' ? 'active2' : ''}`} onClick={() => handleCategoryClick('Model')}>
          Model
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">{renderContent()}</div>
    </section>
  );
}
