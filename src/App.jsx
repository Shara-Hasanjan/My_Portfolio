import { useEffect, useState } from "react";
import MobileBlock from "./components/MobileBlock";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      {/* MOBILE BLOCK PAGE */}
      {isMobile ? (
        <MobileBlock />
      ) : (
        <>
          {/* DESKTOP ONLY UI */}
          <Cursor />
          <Navbar />
          <ScrollTop />

          <AnimatePresence>
            {loading && <Loader />}
          </AnimatePresence>

          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <Education />
              <Achievements />
              <Activities />
              <Contact />
              <Footer />
            </motion.div>
          )}
        </>
      )}
    </>
  );
}

export default App;
