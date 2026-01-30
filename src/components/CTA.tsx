import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax or Reveal Effect for Text
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom center",
                    scrub: 1,
                },
                y: 100,
                opacity: 0.5,
                duration: 1
            });

            // Button Magnetic Effect (Simplified for now with Scale)
            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 md:py-48 bg-ivory text-obsidian relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[100px] mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10 flex flex-col items-center text-center">

                <div className="overflow-hidden mb-12">
                    <h2 ref={textRef} className="font-sans text-[12vw] md:text-[8rem] leading-[0.85] tracking-tighter font-medium uppercase text-obsidian mix-blend-darken">
                        Listo Para <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-obsidian to-gray-600">Empezar?</span>
                    </h2>
                </div>

                <div ref={buttonRef} className="group relative cursor-pointer">
                    <div className="absolute inset-0 bg-gold rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500 blur-lg opacity-40"></div>
                    <button className="relative bg-obsidian text-ivory text-xl md:text-2xl px-12 py-6 md:px-16 md:py-8 rounded-full font-sans tracking-wide uppercase flex items-center gap-4 hover:bg-black transition-colors duration-300">
                        Agenda tu Consulta
                        <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

                <div className="mt-16 max-w-lg">
                    <p className="font-serif text-xl md:text-2xl text-gray-500 italic">
                        "El primer paso hacia la solidez financiera comienza con una conversación."
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CTA;
