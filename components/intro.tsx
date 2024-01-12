// Import React components
'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useLanguageContext } from '@/context/language-context';
import { TYPHOGRAPHY } from '@/lib/data';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguageContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image src="/hello.webp" alt="Ricardo portrait" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
        </motion.div>
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        {language === 'EN' ? (
          <>
            <span className="font-bold">Hello, I'm Candra Wali Sanjaya.</span> I'm a <span className="font-bold">Frontend developer</span> with <span className="font-bold">2 years+</span> of experience. I enjoy building{' '}
            <span className="italic">sites & apps</span>. My focus is <span className="underline">React (Next.js) & React Native</span>.
          </>
        ) : (
          <>
            <span className="font-bold">Halo, saya Candra Wali Sanjaya.</span> Saya seorang <span className="font-bold">Frontend Developer</span> dengan <span className="font-bold">pengalaman 2 tahun lebih</span>. Saya senang dalam membuat{' '}
            <span className="italic">website & aplikasi</span>. Fokus saya adalah <span className="underline">React (Next.js) & React Native</span>.
          </>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          {TYPHOGRAPHY[language].CONTACT_ME} <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/my_cv.pdf"
          download
          aria-label="download cv candra wali sanjaya"
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/chndrwali/"
          target="_blank"
          aria-label="Linkedin Candra Wali Sanjaya"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/chndrwali"
          target="_blank"
          aria-label="Gihtub Candra Wali Sanjaya"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://wa.me/6289652648201?text=Hello Candra"
          target="_blank"
          aria-label="Whatsapp Candra Wali Sanjaya"
        >
          <FaWhatsappSquare />
        </a>
      </motion.div>
    </section>
  );
}
