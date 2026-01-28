import React from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
    {
        name: "Carlos Garay",
        company: "Taquería",
        text: "“Trabajar con el Despacho RV nos permitió poner en orden nuestros problemas fiscales evitando multas y requerimientos.”"
    },
    {
        name: "Diego Treviño",
        company: "Opinión Agro",
        text: "“Despacho RV nos ayudó a determinar y cumplir con nuestros objetivos fiscales.”"
    },
    {
        name: "Jorge Segundo",
        company: "Home Credit",
        text: "“La asesoría de Despacho RV me ha permitido crear y hacer crecer varios negocios con seguridad fiscal y contable.”"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 bg-obsidian">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="font-serif text-3xl text-gray-400 mb-20 text-center tracking-widest uppercase text-xs"
                >
                    Voces de Confianza
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {TESTIMONIALS.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="flex flex-col items-center text-center p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-sm hover:border-gold/30 transition-colors duration-500"
                        >
                            <p className="font-serif text-xl md:text-2xl text-ivory italic leading-relaxed mb-6">
                                {t.text}
                            </p>
                            <div className="mt-auto">
                                <p className="font-sans text-gold font-medium uppercase tracking-wider text-xs">{t.name}</p>
                                <p className="font-sans text-gray-500 text-xs mt-1">{t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
