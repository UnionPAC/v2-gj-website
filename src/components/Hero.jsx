import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Scene";

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-content">
        <h2>Frontend Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor
          sit amet consectetur adipisicing elit.
        </p>
        <div>
          <a href="#contact">
            <button>Get in touch</button>
          </a>
          <a href="#contact">
            <button>View work</button>
          </a>
        </div>
      </div>
      <div id="scroll-animation">
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
      <div id="model">
        <Canvas>
          <ambientLight color={0xfffff} intensity={20} />
          <Model />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
