import Image from "next/image";

import subLogo from "../../images/space-express-sub-logo.png";

import camera from "../../images/camera.png";
import wheels from "../../images/wheels.png";
import secure from "../../images/secure.png";

import earth from "../../images/Pexels Photo by Pixabay.png";

const Process = () => {
  return (
    <section className="process-container h-auto w-full">
      <div className="w-full h-auto p-20 bg-white flex flex-row justify-between [&_p]:text-[#161616]">
        <div className="col w-[40%] text-center flex flex-col gap-5 items-center">
          <h1 className="text-[24px] font-bold">
            Effortless Ticket Booking Process
          </h1>
          <p className="text-[20x] ">
            Secure your cosmic journey in just three simple steps! Browse our
            diverse ticket options, select your travel details, and finalize
            your purchase to embark on an unforgettable adventure across the
            stars with ease.
          </p>
          <button className="bg-[#52145A] px-10 py-3 text-[24px] rounded-md">
            View Steps
          </button>
        </div>
        <div className="col w-[60%] px-10 flex flex-row justify-around [&_h3]:text-[20px] [&_h3]:font-bold ">
          <div className="capture flex flex-col items-center [&_p]:text-justify w-[20%]">
            <Image src={camera} alt="camera" height={98} width={98} />
            <h3>CAPTURE</h3>
            <p>
              Capture the moment and create lasting memories of your unique
              space journey.
            </p>
          </div>
          <div className="fast flex flex-col items-center w-[20%]">
            <Image src={wheels} alt="fast" height={98} width={98} />
            <h3>FAST</h3>
            <p>
              Enjoy fast and efficient travel, ensuring you arrive at your
              destination quickly.
            </p>
          </div>
          <div className="secure flex flex-col items-center w-[30%]">
            <Image src={secure} alt="secure" height={98} width={98} />
            <h3>SECURE</h3>
            <p>
              Rest assured, we prioritize your safety with top-notch security
              measures throughout your journey.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full h-auto bg-[#F0F0F0] px-44 pt-10 pb-20 items-center gap-10">
        <Image src={earth} alt="earth" height={333} width={1561} />
        <Image
          className="absolute top-[32%]"
          src={subLogo}
          alt="logo-sub"
          height={154}
          width={147}
        />
        <div className="spacer h-[20px]"></div>
        <h1 className="font-bold text-[32px]">Space Express</h1>
        
        <p className="text-[#161616] text-[24px]">
          Offers rapid shuttle services for quick, on-demand planet-to-planet
          transfers, scheduled spaceport-to-spaceport trips for seamless travel
          between major destinations, and custom spacecraft chartering for those
          seeking a personalized, luxurious space journey. Customers can expect
          fast, efficient service with minimal wait times for shuttles,
          organized and comfortable scheduled transfers, and an exclusive VIP
          experience when chartering a spacecraft, ensuring every journey is
          smooth, timely, and tailored to their needs.
        </p>
        <button className="bg-[#52145A] rounded-lg px-10 py-5 text-[24px]">Check Out The Process</button>
      </div>
    </section>
  );
};

export default Process;
