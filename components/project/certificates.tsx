import { useRef } from 'react';
import { certificatesData } from '@/lib/data';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type CertificatesProps = (typeof certificatesData)[number];

export default function Certificates({ title, description, tags, imageUrl, url, githubUrl }: CertificatesProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const handleAnimation = async () => {
    await controls.start({ opacity: 1, scale: 1 });
  };

  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.8 }} animate={controls} transition={{ duration: 0.5 }} onViewportEnter={handleAnimation} className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-xl p-4 flex flex-col">
      <div className="relative h-40 md:h-48 mb-4 overflow-hidden rounded-md">
        <Image src={imageUrl} alt="Proyek yang saya kerjakan" layout="fill" objectFit="cover" quality={95} className="rounded-md image-animation" />
      </div>
      <div className="flex flex-col flex-grow">
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        </div>
        <ul className="flex space-x-2 mb-4">
          {tags.map((tag, index) => (
            <li key={index} className="whitespace-nowrap rounded-full bg-gray-600 dark:bg-gray-50 px-2.5 py-0.5 text-xs text-gray-100 dark:text-gray-900">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4 mt-auto">
          <Link href={url} target="_blank" rel="noreferrer" passHref>
            <p className="btn-project flex items-center image-animation">
              <FaExternalLinkAlt className="mr-2" />
              Credentials
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
