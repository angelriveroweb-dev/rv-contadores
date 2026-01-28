import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
    return (
        <section className="py-32 bg-obsidian text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                >
                    <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory leading-tight">
                        Somos una firma contable enfocada en apoyar el crecimiento de su negocio, brindándole la mejor <span className="text-gold italic">asesoría fiscal, contable y financiera</span> posible.
                    </p>

                    <div className="w-16 h-[1px] bg-gold mx-auto my-12 opacity-50"></div>

                    <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Estamos con usted de principio a fin en cada proceso administrativo, proporcionando información clara y oportuna para que pueda tomar mejores decisiones.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
