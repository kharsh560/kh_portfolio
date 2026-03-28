import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Achievements />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
