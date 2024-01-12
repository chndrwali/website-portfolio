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

export const certificatesData = [
  {
    title: 'Dicoding Indonesia',
    description: 'Online course website offers easy access to a variety of courses. Users can learn through videos, readings, and exams on topics ranging from technical skills to soft skills.',
    tags: ['Vite', 'Tailwind', 'Express JS', 'Redux'],
    imageUrl: aedu,
    url: 'https://learning.aedu.id',
  },
] as const;

export const modelsData = [
  {
    title: 'Orboit Future Academy',
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
    'Sebagai seorang Junior Frontend Developer dan Machine Learning Developer dengan pengalaman lebih dari 1 tahun, saya memiliki keahlian dalam beberapa teknologi modern, termasuk React.js, Next.js, Vite.js, dan Tailwind. Saya juga memiliki keterampilan dalam mengembangkan dataset menjadi model, serta pengalaman dengan Jest untuk pengujian unit dan Cypress untuk pengujian end-to-end (E2E). Saya sangat antusias dalam menciptakan antarmuka yang ramah pengguna dan intuitif untuk meningkatkan pengalaman pengguna. Saya selalu bersemangat untuk mempelajari teknologi baru. Saat ini, saya sedang mencari peluang magang atau pekerjaan penuh waktu sebagai Frontend Developer atau Machine Learning Developer.',
  MY_PROJECT: 'Proyek dan Sertifikat Saya',
  MY_EXPERIENCE: 'Pengalaman Saya',
  SEND: 'Kirim Email',
};
const EN = {
  CONTACT_ME: 'Contact me here',
  SKILLS_ME: 'My Skill',
  ABOUT_ME: 'About me',
  ABOUT_ME_DESC:
    'As a Junior Frontend Developer and Machine Learning Developer with more than 1 year of experience, I have expertise in several modern technologies, including React.js, Next.js, Vite.js, and Tailwind. I also have skills in developing datasets into models, as well as experience with Jest for unit testing and Cypress for end-to-end (E2E) testing. I am passionate about creating user-friendly and intuitive interfaces to enhance the user experience. I am always eager to learn new technologies. Currently, I am looking for internship opportunities or full-time work as a Frontend Developer or Machine Learning Developer.',
  MY_PROJECT: 'My Projects and Certificates',
  MY_EXPERIENCE: 'My Experience',
  SEND: 'Send Email',
};

export const TYPHOGRAPHY = {
  ID: { ...ID },
  EN: { ...EN },
};
