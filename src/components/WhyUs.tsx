import React from 'react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
    return (
        <section className="py-32 bg-obsidian relative border-t border-white/5">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Visual/Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative h-[600px] overflow-hidden"
                >
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
                        alt="Office"
                        className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gold/5 mix-blend-overlay"></div>
                </motion.div>

                {/* Editorial Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-12">
                        Por Qué <span className="text-gold italic">Elegirnos</span>
                    </h2>

                    <div className="space-y-12">
                        <div>
                            <p className="font-sans text-xl text-white leading-relaxed tracking-wide border-l border-gold pl-6">
                                Nuestro equipo cuenta con asesores experimentados que durante décadas han ayudado a personas y empresas a tomar decisiones acertadas sobre su patrimonio, su negocio y su futuro.
                            </p>
                        </div>

                        <div>
                            <p className="font-sans text-xl text-gray-400 leading-relaxed tracking-wide border-l border-white/20 pl-6">
                                Nuestra reputación se basa en la excelencia del servicio, el conocimiento técnico y una preocupación real por nuestros clientes.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
