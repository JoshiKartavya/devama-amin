"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip overflow-x-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <About />
        <Services />
        <Experience />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
