import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import aedu from '@/public/images/aedu.webp';
import aedu_gif from '@/public/images/aedu-gif.gif';
import creo from '@/public/images/creo-defi.webp';
import hris from '@/public/images/hris.webp';
import marketplace from '@/public/images/marketplace.webp';
import undangan_digital from '@/public/images/undangan digital.webp';
import car_rentalv2 from '@/public/images/car-rental-v2.webp';
import topupgame from '@/public/images/topupgame.webp';
import landingpage from '@/public/images/landing page property.webp';
import onlineshop from '@/public/images/hefa store.webp';
import netflix from '@/public/images/netflix.webp';
import movieapp from '@/public/images/movie-app.webp';
import aeduapp from '@/public/images/mobile-aedu.webp';
import hotel from '@/public/images/hotel.webp';
import receipe from '@/public/images/receipe.png';

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
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
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
    gif: aedu_gif,
  },
  {
    title: 'Nginep',
    description: 'Explore the world with our hotel booking platform inspired by Airbnb! Easily book accommodation, manage personalized trips and more',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'Mongo DB', 'Tailwind', 'Zustand'],
    imageUrl: hotel,
    url: 'https://amienul-nginep.vercel.app/',
  },

  {
    title: 'Creo Defi',
    description: 'The dApp website offers staking, airdrop participation, token swapping, and an NFT builder for quick and versatile decentralized financial and non-fungible token activities.',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'Wagmi', 'Thirdweb', 'RainbowKit'],
    imageUrl: creo,
    url: 'https://creo-defi.vercel.app/',
  },
  {
    title: 'App aedu+',
    description: 'This application is the result of the transformation of the 3 website menus above (learning, community, enterprise), all the features on the website are also in this application',
    tags: ['React Native', 'Expo', 'Javasciprt', 'Css'],
    imageUrl: aeduapp,
    url: 'https://expo.dev/accounts/amienulrana/projects/aedu-plus/builds/c32d6b4f-b7d8-41ff-acb7-b6ebd2523479',
  },

  {
    title: 'Movie App',
    description: 'This app you can browse trending, upcoming and top rated movies, you can see the details of a movie and the cast person, and you can even search any movie you want.',
    tags: ['React Native', 'Javascript', 'Tailwind', 'Nativewind', 'TMDB'],
    imageUrl: movieapp,
    url: 'https://expo.dev/accounts/amienulrana/projects/app-ui/builds/73b3a127-9092-431b-8de6-9368860f84e3',
  },
  {
    title: 'HRIS Management',
    description: 'The HRIS management website simplifies HR tasks, including payslip generation, attendance tracking, and leave management for efficient human resource operations.',
    tags: ['Vue 3', 'Vuex', 'Express Js', 'Tailwind', 'Mongo DB'],
    imageUrl: hris,
    url: 'https://mufidahgroup.com/',
  },
  {
    title: 'Recipe App',
    description: 'From quick and easy weekday meals to impressive gourmet dishes, this app provides step-by-step instructions, ingredient lists, and stunning visuals to guide you through each culinary adventure. ',
    tags: ['React Native', 'Javascript', 'Tailwind', 'Nativewind', 'Themealdb'],
    imageUrl: receipe,
    url: 'https://amienulrana.vercel.app/notfound',
  },
  {
    title: 'Netflix Clone',
    description: 'cloned netflix website with several features, namely, auth with github and google, watch videos, and like videos',
    tags: ['Next.js', 'Prisma', 'Typescript', 'Tailwind', 'Mongo DB'],
    imageUrl: netflix,
    url: 'https://movie-app-amienul.vercel.app',
  },
  {
    title: 'Marketplace',
    description: 'The integrated marketplace website features seamless Raja Ongkir integration, allowing users to easily check shipping costs for their purchases. and dashboard to create product',
    tags: ['Vue 3', 'Vuex', 'Express Js', 'Tailwind', 'Mongo DB'],
    imageUrl: marketplace,
    url: 'https://marketplace-one-blue.vercel.app/',
  },
  {
    title: 'Car Rental',
    description: 'The personal project car rental website offers a simplified platform for renting cars, catering to individual needs.',
    tags: ['Next.js 13', 'Typescript', 'Tailwind', 'Headless UI'],
    imageUrl: car_rentalv2,
    url: 'https://cars-rental-v2-amienulrana.vercel.app/',
  },
  {
    title: 'Invitation Digital',
    description: 'The digital invitation website allows quick guest check-ins through scanning, providing administrators with instant access to arrival information.',
    tags: ['React', 'React router', 'Express Js', 'Mongo DB', 'Reactstrap'],
    imageUrl: undangan_digital,
    url: 'https://amienulrana.vercel.app/notfound',
  },
  {
    title: 'Topup Game',
    description: 'This personal project involves the creation of a game top-up website designed for simulation purposes. Users can experience the process of buying game vouchers in a simulated environment.',
    tags: ['Next.js', 'Typescript', 'Express Js', 'Mongo DB', 'CSS'],
    imageUrl: topupgame,
    url: 'https://topupgame-pearl.vercel.app/',
  },
  {
    title: 'Furniture Landing Page',
    description: 'The personal project furniture landing page is a visually appealing website showcasing a diverse range of furniture products.',
    tags: ['HTML', 'CSS', 'Javascript', 'Tailwind'],
    imageUrl: landingpage,
    url: 'https://amienulrana.github.io/companyprofile',
  },
  {
    title: 'Online Shop',
    description: 'online shop personal website as an exercise in creating a website using the latest bootstrap',
    tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    imageUrl: onlineshop,
    url: 'https://amienulrana.github.io/hefa-store/',
  },
] as const;

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Next.js', 'Node.js', 'Git', 'Tailwind', 'MongoDB', 'Redux', 'GraphQL', 'Apollo', 'Express', 'Vue', 'Vuex', 'Cypress'] as const;

