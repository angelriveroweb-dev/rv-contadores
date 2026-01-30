import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const componentRef = useRef<HTMLElement>(null);
    const textRef1 = useRef<HTMLDivElement>(null);
    const textRef2 = useRef<HTMLDivElement>(null);
    const textRef3 = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Split Text
            const split1 = new SplitType(textRef1.current!, { types: 'lines', lineClass: 'overflow-hidden' });
            const split2 = new SplitType(textRef2.current!, { types: 'lines', lineClass: 'overflow-hidden' });
            const split3 = new SplitType(textRef3.current!, { types: 'lines', lineClass: 'overflow-hidden' });

            const lines = [
                ...split1.lines || [],
                ...split2.lines || [],
                ...split3.lines || []
            ];

            // Animate Text Lines
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Desktop
                gsap.from(lines, {
                    y: "100%",
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "power4.out",
                    delay: 0.2
                });
            });

            mm.add("(max-width: 767px)", () => {
                // Mobile
                gsap.from(lines, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power2.out"
                });
            });

            // Restore missing animations for Description & CTA
            gsap.to(".hero-text", {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.8,
                ease: "power3.out"
            });

            gsap.to(".hero-scroll", {
                opacity: 1,
                duration: 1,
                delay: 1.2,
                ease: "power3.out"
            });

            gsap.to(".hero-badge", {
                scale: 1,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "elastic.out(1, 0.5)"
            });


        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={componentRef} className="relative w-full min-h-[110vh] overflow-hidden flex flex-col justify-start pt-32 md:pt-48 bg-obsidian">

            {/* Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1506787497326-c2736dde1bef?q=80&w=2400&auto=format&fit=crop"
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale opacity-50 brightness-75"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col h-full max-w-[1280px]">

                {/* Typography */}
                <div className="flex flex-col font-sans font-medium uppercase leading-[0.85] tracking-tighter text-white mix-blend-normal select-none relative z-30">
                    <div ref={textRef1} className="text-[11vw] md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] flex items-center">
                        Precisión
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                        <div ref={textRef2} className="text-[11vw] md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem]">
                            Financiera
                        </div>
                        {/* Animated Badge */}
                        <div className="hero-badge w-[10vw] h-[10vw] md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border border-white/30 flex items-center justify-center mt-2 md:mt-4 bg-black/50 backdrop-blur-sm opacity-0 scale-0">
                            <span className="text-[0.6rem] md:text-xs lg:text-sm font-serif italic text-gold lowercase tracking-normal text-center px-2">e. 2026</span>
                        </div>
                    </div>
                    <div ref={textRef3} className="text-[11vw] md:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem] text-gray-400 flex items-center">
                        Global
                    </div>
                </div>

                {/* Creative Separator & Bottom Section */}
                {/* z-index 50 ensures it's above everything else */}
                <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 relative z-50 pb-24">

                    {/* Decorative Vertical Line */}
                    <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-gold to-transparent hidden md:block"></div>

                    <div className="flex flex-col gap-8 max-w-xl hero-text opacity-0 translate-y-4">
                        <p className="font-sans text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed">
                            Estrategias fiscales de precisión para empresas que desafían el status quo.
                            <span className="block mt-2 text-white/80">Potenciamos su patrimonio con una arquitectura financiera blindada.</span>
                        </p>

                        <button className="group w-fit flex items-center gap-4 text-white hover:text-gold transition-colors duration-300 cursor-pointer pointer-events-auto">
                            <span className="uppercase tracking-[0.2em] text-sm border-b border-white/30 pb-1 group-hover:border-gold transition-colors">Descubrir Potencial</span>
                            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform duration-300">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div className="hidden md:flex flex-col items-end gap-2 hero-scroll opacity-0">
                        <div className="w-px h-12 bg-white/20 mb-2"></div>
                        <span className="font-serif italic text-white/50 text-sm tracking-wider">Scroll to explore</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
