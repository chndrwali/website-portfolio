import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, url, githubUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="block border border-black/5 rounded-lg overflow-hidden group-hover:border-gray-200 transition dark:border-white/10 dark:hover:border-white/20">
        <div className="pt-4 pb-7 px-5 sm:pt-10 flex flex-col h-full">
          <div className="relative w-full h-[200px] overflow-hidden mb-5">
            <Image src={imageUrl} alt="Project I worked on" layout="fill" objectFit="cover" quality={95} className="rounded-lg shadow-2xl transition" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="leading-relaxed h-[150px] overflow-hidden mb-4 text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li key={index}>
                <span className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">{tag}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-4">
            <Link href={githubUrl} target="_blank" rel="noreferrer">
              <p className="btn-project">
                <FaGithub />
                Repository
              </p>
            </Link>
            <Link href={url} target="_blank" rel="noreferrer">
              <p className="btn-project">
                <FaExternalLinkAlt />
                Website
              </p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
