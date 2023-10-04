import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Scene";

const Hero = () => {
  return (
    <section id="hero" className="max-w-[60em] mx-auto p-4">
      <div className="flex flex-col-reverse items-center">
        <div id="hero-content" className="text-center">
          <p className="mb-6 text-[1em] max-w-[430px]">
            A design-minded front-end software engineer focused on building
            beautiful interfaces & experiences.
          </p>
          <div className="flex flex-col-reverse">
            <a href="#contact">
              <button className="border w-full max-w-[300px] py-3 bg-white text-black">
                Get in touch
              </button>
            </a>
            <a href="#contact">
              <button className="border w-full max-w-[300px] py-3 mb-2">
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
            <ambientLight color={0xfffff} intensity={20} />
            <Model />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
