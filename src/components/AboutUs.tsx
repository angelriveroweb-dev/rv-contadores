import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUs: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        // Sticky container for curtain effect:
        // z-0 ensures it stays behind the next section (z-10)
        // active sticky logic is applied to the section itself or we rely on z-index layering if we use fixed.
        // Better approach: This section is just normal flow, but we want the NEXT section to slide OVER it.
        // Actually, for "curtain reveal", the current section (White) should STAY (be sticky) while the next (Black) slides up.
        // OR the White section is fixed at bottom? No, standard is: White section is Sticky Top.
        <section ref={containerRef} id="about" className="sticky top-0 h-screen bg-ivory text-obsidian flex items-center justify-center -z-10 w-full mb-[50vh] md:mb-0">
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
