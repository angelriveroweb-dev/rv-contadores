import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        quote: "Gracias a su estrategia fiscal, logramos optimizar nuestros recursos y expandir operaciones en tiempo récord. Su precisión es invaluable.",
        author: "Ing. Roberto Méndez",
        role: "Director General, Grupo Méndez"
    },
    {
        quote: "La tranquilidad de saber que nuestra contabilidad está en manos de expertos no tiene precio. RV Contadores es sinónimo de confianza.",
        author: "Lic. Ana Paula Torres",
        role: "Fundadora, Torres & Asociados"
    },
    {
        quote: "Un servicio boutique real. Atención personalizada, respuestas rápidas y soluciones que realmente impactan en el resultado financiero.",
        author: "Arq. Carlos Davila",
        role: "CEO, Constructora Davila"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 bg-black text-white relative">
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-24">
                    <h2 className="font-sans text-5xl md:text-7xl tracking-tighter text-white/90">
                        Voces de <span className="text-gray-500 font-serif italic">Confianza</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group"
                        >
                            <Quote className="text-white/20 mb-8 w-12 h-12" />
                            <p className="font-serif text-2xl md:text-3xl leading-snug text-gray-200 mb-8 italic">
                                "{t.quote}"
                            </p>
                            <div>
                                <h4 className="font-sans font-bold text-lg tracking-wide uppercase">{t.author}</h4>
                                <span className="font-sans text-sm text-gray-500">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
