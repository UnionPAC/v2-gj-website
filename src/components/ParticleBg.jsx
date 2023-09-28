import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const options = useMemo(() => {
    return {};
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBg;
