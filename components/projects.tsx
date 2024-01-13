'use client';

// Import the Certificates and Models components if they exist
// import Certificates from './path-to-certificates-component';
// import Models from './path-to-models-component';

import React from 'react';
import SectionHeading from './section-heading';
import { TYPHOGRAPHY, projectsData, certificatesData, modelsData } from '@/lib/data';
import Project from './project/project';
import Certificates from './project/certificates';
import Models from './project/models';
import { useSectionInView } from '@/lib/hooks';
import { useLanguageContext } from '@/context/language-context';

// ... (existing imports)

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);
  const { language } = useLanguageContext();

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [activeButton, setActiveButton] = React.useState('All');

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
    setActiveButton(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case 'All':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projectsData.map((project, index) => (
              <Project key={index} {...project} />
            ))}
            {certificatesData.map((certificate, index) => (
              <Certificates key={index} {...certificate} />
            ))}
            {modelsData.map((model, index) => (
              <Models key={index} {...model} />
            ))}
          </div>
        );
      case 'Projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {projectsData.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        );
      case 'Certi':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {certificatesData.map((certificate, index) => (
              <Certificates key={index} {...certificate} />
            ))}
          </div>
        );
      case 'Model':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {modelsData.map((model, index) => (
              <Models key={index} {...model} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={ref} id="projects" className="py-12">
      <SectionHeading>{TYPHOGRAPHY[language].MY_PROJECT}</SectionHeading>
      <div className="flex flex-wrap justify-center mb-8">
        <button
          className={`focus:outline-none ${activeButton === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white'} py-2 px-4 rounded-full transition mr-4 mb-4`}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        <button
          className={`focus:outline-none ${activeButton === 'Projects' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white'} py-2 px-4 rounded-full transition mr-4 mb-4`}
          onClick={() => handleCategoryClick('Projects')}
        >
          Projects
        </button>
        <button
          className={`focus:outline-none ${activeButton === 'Certi' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white'} py-2 px-4 rounded-full transition mr-4 mb-4`}
          onClick={() => handleCategoryClick('Certi')}
        >
          Certificates
        </button>
        <button
          className={`focus:outline-none ${activeButton === 'Model' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-white'} py-2 px-4 rounded-full transition mr-4 mb-4`}
          onClick={() => handleCategoryClick('Model')}
        >
          Model
        </button>
      </div>
      <div>{renderContent()}</div>
    </section>
  );
}
