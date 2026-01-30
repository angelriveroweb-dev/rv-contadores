import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        id: "01",
        title: "Planeación Fiscal",
        description: "Tiene como finalidad colocar a su negocio en la mejor situación que la ley prevea, optimizando recursos y cumpliendo con requerimientos. La planeación en sí misma no implica un riesgo, sino por el contrario, lo evita: da seguridad fijando el rumbo con certidumbre y aprovechando beneficios legales.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Impuestos",
        description: "Hacemos, revisamos y presentamos oportunamente impuestos federales y estatales. Desde ISR e IVA, hasta Facturación Electrónica, cálculos de IMSS, Nómina y cualquier otra carga tributaria. Su contabilidad, exacta y puntual.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Trámites Fiscales",
        description: "Gestión integral ante instituciones gubernamentales: Inscripción en el RFC, aclaración de multas y requerimientos, devoluciones, compensaciones, cambios de domicilio y actualizaciones de información.",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Asesoría Emprendedores",
        description: "Asesoría integral desde la idea hasta la puesta en marcha. Abarcamos factibilidad económica, operativa y legal, estrategia fiscal e implementación de procesos para que su negocio nazca sólido.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    }
];

const InteractiveList: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const componentRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const xTo = useRef<gsap.QuickToFunc | null>(null);
    const yTo = useRef<gsap.QuickToFunc | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Scroll Trigger Animation for List Items
            const items = gsap.utils.toArray('.service-item');

            gsap.from(items, {
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Cursor setup
            if (cursorRef.current) {
                xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" });
                yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" });
            }

        }, componentRef);
        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (xTo.current && yTo.current) {
            xTo.current(e.clientX);
            yTo.current(e.clientY);
        }
    };

    return (
        <section
            ref={componentRef}
            id="services"
            className="py-32 bg-black relative overflow-hidden z-10 rounded-t-[3rem] shadow-2xl"
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-4 md:px-8 relative z-20">

                {/* Header Minimalista */}
                <div className="flex flex-col mb-24 items-start">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/60 mb-4 ml-1">Nuestra Expertise</span>
                    <h2 className="font-sans text-6xl md:text-8xl font-medium text-white tracking-tighter">
                        Soluciones <span className="text-gray-400">Integrales</span>
                    </h2>
                </div>

                {/* CSS-only focus effect using group-hover logic on parent */}
                <div
                    ref={listRef}
                    className="flex flex-col w-full border-t border-white/20 group/list"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className="service-item group/item py-12 md:py-16 cursor-pointer relative border-b border-white/20 hover:border-white transition-all duration-500 hover:!opacity-100 md:group-hover/list:opacity-40"
                            onMouseEnter={() => setHoveredIndex(index)}
                        >
                            <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 relative z-10 w-full px-2">
                                <div className="flex items-baseline gap-12 w-full md:w-auto">
                                    <span className="text-white/50 font-mono text-sm">0{index + 1}</span>
                                    <h3 className={`text-3xl md:text-5xl lg:text-7xl font-sans tracking-tight font-medium transition-all duration-500 ${hoveredIndex === index ? 'text-white translate-x-4' : 'text-gray-400'}`}>
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description Text appearing on hover in desktop layout */}
                                <div className="hidden md:block w-1/3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                                    <p className="text-base text-gray-200 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Description */}
                            <div className="md:hidden mt-4 overflow-hidden">
                                <p className="text-sm text-gray-300 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Image Cursor Follower via GSAP */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-50 hidden md:block rounded- overflow-hidden"
                style={{
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 0,
                    top: 0, left: 0
                }}
            >
                {/* Inner scaler for show/hide effect */}
                <div
                    className={`w-full h-full transition-all duration-500 transform ${hoveredIndex !== null ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                >
                    {hoveredIndex !== null && (
                        <img
                            src={SERVICES[hoveredIndex].img}
                            alt="Service Preview"
                            className="w-full h-full object-cover grayscale opacity-90 contrast-125"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default InteractiveList;
