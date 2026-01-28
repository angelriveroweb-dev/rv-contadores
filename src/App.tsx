import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import Hero from './components/Hero';
import InteractiveList from './components/InteractiveList';
import AboutUs from './components/AboutUs';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 }; // Adjusted for smooth feel
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for clickable elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover' || // support explicit hover
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver); // Use mouseover to detect hover on elements

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
  return (
    <div className="bg-obsidian min-h-screen text-ivory selection:bg-gold selection:text-black font-sans relative">
      {/* Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.07] pointer-events-none z-[50]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')"
        }}
      ></div>

      <CustomCursor />

      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <InteractiveList />
        <WhyUs />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
