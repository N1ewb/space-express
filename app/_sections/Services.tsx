import Image from "next/image";
import React from "react";

import rapidShuttle from "../../images/Vector.png";
import spaceTOspace from "../../images/image 263.png";
import spaceChartering from "../../images/space-chartering.png";

import Vector11 from "../../images/Vector 11.png";
import Vector12 from "../../images/Vector 12.png";
import Vector13 from "../../images/Vector 13.png";

const Services = () => {
  return (
    <section className="w-full h-auto flex flex-col [&_h1]:text-[48px] [&_h1]:font-bold [&_p]:text-[#161616] bg-white items-center py-40">
      <header className="w-full text-center [&_p]:text-[20px] ">
        <h1>OUR SERVICES</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          id tincidunt libero. <br /> Interdum et malesuada fames ac ante ipsum
          primis in faucibus
        </p>
      </header>
      <main className="w-full [&_p]:text-[32px] flex flex-row flex-wrap justify-between px-20 py-40">
        <div className="service-container py-10 relative flex flex-col items-center gap-20 w-[40%]">
          <Image
            className="absolute top-0 left-0"
            src={Vector11}
            alt="vectors"
            width={1080}
          />
          <h1>RAPID SHUTTLE SERVICES</h1>
          <Image
            className="z-20"
            src={rapidShuttle}
            alt="shuttle"
            height={255}
            width={256}
          />
          <p>
            Quick and frequent transfers between popular planetary destinations,
            allowing spontaneous travelers to hop on and off easily.
          </p>
        </div>
        <div className="spacer py-10 relative basis-[60%] h-auto flex fle-row items-center justify-start">
          <div className="absolute z-0 top-1/2 h-[50%] w-[68%] border-t-[2px] border-r-[2px] border-[#52145A] border-dashed border-tl-custom"></div>
        </div>
        <div className="spacer py-10 relative basis-[50%] flex items-center justify-end">
        <div className="absolute z-0 top-1/2 -right-3 h-[51%] w-[56%] border-t-[2px] border-l-[2px] border-[#52145A] border-dashed border-tl-custom"></div>
        </div>
        <div className="service-container py-10 relative flex flex-col items-center gap-20 w-[50%]">
          <Image
            className="absolute top-0 left-0"
            src={Vector13}
            alt="vectors"
            width={1080}
          />
          <h1>
            SPACEPORT-TO-SPACEPORT <br /> TRANSPORTATION
          </h1>
          <Image
            className="z-20"
            src={spaceTOspace}
            alt="shuttle"
            height={514}
            width={500}
          />
          <p>
            Scheduled trips between major spaceports designed for reliability
            and punctuality, ensuring seamless travel across the galaxy.
          </p>
        </div>
        <div className="service-container py-10 relative flex flex-col items-center gap-20 w-[60%]">
          <Image
            className="absolute top-0 left-0"
            src={Vector12}
            alt="vectors"
            width={880}
          />
          <h1>CUSTOM SPACECRAFT CHARTERING</h1>
          <Image
            className="z-20"
            src={spaceChartering}
            alt="shuttle"
            height={396}
            width={396}
          />
          <p>
            Personalized, on-demand space travel tailored to your unique needs,
            providing an exclusive and luxurious journey through the stars.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Services;
