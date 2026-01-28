import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const MaskText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className="overflow-hidden relative inline-block align-top">
            <motion.div
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : { y: "110%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col justify-center bg-obsidian pt-24 md:pt-0">

            {/* Background - kept subtle and dark */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 opacity-40 select-none"
            >
                {/* Abstract/Architectural B&W image */}
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale brightness-50"
                />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col h-full justify-center">

                {/* Wonjyou Style: Giant Typography */}
                <div className="flex flex-col font-sans font-medium uppercase leading-[0.8] tracking-tighter text-ivory mix-blend-difference select-none">
                    <div className="text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] flex items-center overflow-hidden">
                        <MaskText delay={0.1}>Precisión</MaskText>
                    </div>
                    <div className="text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] flex items-center gap-4 md:gap-8 overflow-hidden">
                        <MaskText delay={0.2}>Financiera</MaskText>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="w-[10vw] h-[10vw] md:w-32 md:h-32 rounded-full border border-gold/50 flex items-center justify-center mt-2 md:mt-6"
                        >
                            <span className="text-xs md:text-sm font-serif italic text-gold lowercase tracking-normal text-center px-2">e. 2024</span>
                        </motion.div>
                    </div>
                    <div className="text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] text-gold/80 flex items-center overflow-hidden">
                        <MaskText delay={0.3}>Global</MaskText>
                    </div>
                </div>

                <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="max-w-md"
                    >
                        <p className="font-sans text-sm md:text-base text-gray-400 font-light tracking-wide leading-relaxed">
                            Consultoría Fiscal y Contable para el Mercado Moderno. <br />
                            Transformamos la incertidumbre en ventaja competitiva.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="hidden md:block"
                    >
                        <span className="font-serif italic text-gold text-lg">Scroll to explore</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
