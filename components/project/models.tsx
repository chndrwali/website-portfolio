import { useRef } from 'react';
import { modelsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ModelProps = (typeof modelsData)[number];

export default function Certificates({ title, description, tags, imageUrl, url, githubUrl }: ModelProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const handleAnimation = async () => {
    await controls.start({ opacity: 1, scale: 1 });
  };

  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.8 }} animate={controls} transition={{ duration: 0.5 }} onViewportEnter={handleAnimation} className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-md p-4">
      <div className="relative h-40 md:h-48 mb-4 overflow-hidden rounded-md">
        <Image src={imageUrl} alt="Proyek yang saya kerjakan" layout="fill" objectFit="cover" quality={95} className="rounded-md" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <ul className="flex space-x-2 mb-4">
          {tags.map((tag, index) => (
            <li key={index} className="text-gray-500 dark:text-gray-400">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Link href={githubUrl} target="_blank" rel="noreferrer" passHref>
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <FaGithub className="mr-2" />
              Repositori
            </p>
          </Link>
          <Link href={url} target="_blank" rel="noreferrer" passHref>
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <FaExternalLinkAlt className="mr-2" />
              Situs Web
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
