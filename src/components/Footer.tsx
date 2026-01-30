import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="pt-24 pb-12 bg-black text-ivory relative overflow-hidden">
            {/* 1280px Constraint */}
            <div className="container mx-auto px-6 md:px-12 max-w-[1280px]">

                {/* Top Section: Brand & CTA */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-md">
                        <h3 className="font-sans text-4xl w-full border-b border-white/20 pb-8 mb-8">
                            Contadores <span className="font-serif italic text-gold">RV</span>
                        </h3>
                        <p className="text-gray-400 font-light text-lg leading-relaxed">
                            Estrategia fiscal y contable de alto nivel para empresas que buscan trascender.
                            Precisión, honestidad y visión global.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <a href="mailto:info@contadoresrv.com" className="text-3xl md:text-5xl font-sans hover:text-gold transition-colors duration-300 tracking-tight">
                            info@contadoresrv.com
                        </a>
                        <a href="tel:+529981234567" className="text-3xl md:text-5xl font-sans hover:text-gold transition-colors duration-300 tracking-tight opacity-60">
                            +52 (998) 123 4567
                        </a>
                    </div>
                </div>

                {/* Grid Section: Links & Address */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">

                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <span className="text-gold font-mono text-sm uppercase tracking-widest mb-4">Explorar</span>
                        {['Inicio', 'Nosotros', 'Servicios', 'Testimonios', 'Contacto'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-lg">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-4">
                        <span className="text-gold font-mono text-sm uppercase tracking-widest mb-4">Servicios</span>
                        {['Fiscal', 'Contable', 'Auditoría', 'Nómina'].map((item) => (
                            <span key={item} className="text-gray-500 text-lg cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-4 md:col-span-2">
                        <span className="text-gold font-mono text-sm uppercase tracking-widest mb-4">Ubicación</span>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                            Av. Bonampak, SM 4, Manzana 1<br />
                            Cancún, Quintana Roo, México.<br />
                            CP 77500
                        </p>
                        <div className="mt-8 flex gap-6">
                            <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-white/5 text-sm text-gray-600">
                    <p>&copy; 2024 Contadores RV. Todos los derechos reservados.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacidad</a>
                        <a href="#" className="hover:text-gray-400">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
