import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Scene";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="h-[100dvh] snap-center no-scrollbar p-4 md:p-6"
      >
        <Header />
        <div className="h-[75dvh] w-[90%] mx-auto flex flex-col-reverse justify-around md:flex md:flex-row md:items-center">
          <div id="hero-content" className="max-w-[500px] mx-auto md:w-[50%]">
            <h2 className="text-2xl font-semibold mb-2">Frontend Developer</h2>
            <p className="text-md mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between space-x-2  font-medium">
              <a href="#contact" className="flex-1">
                <button className="border-2 border-white px-3 py-3 w-full">
                  Get in touch
                </button>
              </a>
              <a href="#contact" className="flex-1">
                <button className="border-2 border-white px-3 py-3 w-full bg-white text-black">
                  View work
                </button>
              </a>
            </div>
          </div>
          <div id="scroll-animation" className="fixed bottom-[80px]">
            <a href="#about">
              {/* Scroll Animation: Only visible on tablet & desktop */}
              <div className="hidden md:flex w-[30px] h-[60px] rounded-3xl border-4 border-secondary justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1 bg-white"
                />
              </div>
            </a>
          </div>
          <div id="model" className="h-[300px] md:h-[380px] xl:h-[500px] md:w-[50%]">
            <Canvas>
              <ambientLight color={0xfffff} intensity={20} />
              <Model />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
