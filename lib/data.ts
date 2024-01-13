import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

// import project
import togetherboost from '@/public/images/togetherboost.webp';
import twitwar from '@/public/images/twitwar.webp';
import rewwis from '@/public/images/rewwis.webp';
import candrafood from '@/public/images/candrafood.webp';
import Image from 'next/image';

//import skills
import python from '@/public/images/techstack/python.webp';
import figma from '@/public/images/techstack/figma.webp';
import git from '@/public/images/techstack/git.webp';
import github from '@/public/images/techstack/github.webp';
import react from '@/public/images/techstack/react.webp';
import vscode from '@/public/images/techstack/vscode.webp';
import tensorflow from '@/public/images/techstack/tensorflow.webp';
import tensorflowjs from '@/public/images/techstack/tensorflowjs.webp';
import keras from '@/public/images/techstack/keras.webp';
import javascript from '@/public/images/techstack/javascript.webp';
import tailwindcss from '@/public/images/techstack/tailwindcss.webp';
import npm from '@/public/images/techstack/npm.webp';
import vercel from '@/public/images/techstack/vercel.webp';
import kaggle from '@/public/images/techstack/kaggle.webp';
import googlecolab from '@/public/images/techstack/google-colab.webp';

// import sertifikat
import alibabacloud from '@/public/images/sertifikat/alibabasertifikat.webp';
import reactexpert from '@/public/images/sertifikat/reactexpert.webp';
import frontend from '@/public/images/sertifikat/frontendexpert.webp';
import ml from '@/public/images/sertifikat/machinelearning.webp';
import kelulusandicoding from '@/public/images/sertifikat/dicodingkelulusan.webp';
import fundamental from '@/public/images/sertifikat/fundamental.webp';

//import models
import modeldicoding from '@/public/images/models/klasifikasidicoding.webp';
import modelorbit from '@/public/images/models/klasifikasiorbit.webp';
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
    title: 'DevHandal (CodePolitan & Alibaba Cloud)',
    location: 'Bandung, Indonesia (Remote)',
    description: 'I learn as a JavaScript Expert in...',
    icon: React.createElement(LuGraduationCap),
    date: 'Oct 2023 - Present',
  },
  {
    title: 'IDCamp 2023 (Indosat & Dicoding)',
    location: 'Bandung, Indonesia (Remote)',
    description: 'I learn as a Machine Learning Developer in...',
    icon: React.createElement(LuGraduationCap),
    date: 'Sept 2023 - Present',
  },

  {
    title: 'Orbit Kampus - Artificial Intelligences 4 Jobs',
    location: 'Bandung, Indonesia (Remote)',
    description: 'I learn and make projects in activities at...',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2023 - Januari 2024',
  },
  {
    title: 'Development Front End Web & Back End (MSIB Dicoding)',
    location: 'Bandung, Indonesia (Remote)',
    description: 'I learn and make projects in activities at...',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2023 - June 2023',
  },
  {
    title: 'Universitas Nasional Pasim',
    location: 'Bandung, Indonesia',
    description: 'I am currently studying at Pasim National University, I also take part in Independent Campus activities and also participate in coding learning community activities which are held online',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2020 - Present',
  },
] as const;

export const projectsData = [
  {
    title: 'TogetherBoost App',
    description:
      'This website is the final project of the Certified Internship and Independent Study at Dicoding Indonesia Cycle 4. The project revolves around the theme of "Inclusivity in Education" and is built using React Vite for the frontend, Tailwind CSS as the styling framework, Express.js for the backend, and also incorporates the Redux library.',
    tags: ['React Vite', 'Tailwind', 'Express JS', 'Redux'],
    imageUrl: togetherboost,
    url: 'https://togetherboost.vercel.app',
    githubUrl: 'https://github.com/chndrwali/capstone-fe',
  },
  {
    title: 'Recycle Waste Wisely',
    description:
      'This website is the final project of the Certified Internship and Independent Study at Orbit Future Academy Batch 5. The project is specifically designed for an automated waste classification website. It is built using React Vite for the frontend, Tailwind CSS for styling, and TensorFlow.js for loading data from the model.',
    tags: ['React Vite', 'Tailwind', 'Python', 'TensorFlow JS'],
    imageUrl: rewwis,
    url: 'https://rewwis.vercel.app',
    githubUrl: 'https://github.com/chndrwali/PengelolaSampahMasyarakat',
  },
  {
    title: 'Twitwar Forum',
    description:
      'As a final submission for the "Becoming a React Web Developer Expert" class, this website is constructed using React Vite, Tailwind CSS, and Redux. It effectively harnesses APIs provided by Dicoding Indonesia, showcasing the skills acquired throughout the course.',
    tags: ['React Vite', 'Tailwind', 'Redux'],
    imageUrl: twitwar,
    url: 'https://twitwar-forum.vercel.app/',
    githubUrl: 'https://github.com/chndrwali/twitwar-forum',
  },
  {
    title: 'Candra Food',
    description:
      'The completion of the "Becoming a Front End Web Developer Expert" class is marked by this websites final submission. The project is crafted using JavaScript, embracing Progressive Web App principles, and showcasing meticulous CSS. It also maximizes the use of APIs made available by Dicoding Indonesia.',
    tags: ['PWA', 'CSS', 'JavaScript', 'E2E'],
    imageUrl: candrafood,
    url: 'https://candrafood-pwa.vercel.app/',
    githubUrl: 'https://github.com/chndrwali/restaurant-catalogueWPA',
  },
] as const;

