import Image from "next/image";
import planet1 from "../../images/planet1.png";
import planet2 from "../../images/planet2.png";
import planet3 from "../../images/planet3.png";

import gaze from "../../images/Pexels Photo by Philippe Donn.png";
import ship from "../../images/ship.png";

const Destinations = () => {
  return (
    <section className="h-auto w-full flex flex-col bg-white items-center">
      <header className="text-center h-auto w-full flex flex-col gap-10 pb-28">
        <h1 className="text-[36px] font-bold">Destinations</h1>
        <p className="text-[#161616] text-[24px]">
          Explore a diverse array of breathtaking planets, each offering unique
          landscapes and adventures waiting to be discovered.
        </p>
      </header>
      <main className="w-full h-auto ">
        <div className="planets w-full flex flex-row justify-between [&_img]:rounded-md p-32">
          <Image src={planet1} alt="planet1" height={530} width={518} />
          <Image src={planet2} alt="planet2" height={530} width={518} />
          <Image src={planet3} alt="planet3" height={530} width={518} />
        </div>
        <div className="row flex flex-col [&_h1]:font-bold [&_h1]:text-[48px] [&_p]:text-[#161616] [&_p]:text-[32px] gap-52">
          <div className="space-observation flex flex-row ">
            <div className="flex flex-col gap-10 w-1/2 px-20 text-justify">
              <h1 className="">Space observation</h1>

              <p>
                Embark on a journey of wonder as you gaze upon the cosmos with
                our Space Observation service. Enjoy stunning views of celestial
                bodies, including stars, planets, and galaxies, all while
                receiving insightful commentary about the universe. Whether
                you&#39;re a seasoned astronomer or a curious traveler, this
                experience allows you to connect with the vastness of space like
                never before.
              </p>
            </div>
            <div className="col w-1/2">
              <Image src={gaze} alt="gaze" height={819} width={936} />
            </div>
          </div>
          <div className="interplanetary-transport flex flex-row">
            <div className="col w-1/2">
              <Image src={ship} alt="ship" height={819} width={984} />
            </div>
            <div className="flex flex-col gap-10 w-1/2 px-20 text-justify">
              <h1 className="font-bold text-[48px]">
                Interplanetary Transport
              </h1>
              <p>
                Travel effortlessly between planets with our Interplanetary
                Transport service. Enjoy a smooth and comfortable journey as we
                provide rapid, reliable connections to various celestial
                destinations. Designed for efficiency and convenience, our
                transport options ensure you reach your next adventure in the
                cosmos swiftly and with ease.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Destinations;
