import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBg from "./components/ParticleBg";

const App = () => {
  return (
    <>
      <main className="h-[100dvh] snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar">
        <ParticleBg />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};


export default App;
