// Tech.tsx
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skillsData } from '@/lib/data';

type SkillProps = (typeof skillsData)[number];

export default function Tech({ id, name, type, imageUrl, url }: SkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mx-auto mb-8 w-full max-w-xs md:max-w-sm lg:max-w-md"
    >
      <div className="flex flex-col items-center text-center bg-gray-950 dark:bg-slate-200 rounded-lg p-4 shadow-md">
        <div className="mb-2">
          <Image src={imageUrl} alt={`Logo ${name}`} width={96} height={96} className="rounded-full image-animation" />
        </div>
        <h3 className="text-lg font-semibold mb-2">
          <a href={url} target="_blank" rel="noreferrer" title={`Tombol ${name}`} aria-label={`Tombol ${name}`} className="text-blue-500 hover:underline">
            {name}
          </a>
        </h3>
        <span className="text-slate-200 dark:text-gray-600">{type}</span>
      </div>
    </motion.div>
  );
}
