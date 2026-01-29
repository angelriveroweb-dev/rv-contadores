import React from 'react';
import { motion } from 'framer-motion';

// Separate WhatsApp Button Component logic included here to ensure single source of truth if preferred, 
// but since I created a separate file, I will just update ONLY the footer here. 
// Actually, the user asked to FIX the footer email responsivness.

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="fixed bottom-0 left-0 w-full h-[80vh] min-h-[600px] bg-ivory text-obsidian pb-12 pt-32 px-4 md:px-8 -z-10 flex flex-col justify-end">
            <div className="container mx-auto flex flex-col justify-between h-full">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start border-b border-obsidian/10 pb-12">
                    <div className="max-w-md">
                        <h3 className="font-sans text-sm uppercase tracking-widest mb-4 opacity-60">Oficinas</h3>
                        <p className="font-sans text-xl md:text-2xl leading-relaxed">
                            Calle Xicoténcatl 907 <br />
                            Zona Centro <br />
                            Saltillo, Coah. México
                        </p>
                        <a href="tel:5318448705084" className="block mt-4 text-xl hover:text-gold transition-colors">(844) 870 5084</a>
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

                {/* Giant CTA - Responsive Fix */}
                <div className="flex-1 flex items-center justify-center py-24">
                    <motion.a
                        href="mailto:contacto@rvcontadores.com.mx"
                        className="relative z-10 block cursor-pointer group w-full text-center"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="font-sans font-medium text-[9vw] lg:text-[10rem] leading-[0.9] tracking-tighter text-obsidian group-hover:text-gold transition-colors duration-500 break-words w-full">
                            contacto@<br className="md:hidden" />rvcontadores<span className="text-gray-300 group-hover:text-gold/50 transition-colors text-[5vw] lg:text-[5rem] block md:inline">.com.mx</span>
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
