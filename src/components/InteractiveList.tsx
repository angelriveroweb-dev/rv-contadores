import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SERVICES = [
    {
        title: "Planeación Fiscal",
        description: "Colocamos a su negocio en la mejor situación que la ley prevea, con el propósito de optimizar recursos y cumplir correctamente con los requerimientos fiscales. Aprovechamos todos los beneficios que ofrece la ley para evitar pagos innecesarios de impuestos.",
        img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Impuestos",
        description: "Realizamos, revisamos y presentamos oportunamente impuestos federales y estatales, incluyendo ISR, IVA, facturación electrónica, cálculo de IMSS, nómina y cualquier otra carga tributaria aplicable.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Trámites Fiscales",
        description: "Gestión integral de trámites ante instituciones gubernamentales: RFC, cambios de domicilio fiscal, actualizaciones, aclaraciones, devoluciones, compensaciones y declaraciones informativas.",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Asesoría para Emprendedores",
        description: "Acompañamos su negocio desde la idea hasta la puesta en marcha, abarcando factibilidad económica, operativa y legal, estrategia fiscal, implementación de procesos y arranque operativo.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    }
];

const InteractiveList: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Calculate relative position? Or fixed to viewport?
        // Using clientX/Y for fixed behavior is easier for cursor follower
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section
            id="services"
            className="py-32 bg-obsidian relative overflow-hidden"
            onMouseMove={handleMouseMove}
            ref={containerRef}
        >
            <div className="container mx-auto px-6 relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl text-ivory mb-20 text-center"
                >
                    Nuestros <span className="text-gold italic">Servicios</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto flex flex-col">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group border-b border-white/10 py-10 cursor-pointer transition-colors duration-500 hover:border-gold/50"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className={`text-3xl md:text-4xl transition-all duration-500 ${hoveredIndex === index ? 'font-serif italic text-gold translate-x-4' : 'font-serif text-white'}`}>
                                    {service.title}
                                </h3>
                                <ArrowUpRight className={`text-gray-500 transition-all duration-500 ${hoveredIndex === index ? 'text-gold rotate-45 scale-110' : ''}`} />
                            </div>

                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="mt-6 font-sans text-gray-400 text-lg leading-relaxed max-w-2xl pl-4 border-l-2 border-gold/50">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating Image Cursor Follower */}
            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: mousePos.x - 200, // Center width
                            y: mousePos.y - 150  // Center height
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        className="fixed top-0 left-0 w-[400px] h-[300px] pointer-events-none z-50 hidden md:block rounded-sm overflow-hidden border border-gold/20"
                    >
                        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10"></div>
                        <img
                            src={SERVICES[hoveredIndex].img}
                            alt="Service Preview"
                            className="w-full h-full object-cover grayscale brightness-90"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InteractiveList;
