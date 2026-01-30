import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                // Pinning logic for Desktop
                ScrollTrigger.create({
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: ".pin-target",
                    pinSpacing: false,
                    scrub: true,
                    // markers: true 
                });

                // Parallax text effect handled by simple scrolling or additional tweens
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="about" className="bg-ivory text-obsidian relative z-0">
            {/* Desktop Layout: Split Pin */}
            <div ref={triggerRef} className="hidden lg:flex min-h-[150vh] relative max-w-[1280px] mx-auto">
                {/* Left (Pinned) */}
                <div className="w-1/2 h-screen flex flex-col justify-center px-16 pin-target sticky top-0">
                    <span className="font-sans text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 block">
                        Tradición y Vanguardia
                    </span>
                    <h2 className="font-sans text-7xl font-light leading-tight tracking-tight">
                        <span className="block text-gray-400">Transformamos</span>
                        <strong className="block text-obsidian">La Incertidumbre</strong>
                    </h2>
                </div>

                {/* Right (Scrolling) */}
                <div className="w-1/2 ml-auto pt-[50vh] pb-[20vh] px-16">
                    <div ref={textRef} className="space-y-12">
                        <p className="text-2xl font-light leading-relaxed text-gray-600">
                            En un entorno fiscal complejo, nuestra misión es brindar claridad.
                            Analizamos cada variable para constituir una estrategia sólida que proteja su patrimonio.
                        </p>
                        <p className="text-2xl font-light leading-relaxed text-gray-600">
                            Integramos metodologías tradicionales con herramientas digitales de vanguardia,
                            asegurando que su contabilidad no solo cumpla, sino que impulse su crecimiento.
                        </p>
                        <blockquote className="text-4xl font-serif italic text-gold pt-12 border-t border-gray-200">
                            "Su patrimonio, blindado y optimizado."
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Mobile Layout: Stacked */}
            <div className="lg:hidden py-24 px-6 flex flex-col gap-12 text-center">
                <div className="flex flex-col gap-4">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-gray-400">
                        Tradición y Vanguardia
                    </span>
                    <h2 className="font-sans text-5xl font-light leading-none tracking-tight">
                        Transformamos <br /> <strong className="text-obsidian">La Incertidumbre</strong>
                    </h2>
                </div>
                <div className="space-y-8 text-lg font-light text-gray-600">
                    <p>
                        En un entorno fiscal complejo, nuestra misión es brindar claridad.
                        Analizamos cada variable para constituir una estrategia sólida.
                    </p>
                    <p className="text-2xl font-serif italic text-gold">
                        "Su patrimonio, blindado y optimizado."
                    </p>
                </div>
            </div>

            {/* Placeholder for spacer logic of correct footer reveal? 
                Actually, the Footer fixes need to be applied in Footer.tsx and maybe App.tsx structure 
             */}
        </section>
    );
};

export default AboutUs;
