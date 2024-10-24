import Destinations from "./_sections/Destinations";
import Hero from "./_sections/Hero";
import Process from "./_sections/Process";
import Services from "./_sections/Services";

export default function Home() {
  return (
    <div className="app-container h-auto w-full">
      <Hero />
      <Process />
      <Destinations />
      <Services />
    </div>
  );
}
