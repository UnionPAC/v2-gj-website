import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Scene";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <section id="hero" className="h-[100dvh] snap-center no-scrollbar">
        <Header />
        <div className="flex h-[80%]">
          <div className="flex flex-col flex-1 max-w-[50%] m-4 items-start justify-center">
            <div className="max-w-[70%] mx-auto">
              <h2 className="mb-14 text-5xl font-semibold">Hey! I'm Geoff 👋</h2>
              <p className="mb-8 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                blanditiis magnam omnis molestias doloremque fugiat dolorem,
                quae incidunt ducimus quibusdam.
              </p>
              <button className="border-2 px-6 py-3 active:scale-95">Get in touch</button>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <a href="#about">
              <div className="w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
          <div className="flex flex-1 max-w-[50%] m-4 justify-center items-center">
            <Canvas>
              <ambientLight color={0xfffff} intensity={20} />
              <Model />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
