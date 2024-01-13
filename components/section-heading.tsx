import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold capitalize mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center text-gray-800 dark:text-white">{children}</h2>;
}
