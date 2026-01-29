import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
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
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
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

    // Resize Observer for Footer
    if (footerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setFooterHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(footerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className="bg-obsidian min-h-screen text-ivory selection:bg-gold selection:text-black font-sans relative">
      <CustomCursor />

      {/* Noise Overlay - Fixed Z-50 */}
      <div className="fixed inset-0 opacity-[0.07] pointer-events-none z-[50]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')"
        }}
      ></div>

      <WhatsAppButton />
      <Navbar />

      {/* Content Wrapper. Needs z-10 and background to cover fixed footer. Margin-bottom allows scrolling to reveal footer. */}
      <main
        className="relative z-10 bg-obsidian shadow-2xl"
        style={{ marginBottom: footerHeight }}
      >
        <div id="hero"><Hero /></div>
        <div id="about"><AboutUs /></div>
        <div id="services"><InteractiveList /></div>
        <WhyUs />
        <Testimonials />
      </main>

      {/* Fixed Footer */}
      <div ref={footerRef} className="fixed bottom-0 left-0 w-full -z-10 bg-ivory">
        <Footer />
      </div>
    </div>
  );
}

export default App;
