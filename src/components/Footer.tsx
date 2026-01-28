import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 bg-charcoal border-t border-white/10 bg-black text-center md:text-left">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <span className="font-serif text-2xl text-ivory tracking-tight">Contadores RV</span>
                        <span className="font-sans text-xs text-gold tracking-[0.3em] uppercase mt-2">Consultoría Fiscal</span>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start space-y-4 font-sans text-sm text-gray-400">
                        <p>
                            <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Ubicación</span>
                            Calle Xicoténcatl 907, Zona Centro, Saltillo, Coahuila
                        </p>
                        <p>
                            <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Contacto</span>
                            (844) 414 2244 · <a href="mailto:contacto@rvcontadores.com.mx" className="hover:text-gold transition-colors">contacto@rvcontadores.com.mx</a>
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-6">
                        <a href="#" className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-gold transition-colors">Facebook</a>
                        <a href="#" className="font-sans text-xs uppercase tracking-widest text-gray-500 hover:text-gold transition-colors">Twitter</a>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center">
                    <p className="font-sans text-xs text-gray-700">
                        © {new Date().getFullYear()} Contadores RV. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