export const certificatesData = [
  {
    title: 'Menjadi Front End Web Developer Expert',
    description: 'Successfully completed the final project, which is a restaurant catalog web app with a good user experience and functionality when accessed on mobile devices.',
    tags: ['Dicoding', 'Jest', 'PWA', 'E2E'],
    imageUrl: frontend,
    url: 'https://www.dicoding.com/certificates/72ZD8YVQ9ZYW',
  },
  {
    title: 'Belajar Fundamental Front-End Web Developer',
    description: 'Successfully built a web application using JavaScript ES6, Web Components, Webpack as the module bundler, and displayed data from a REST API.',
    tags: ['Dicoding', 'API', 'ES6', 'Webpack'],
    imageUrl: fundamental,
    url: 'https://www.dicoding.com/certificates/MEPJV5OJQP3V',
  },
  {
    title: 'Menjadi React Web Developer Expert',
    description: 'Successfully completed the final project, which is a discussion web forum built using React Vite and is responsive on mobile devices.',
    tags: ['Dicoding', 'Indonesia', 'React', 'Expert'],
    imageUrl: reactexpert,
    url: 'https://www.dicoding.com/certificates/MRZMQRYJLPYQ',
  },
  {
    title: 'Sertifikat Kelulusan Dicoding',
    description: 'Successfully completed the Front-End Web and Back-End Training in the Dicoding X Kampus Merdeka Angkatan 3 SIB Program.',
    tags: ['Dicoding', 'Indonesia', 'MSIB', 'Cycle 4'],
    imageUrl: kelulusandicoding,
    url: 'https://www.linkedin.com/in/chndrwali/details/certifications/1635541981815/single-media-viewer/?profileId=ACoAADVInc4B_JHLHqbVHb8NC7oF3-SuA6Oom8k',
  },
  {
    title: 'Belajar Pengembangan Machine Learning',
    description: 'Successfully trained three datasets, namely text classification, time series, and image classification, using Google Colab and several machine learning libraries.',
    tags: ['Dicoding', 'Indonesia', 'Machine', 'Learning'],
    imageUrl: ml,
    url: 'https://www.dicoding.com/certificates/L4PQQ456VPO1',
  },
  {
    title: 'Certified Developer Alibaba Cloud',
    description: 'Successfully registered as a DevHandal participant and completed the class on creating a blog on the Alibaba-owned AWS Cloud platform.',
    tags: ['Alibaba', 'Cloud', 'Developer', 'AWS'],
    imageUrl: alibabacloud,
    url: 'https://www.linkedin.com/in/chndrwali/details/certifications/1635548464440/single-media-viewer/?profileId=ACoAADVInc4B_JHLHqbVHb8NC7oF3-SuA6Oom8k',
  },
] as const;

export const modelsData = [
  {
    title: 'Submission Dicoding ',
    description: 'Successfully trained a dataset of images with 6 classes, achieving an accuracy of 95%, and a validation accuracy of 85%.',
    tags: ['Machine', 'Transfer', 'Learning', 'Dicoding'],
    imageUrl: modeldicoding,
    url: 'https://github.com/chndrwali/Submission-ML-3-ImageClassification-Deployment',
  },
  {
    title: 'Model Image Classification 12 Classes',
    description: 'Successfully trained a dataset with 12 classes using the MobileNetV2 architecture and converted it into a TensorFlow.js model with an accuracy of 97%.',
    tags: ['Orbit', 'Model', 'Final', 'Project'],
    imageUrl: modelorbit,
    url: 'https://github.com/chndrwali/model-klasifikasi-orbit',
  },
] as const;

export const skillsData = [
  {
    id: 0,
    name: 'Python',
    type: 'Programming Language',
    imageUrl: python,
    url: 'https://www.python.org/',
  },
  {
    id: 1,
    name: 'TensorFlow',
    type: 'Machine Learning Library',
    imageUrl: tensorflow,
    url: 'https://www.tensorflow.org/',
  },
  {
    id: 2,
    name: 'TensorFlow.js',
    type: 'Machine Learning Library',
    imageUrl: tensorflowjs,
    url: 'https://www.tensorflow.org/js',
  },
  {
    id: 3,
    name: 'Keras',
    type: 'Deep Learning Library',
    imageUrl: keras,
    url: 'https://keras.io/',
  },
  {
    id: 4,
    name: 'JavaScript',
    type: 'Programming Language',
    imageUrl: javascript,
    url: 'https://www.javascript.com/',
  },
  {
    id: 5,
    name: 'React',
    type: 'Front-End Library',
    imageUrl: react,
    url: 'https://reactjs.org/',
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    type: 'CSS Framework',
    imageUrl: tailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    id: 7,
    name: 'NPM',
    type: 'Package Manager',
    imageUrl: npm,
    url: 'https://www.npmjs.com/',
  },
  {
    id: 8,
    name: 'Git',
    type: 'Version Control',
    imageUrl: git,
    url: 'https://git-scm.com/',
  },
  {
    id: 9,
    name: 'GitHub',
    type: 'Version Control Hosting',
    imageUrl: github,
    url: 'https://github.com',
  },
  {
    id: 10,
    name: 'Vercel',
    type: 'Cloud Platform',
    imageUrl: vercel,
    url: 'https://vercel.com/',
  },
  {
    id: 11,
    name: 'Kaggle',
    type: 'Dataset Platform',
    imageUrl: kaggle,
    url: 'https://www.kaggle.com/',
  },
  {
    id: 12,
    name: 'Google Colab',
    type: 'Notebook IDE',
    imageUrl: googlecolab,
    url: 'https://colab.research.google.com/',
  },
  {
    id: 13,
    name: 'Visual Studio Code',
    type: 'IDE',
    imageUrl: vscode,
    url: 'https://code.visualstudio.com/',
  },
  {
    id: 14,
    name: 'Figma',
    type: 'Design Tool',
    imageUrl: figma,
    url: 'https://www.figma.com/',
  },
] as const;

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
