import DarkVeil from "./DarkVeil";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <DarkVeil />
      <span className="w-full min-h-[200px] text-white absolute top-60 flex justify-center">Hero content</span>
    </div>
  );
};

export default Hero;
