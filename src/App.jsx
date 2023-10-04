import ParticleBg from "./components/ParticleBg";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <ParticleBg />
      <main className="font-inter">
      <div className="min-h-screen">
        <Header />
        <Hero />
      </div>
      </main>
    </>
  );
};

export default App;