const ID = {
  CONTACT_ME: 'Hubungi saya',
  ABOUT_ME: 'Tentang Saya',
  ABOUT_ME_DESC:
    'Sebagai seorang Frontend developer dengan pengalaman lebih dari 2 tahun, saya ahli dalam beberapa teknologi modern, termasuk React.js, Next.js, Vue.js, dan GraphQL. Saya juga mahir dalam TypeScript dan memiliki pengalaman dengan Jest untuk pengujian unit dan cypress untuk pengujian E2E. Saya bersemangat untuk menciptakan antarmuka yang ramah pengguna dan intuitif yang meningkatkan pengalaman pengguna. Saya selalu ingin mempelajari teknologi baru. Saat ini saya sedang mencari posisi penuh waktu sebagai Frontend Developer.',
  MY_PROJECT: 'Project Saya',
  PROJECT: {
    COURSE_DESC: 'Sebuah website kursus online menawarkan akses mudah ke berbagai kursus. Pengguna dapat belajar melalui video, bacaan, dan ujian tentang berbagai topik mulai dari keterampilan teknis hingga soft skill.',
  },
  MY_EXPERIENCE: 'Pengalaman Saya',
};
const EN = {
  CONTACT_ME: 'Contact me here',
  ABOUT_ME: 'About me',
  ABOUT_ME_DESC:
    'As a frontend developer with 2 years of experience, I am skilled in several modern technologies, including React.js, Next.js, Vue.js, and GraphQL. I am also proficient in Typescript and have experience with Jest for unit testing and cypress for E2E testing. I am passionate about creating user-friendly and intuitive interfaces that enhance the user experience. I am always looking to learn new technologies. I am currently looking for a full-time position as a Frontend developer.',
  MY_PROJECT: 'My Projects',
  PROJECT: {
    COURSE_DESC: 'Online course website offers easy access to a variety of courses. Users can learn through videos, readings, and exams on topics ranging from technical skills to soft skills.',
  },
  MY_EXPERIENCE: 'My Experience',
};

export const TYPHOGRAPHY = {
  ID: { ...ID },
  EN: { ...EN },
};
