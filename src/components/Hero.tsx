import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const MaskText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className="overflow-hidden relative inline-block">
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-obsidian">

            {/* Cinematic Background with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian z-10"></div>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    alt="Luxury Architecture"
                    className="w-full h-full object-cover grayscale opacity-60 scale-105"
                />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">

                {/* Main Title with Mask Reveal */}
                <div className="mb-8">
                    <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-ivory tracking-tight flex flex-col items-center">
                        <MaskText delay={0.2}>Expertos en</MaskText>
                        <div className="flex gap-4 items-baseline">
                            <MaskText delay={0.3}>Asesoramiento</MaskText>
                        </div>
                        <MaskText delay={0.4}>
                            <span className="text-gold italic">Fiscal y Financiero</span>
                        </MaskText>
                    </h1>
                </div>

                {/* Subtitle with Fade Up */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="max-w-xl mx-auto mt-6"
                >
                    <h2 className="font-sans text-sm md:text-base text-ivory/70 uppercase tracking-widest mb-6">
                        Consultoría Boutique en Saltillo, México
                    </h2>
                    <p className="font-sans text-lg text-gray-400 font-light leading-relaxed">
                        Dedíquese a lo suyo mientras nosotros nos hacemos cargo de sus procesos contables, fiscales y administrativos con absoluta precisión.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col md:flex-row gap-6 mt-12"
                >
                    <a href="#contact" className="px-8 py-3 bg-gold text-obsidian font-sans font-medium uppercase tracking-wider hover:bg-white transition-colors duration-500">
                        Solicitar Asesoría
                    </a>
                    <a href="#services" className="px-8 py-3 border border-white/20 text-ivory font-sans font-medium uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-500">
                        Explorar Servicios
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
