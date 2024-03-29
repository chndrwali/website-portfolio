'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { useLanguageContext } from '@/context/language-context';
import { TYPHOGRAPHY } from '@/lib/data';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  const { language } = useLanguageContext();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-8 sm:mb-10 lg:mb-16 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{TYPHOGRAPHY[language].CONTACT_ME}</SectionHeading>

      {language === 'EN' ? (
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Please contact me directly at{' '}
          <a className="underline" href="mailto:chndrwali@gmail.com">
            chndrwali@gmail.com
          </a>{' '}
          or through this form.
        </p>
      ) : (
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Silakan hubungi saya langsung di{' '}
          <a className="underline" href="mailto:chndrwali@gmail.com">
            chndrwali@gmail.com
          </a>{' '}
          atau melalui formulir ini.
        </p>
      )}

      <form
        className="mt-8 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input className="h-12 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" name="senderEmail" type="email" required maxLength={500} placeholder="Your email" />
        <textarea className="h-40 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" name="message" placeholder="Your message" required maxLength={5000} />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
