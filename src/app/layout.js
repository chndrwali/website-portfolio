import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Providers from './providers';
const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Candra Wali Sanjaya | Front End Web Developer',
  author: 'Candra Wali Sanjaya',
  description: 'Selamat datang di portofolio Candra Wali Sanjaya. Temukan karya-karya saya dalam pengembangan web dan design.',
  keywords: 'portofolio, Portofolio Candra Wali Sanjaya, Candra Wali Sanjaya, desain, pengembangan web, karya, pengembang, web developer, frontend, UI/UX, admin, ',
  httpEquiv: 'Content-Type',
  content: 'text/html; charset=utf-8',
  url: 'https://chndrwali.vercel.app',
  siteName: 'Portofolio | Candra Wali Sanjaya',
  icons: {
    icon: '/icon.png',
  },
  images: [
    {
      url: 'https://chndrwali.vercel.app/logo.png',
      width: 257,
      height: 302,
      alt: 'Portofolio || Candra Wali Sanjaya',
    },
    {
      url: 'https://chndrwali.vercel.app/logo.png',
      width: 1257,
      height: 1302,
      alt: 'Portofolio || Candra Wali Sanjaya',
    },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Portofolio || Candra Wali Sanjaya',
    description: 'Selamat datang di portofolio Candra Wali Sanjaya. Temukan karya-karya saya dalam pengembangan web dan design.',
    siteId: '@chndrwali',
    creator: '@chndrwali',
    images: ['https://chndrwali.vercel.app/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          <div className="px-setting 2xl:w-3/4 m-auto overflow-hidden">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}