import About from "./about/page";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Contact from "./contact/page";


export default function Home() {
  return (
    <>
      <Hero /> 
      <Projects />
      <About/>
      <Blogs />
      <Newsletter />
      <Contact/>
    </>
  );
}
