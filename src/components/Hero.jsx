import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Scene";
import PercentageLoader from "./PercentageLoader";

const Hero = () => {
  return (
    <section id="hero" className="max-w-[60em] mx-auto p-4">
      <div className="flex flex-col-reverse items-center">
        <div id="hero-content" className="text-center">
          <p className="mb-6 text-[1em] max-w-[430px]">
            A versatile front-end developer, currently learning more about JavaScript frameworks by building my own.
          </p>
          <div className="flex flex-col">
            <a href="#contact">
              <button className="w-full max-w-[300px] py-4 mb-3 bg-text text-black bg-white tracking-wide">
                Get in touch
              </button>
            </a>
            <a href="#projects">
              <button className="bg-background border w-full max-w-[300px] py-4 tracking-wide">
                View work
              </button>
            </a>
          </div>
        </div>
        <div
          id="model"
          className="pb-6 w-full h-[320px] md:h-[400px] lg:h-[500px] flex justify-center items-center"
        >
          <Canvas>
            <Suspense fallback={<PercentageLoader />}>
              <ambientLight color={0xfffff} intensity={20} />
              <pointLight intensity={10} />
              <Model />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
