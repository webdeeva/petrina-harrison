import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Timeline from "./components/Timeline";
import Advocacy from "./components/Advocacy";
import Innovation from "./components/Innovation";
import Focus from "./components/Focus";
import AboutBrief from "./components/AboutBrief";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Quote />
        <Timeline />
        <Advocacy />
        <Innovation />
        <Focus />
        <AboutBrief />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
