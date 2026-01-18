import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // loader duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#2f3136] text-white min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Portfolio />
      <Achievements />
      <Activities />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
