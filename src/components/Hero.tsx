import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-obsidian">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian z-10"></div>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    alt="Luxury Architecture"
                    className="w-full h-full object-cover grayscale opacity-60"
                />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                >
                    <h1 className="font-serif text-5xl md:text-8xl leading-[1.1] text-ivory tracking-tight mb-6">
                        Expertos en Asesoramiento <br />
                        <span className="text-gold italic">Fiscal y Financiero</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="font-sans text-lg md:text-xl text-ivory/80 mb-4 font-light">
                        Así como usted es experto en su negocio, nosotros somos especialistas en el área fiscal, contable y financiera.
                    </h2>
                    <p className="font-sans text-base text-gray-500 mb-10 tracking-wide">
                        Dedíquese a lo suyo mientras nosotros nos hacemos cargo de sus procesos contables, fiscales y administrativos.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <a href="#contact" className="px-8 py-3 bg-gold text-obsidian font-sans font-medium hover:bg-white transition-colors duration-300">
                        Solicitar Asesoría
                    </a>
                    <a href="#services" className="px-8 py-3 border border-white/20 text-ivory font-sans font-medium hover:border-gold hover:text-gold transition-colors duration-300">
                        Conocer Servicios
                    </a>
                </motion.div>

            </div>

            {/* Noise Overlay is global in index.css */}
        </section>
    );
};

export default Hero;
