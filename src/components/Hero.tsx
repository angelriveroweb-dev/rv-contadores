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
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1506787497326-c2736dde1bef?q=80&w=392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale opacity-40 brightness-50 mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 flex flex-col h-full justify-center">

                {/* Typography */}
                <div className="flex flex-col font-sans font-medium uppercase leading-[0.8] tracking-tighter text-white mix-blend-normal select-none relative z-30">
                    <div ref={textRef1} className="text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] flex items-center">
                        Precisión
                    </div>
                    <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
                        <div ref={textRef2} className="text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem]">
                            Financiera
                        </div>
                        {/* Animated Badge */}
                        <div className="hero-badge w-[10vw] h-[10vw] md:w-32 md:h-32 rounded-full border border-white/30 flex items-center justify-center mt-2 md:mt-6 bg-black/50 backdrop-blur-sm opacity-0 scale-0">
                            <span className="text-xs md:text-sm font-serif italic text-gold lowercase tracking-normal text-center px-2">e. 2024</span>
                        </div>
                    </div>
                    <div ref={textRef3} className="text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] text-gray-400 flex items-center">
                        Global
                    </div>
                </div>

                <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-6">
                    <div className="max-w-md hero-text opacity-0 translate-y-4">
                        <p className="font-sans text-sm md:text-base text-gray-300 font-light tracking-wide leading-relaxed">
                            Consultoría Fiscal y Contable para el Mercado Moderno. <br />
                            Transformamos la incertidumbre en ventaja competitiva.
                        </p>
                    </div>

                    <div className="hidden md:block hero-scroll opacity-0">
                        <span className="font-serif italic text-white/50 text-lg">Scroll to explore</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
