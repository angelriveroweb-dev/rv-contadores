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

            // Wrap lines in a parent for mask effect if needed, but SplitType acts on the element.
            // Actually, we need to animate the inner content of the line.
            // SplitType default creates lines. We can target .line

            // Desktop Animation: Lines move y: 100% -> 0%
            const lines = [
                ...split1.lines || [],
                ...split2.lines || [],
                ...split3.lines || []
            ];

            // Set initial state for lines content (we need to wrap line content or use translateY on line itself if overflow hidden is on parent, but SplitType structure avoids that complex nesting unless we wrap manually. 
            // Standard approach: Split lines. Then animate y or opacity. 
            // Prompt says: "y: 100% a y: 0% con una máscara (overflow: hidden en el padre)".
            // split-type 'lines' creates divs. We can set overflow hidden on them? No, we need a wrapper.
            // Let's use a simpler reveal: animate y and opacity, or just y if we can clip.

            // To achieve "mask" effect with SplitType:
            // The split lines behave as the mask. We need an inner element to move.
            // OR we just animate the line itself from opacity 0 / y 100?
            // "y: 100% a y: 0%".

            // Let's try animating the line directly but with a clip-path or just use `from`.

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
                // Mobile - Simple fade in
                gsap.from(lines, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power2.out"
                });
            });

        }, componentRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={componentRef} className="relative w-full h-screen overflow-hidden flex flex-col justify-center bg-obsidian pt-24 md:pt-0">

            {/* Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1506787497326-c2736dde1bef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbmFuY2lhbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale opacity-50 brightness-75 mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col h-full justify-center max-w-[1280px]">

                {/* Typography */}
                <div className="flex flex-col font-sans font-medium uppercase leading-[0.85] tracking-tighter text-white mix-blend-normal select-none relative z-30">
                    <div ref={textRef1} className="text-[12vw] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] flex items-center">
                        Precisión
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                        <div ref={textRef2} className="text-[12vw] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem]">
                            Financiera
                        </div>
                        {/* Animated Badge */}
                        <div className="hero-badge w-[10vw] h-[10vw] md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border border-white/30 flex items-center justify-center mt-2 md:mt-4 bg-black/50 backdrop-blur-sm opacity-0 scale-0">
                            <span className="text-[0.6rem] md:text-xs lg:text-sm font-serif italic text-gold lowercase tracking-normal text-center px-2">e. 2024</span>
                        </div>
                    </div>
                    <div ref={textRef3} className="text-[12vw] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] text-gray-400 flex items-center">
                        Global
                    </div>
                </div>

                {/* Creative Separator & Bottom Section */}
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 relative">

                    {/* Decorative Vertical Line */}
                    <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-gold to-transparent hidden md:block"></div>

                    <div className="flex flex-col gap-8 max-w-xl hero-text opacity-0 translate-y-4">
                        <p className="font-sans text-lg md:text-xl text-gray-300 font-light tracking-wide leading-relaxed">
                            Estrategias fiscales de precisión para empresas que desafían el status quo.
                            <span className="block mt-2 text-white/80">Potenciamos su patrimonio con una arquitectura financiera blindada.</span>
                        </p>

                        <button className="group w-fit flex items-center gap-4 text-white hover:text-gold transition-colors duration-300">
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
