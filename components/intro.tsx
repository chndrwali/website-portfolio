// Import React components
'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useLanguageContext } from '@/context/language-context';
import { TYPHOGRAPHY } from '@/lib/data';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguageContext();

  return (
    <section ref={ref} id="home" className="mb-8 md:mb-0 max-w-[50rem] mx-auto text-center md:scroll-mt-[100rem]">
      <div className="flex items-center justify-center mb-4 md:mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image src="/hello.webp" alt="Candra portrait" width="200" height="200" priority={true} className="h-20 w-20 md:h-40 md:w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
        </motion.div>
      </div>

      <motion.h1 className="mb-4 mt-2 md:mb-10 md:mt-4 px-4 text-base md:text-4xl font-medium !leading-[1.5]">
        {language === 'EN' ? (
          <>
            <TypeAnimation sequence={["I'am Candra Wali Sanjaya ", 2000, "I'am a Front End Developer", 2000, "I'am a Machine Learning Developer", 2000]} repeat={Infinity} />
            <p>
              Hi everyone <span>👋🏼</span>, welcome to my portfolio website
            </p>
          </>
        ) : (
          <>
            <TypeAnimation sequence={["I'am Candra Wali Sanjaya ", 2000, "I'am a Front End Developer", 2000, "I'am a Machine Learning Developer", 2000]} repeat={Infinity} />
            <p>
              Halo semuanya <span>👋🏼</span>, selamat datang di situs portofolio saya
            </p>
          </>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-2 px-4 text-sm md:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          {TYPHOGRAPHY[language].CONTACT_ME} <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-4 md:px-7 py-2 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/my_cv.pdf"
          download
          aria-label="download cv candra wali sanjaya"
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex items-center gap-2">
          <a
            className="bg-white p-2 md:p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/chndrwali/"
            target="_blank"
            aria-label="Linkedin Candra Wali Sanjaya"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-2 md:p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] md:text-lg rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/chndrwali"
            target="_blank"
            aria-label="Gihtub Candra Wali Sanjaya"
          >
            <FaGithub />
          </a>

          <a
            className="bg-white p-2 md:p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] md:text-lg rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://wa.me/6289652648201?text=Hello Candra"
            target="_blank"
            aria-label="Whatsapp Candra Wali Sanjaya"
          >
            <FaWhatsapp />
          </a>
          <a
            className="bg-white p-2 md:p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] md:text-lg rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://instagram.com/chndrwali"
            target="_blank"
            aria-label="Instagram Candra Wali Sanjaya"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
