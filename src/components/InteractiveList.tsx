import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
        <section
            id="services"
            className="py-32 bg-obsidian relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8"
                >
                    <h2 className="font-serif text-5xl md:text-7xl text-ivory">
                        Áreas de <br /><span className="text-gold italic">Experiencia</span>
                    </h2>
                    <p className="text-gray-400 font-sans max-w-sm text-right mt-6 md:mt-0">
                        Soluciones integrales diseñadas para proteger y maximizar su patrimonio.
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group border-b border-white/10 py-12 cursor-pointer transition-colors duration-500 hover:border-gold/30"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-24 relative z-10 w-full">
                                <span className="text-gold/50 font-sans text-sm tracking-widest">{service.id}</span>

                                <div className="flex-1">
                                    <h3 className={`text-4xl md:text-6xl transition-all duration-500 ${hoveredIndex === index ? 'font-serif italic text-gold translate-x-4' : 'font-serif text-white'}`}>
                                        {service.title}
                                    </h3>
                                </div>

                                <div className={`transition-transform duration-500 ${hoveredIndex === index ? 'rotate-45 translate-x-2 text-gold' : 'text-gray-500'}`}>
                                    <ArrowUpRight size={40} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden md:pl-[6rem]" // Align with title start
                                    >
                                        <p className="mt-8 font-sans text-gray-300 text-lg leading-relaxed max-w-3xl">
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
                        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            x: mousePos.x - 200,
                            y: mousePos.y - 150
                        }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="fixed top-0 left-0 w-[450px] h-[320px] pointer-events-none z-50 hidden md:block overflow-hidden"
                    >
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 border border-gold/20 z-20"></div>
                            <img
                                src={SERVICES[hoveredIndex].img}
                                alt="Service Preview"
                                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InteractiveList;
