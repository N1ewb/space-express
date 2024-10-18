import Image from "next/image";
import bgImage from "../../images/bg-image.png";

const Hero = () => {
  return (
    <section
      className={`h-screen w-full flex flex-col justify-center p-32 relative`}
    >
      <Image
        className="absolute -z-10"
        src={bgImage}
        alt="bg-image"
        objectPosition="center"
        fill
      />
      <div className="hero-texts-container flex flex-col mb-20">
        {" "}
        <h1 className="!text-white text-[96px]">
          Your Ride to the <span className="font-bold">Stars</span>
        </h1>
        <p className="text-[28px]">
          Every Journey with us is Out of This World!
        </p>
      </div>
      <div className="buttons flex flex-row items-center gap-3 [&_button]:px-10 [&_button]:py-3 [&_button]:text-[28px] [&_button]:rounded-md">
        <button className="bg-white text-[#52145A]">
          <p>GET STARTED</p>
        </button>
        <button className="bg-transparent border-solid border-white border-2">
          <p>LEARN MORE</p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
