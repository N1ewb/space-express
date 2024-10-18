

import Footer from "./_components/Footer";
import Destinations from "./_sections/Destinations";
import Hero from "./_sections/Hero";
import Process from "./_sections/Process";

export default function Home() {
  return (
    <div className="app-container h-auto w-full">
      <Hero />
      <Process />
      <Destinations />
      <Footer />
    </div>
  );
}
