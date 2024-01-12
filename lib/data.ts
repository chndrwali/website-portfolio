import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import aedu from '@/public/images/aedu.webp';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend Enginner (aedu+)',
    location: 'Bandung, Indonesia (Remote)',
    description: 'I worked as a Frontend Enginner in startup ed...',
    icon: React.createElement(CgWorkAlt),
    date: 'June 2023 - Now',
  },

  {
    title: 'Frontend Developer (STRT Button)',
    location: 'Medan, Indonesia (On-site)',
    description: 'I worked as a Frontend dev in web3 compan...',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2023 - June 2023',
  },
  {
    title: 'Full Stack Developer (Armada Vision)',
    location: 'Medan, Indonesia (Remote)',
    description: 'I worked as a full stack developer and creat...',
    icon: React.createElement(CgWorkAlt),
    date: 'August 2022 - Feb 2023',
  },
  {
    title: 'Graduated Highshcool',
    location: 'Medan, Indonesia',
    description: 'I graduated after 3 years studying software engineering. After 2 months, I immediately got a job as a full stack developer.',
    icon: React.createElement(LuGraduationCap),
    date: 'May 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'TogetherBoost App',
    description: 'Online course website offers easy access to a variety of courses. Users can learn through videos, readings, and exams on topics ranging from technical skills to soft skills.',
    tags: ['Vite', 'Tailwind', 'Express JS', 'Redux'],
    imageUrl: aedu,
    url: 'https://learning.aedu.id',
  },
] as const;

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Node.js', 'Git', 'Tailwind', 'MongoDB', 'Redux', 'GraphQL', 'Apollo', 'Express', 'Vue', 'Vuex', 'Cypress'] as const;

const ID = {
  CONTACT_ME: 'Hubungi saya',
  SKILLS_ME: 'Skill',
  ABOUT_ME: 'Tentang Saya',
  ABOUT_ME_DESC:
    'Sebagai seorang Frontend developer dengan pengalaman lebih dari 2 tahun, saya ahli dalam beberapa teknologi modern, termasuk React.js, Next.js, Vue.js, dan GraphQL. Saya juga mahir dalam TypeScript dan memiliki pengalaman dengan Jest untuk pengujian unit dan cypress untuk pengujian E2E. Saya bersemangat untuk menciptakan antarmuka yang ramah pengguna dan intuitif yang meningkatkan pengalaman pengguna. Saya selalu ingin mempelajari teknologi baru. Saat ini saya sedang mencari posisi penuh waktu sebagai Frontend Developer.',
  MY_PROJECT: 'Proyek dan Sertifikat Saya',
  MY_EXPERIENCE: 'Pengalaman Saya',
  SEND: 'Kirim Email',
};
const EN = {
  CONTACT_ME: 'Contact me here',
  SKILLS_ME: 'My Skill',
  ABOUT_ME: 'About me',
  ABOUT_ME_DESC:
    'As a frontend developer with 2 years of experience, I am skilled in several modern technologies, including React.js, Next.js, Vue.js, and GraphQL. I am also proficient in Typescript and have experience with Jest for unit testing and cypress for E2E testing. I am passionate about creating user-friendly and intuitive interfaces that enhance the user experience. I am always looking to learn new technologies. I am currently looking for a full-time position as a Frontend developer.',
  MY_PROJECT: 'My Projects and Certificates',
  MY_EXPERIENCE: 'My Experience',
  SEND: 'Send Email',
};

export const TYPHOGRAPHY = {
  ID: { ...ID },
  EN: { ...EN },
};
