import Header from './header';
import Contact from './contact';
import Project from './project';
import AboutMe from './about';
import Skills from './skills';

export const metadata = {
  title: 'Candra Wali Sanjaya | Front End Developer',
  description: 'Selamat datang di portofolio Candra Wali Sanjaya. Temukan karya-karya saya dalam pengembangan web dan design.',
  keywords: 'portoflio, Candra Wali Sanjaya, desain, developer web, machine learning developer, pengembang, web developer, frontend, UI/UX, python, ',
};

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20 py-10 ">
      <Header />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}