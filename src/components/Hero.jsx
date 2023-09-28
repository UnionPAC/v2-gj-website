import { motion } from "framer-motion";
import Header from "./Header";
import Orb from "./Orb";

const Hero = () => {
  return (
    <>
      <section id="hero" className="h-[100dvh] snap-center no-scrollbar">
        <Header />
        <div className="flex h-[80%]">
          <div className="flex flex-col flex-1 max-w-[50%] m-4 items-start justify-center">
            <div className="max-w-[80%] mx-auto">
              <h2 className="mb-4">Title</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                blanditiis magnam omnis molestias doloremque fugiat dolorem,
                quae incidunt ducimus quibusdam, perferendis.
              </p>
              <button className="max-w-[20%]">Get in touch</button>
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
            <Orb />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
