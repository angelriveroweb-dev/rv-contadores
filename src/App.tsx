import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import Lenis from 'lenis'; // Import Lenis
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';
import InteractiveList from './components/InteractiveList';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const CustomCursor = () => {
  // ... (Keep existing Logic)
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-gold/80 rounded-full z-[9999] pointer-events-none hidden md:block mix-blend-exclusion"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovered ? 3 : 1,
        backgroundColor: isHovered ? '#D4AF37' : '#F5F5F5',
        opacity: isHovered ? 0.6 : 1,
      }}
    />
  );
};

function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with Framer Motion if needed, but basic RAF loop is sufficient for global scroll
  }, []);

  return (
    <div className="bg-obsidian min-h-screen text-ivory selection:bg-gold selection:text-black font-sans relative">
      {/* Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.07] pointer-events-none z-[50]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')"
        }}
      ></div>

      <CustomCursor />

      <Navbar />

      <main className="relative z-10">
        <div id="hero"><Hero /></div>
        <div id="about"><AboutUs /></div>
        <div id="services"><InteractiveList /></div>
        <WhyUs />
        <Testimonials />
        <div id="footer"><Footer /></div>
      </main>
    </div>
  );
}

export default App;
