import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax or reveal effect based on scroll
    // Parallax or reveal effect based on scroll
    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="about" className="min-h-screen bg-ivory text-obsidian flex items-center justify-center py-24">
            <div className="container mx-auto px-6 relative">
                <motion.div
                    style={{ opacity }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <span className="font-sans text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 block">
                        Nuestra Filosofía
                    </span>

                    <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                        <span className="block mb-4">En un entorno fiscal complejo,</span>
                        <span className="block mb-4 text-gray-500">transformamos la incertidumbre</span>
                        <span className="block mb-4">en <strong className="font-medium text-obsidian">ventaja competitiva.</strong></span>
                        <span className="block mt-12 text-3xl md:text-5xl lg:text-5xl text-gold font-serif italic">
                            Su patrimonio, blindado y optimizado.
                        </span>
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
