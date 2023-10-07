import ParticleBg from "./components/ParticleBg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ParticleBg />
      <main className="font-inter">
        <div className="min-h-screen">
          <Header />
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
