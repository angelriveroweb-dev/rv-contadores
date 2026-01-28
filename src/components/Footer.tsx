import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    /* const [isHovered, setIsHovered] = useState(false); */

    return (
        <footer id="contact" className="bg-ivory text-obsidian pb-12 pt-32 px-4 md:px-8 relative overflow-hidden rounded-t-[3rem]">
            <div className="container mx-auto flex flex-col justify-between min-h-[70vh]">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start border-b border-obsidian/10 pb-12">
                    <div className="max-w-md">
                        <h3 className="font-sans text-sm uppercase tracking-widest mb-4 opacity-60">Oficinas</h3>
                        <p className="font-sans text-xl md:text-2xl leading-relaxed">
                            Calle Xicoténcatl 907 <br />
                            Zona Centro <br />
                            Saltillo, Coah. México
                        </p>
                        <a href="tel:8444142244" className="block mt-4 text-xl hover:text-gold transition-colors">(844) 414 2244</a>
                    </div>

                    <div className="mt-12 md:mt-0 flex flex-col items-end text-right">
                        <h3 className="font-sans text-sm uppercase tracking-widest mb-4 opacity-60">Social</h3>
                        <div className="flex flex-col gap-2 text-xl">
                            <a href="#" className="hover:opacity-50 transition-opacity">Facebook</a>
                            <a href="#" className="hover:opacity-50 transition-opacity">Twitter / X</a>
                            <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Giant CTA */}
                <div className="flex-1 flex items-center justify-center py-24">
                    <motion.a
                        href="mailto:contacto@rvcontadores.com.mx"
                        className="relative z-10 block cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="font-sans font-medium text-[8vw] md:text-[7rem] lg:text-[9rem] leading-none tracking-tighter text-obsidian group-hover:text-gold transition-colors duration-500">
                            contacto@
                            <br />
                            rvcontadores
                            <span className="text-gray-300 group-hover:text-gold/50 transition-colors">.com.mx</span>
                        </div>
                    </motion.a>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-end opacity-40 text-sm font-sans">
                    <span>© 2024 Contadores RV. All Rights Reserved.</span>
                    <span>Design Inspired by Wonjyou.</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
