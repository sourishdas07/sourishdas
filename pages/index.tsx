import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

import Projects from '@/components/Projects';
import WorkExperience from '@/components/Experience';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(25,25,25)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sourish Das</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>
    </div>
  );
};
