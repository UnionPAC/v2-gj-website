import { Html, useProgress } from "@react-three/drei";

const PercentageLoader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

export default PercentageLoader;
