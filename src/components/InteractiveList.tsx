import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        // Added z-10 and relative to ensure it slides OVER the sticky AboutUs section
        <section
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

                <div className="flex flex-col w-full border-t border-white/20">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group py-16 cursor-pointer relative border-b border-white/20 hover:border-white transition-colors duration-500"
                        >
                            <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 relative z-10 w-full px-2">
                                <div className="flex items-baseline gap-12 w-full md:w-auto">
                                    <span className="text-white/50 font-mono text-sm">0{index + 1}</span>
                                    <h3 className={`text-3xl md:text-5xl lg:text-7xl font-sans tracking-tight font-medium transition-all duration-500 ${hoveredIndex === index ? 'text-white translate-x-4' : 'text-gray-400'}`}>
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description Text appearing on hover in desktop layout */}
                                <div className="hidden md:block w-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-base text-gray-200 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Description (Always visible on mobile for accessibility) */}
                            <div className="md:hidden mt-6 overflow-hidden">
                                <p className="text-base text-gray-300 leading-relaxed pl-0 opacity-80">
                                    {service.description}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Image Cursor Follower */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            x: mousePos.x - 150,
                            y: mousePos.y - 200
                        }}
                        exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
                        className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-50 hidden md:block"
                    >
                        <div className="w-full h-full relative overflow-hidden bg-gray-900 border border-white/10">
                            <img
                                src={SERVICES[hoveredIndex].img}
                                alt="Service Preview"
                                className="w-full h-full object-cover grayscale opacity-90 contrast-125"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InteractiveList;
