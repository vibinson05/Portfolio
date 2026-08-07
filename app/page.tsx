import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Practice from "./components/Practice";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-0">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      
      <section id="experience">
        <Experience />
      </section> 

      <section id="certifications">
        <Certification/>
      </section> 

      <section id="projects">
        <Projects />
      </section> 

      <section id="practice">
        <Practice />
      </section> 

      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section> 

      <section id="footer">
        <Footer />
      </section> 
    </main>
  );
}