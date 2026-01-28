import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const menuVariants = {
        initial: { y: "-100%" },
        animate: { y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } },
        exit: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } }
    };

    const linkVariants = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] as const } },
        open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] as const } }
    };

    const LINKS = [
        { label: "Inicio", href: "#hero" },
        { label: "Servicios", href: "#services" },
        { label: "Nosotros", href: "#about" },
        { label: "Contacto", href: "#footer" }
    ];

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center"
            >
                <div className="font-serif text-ivory text-xl md:text-2xl tracking-tighter z-50 mix-blend-difference">
                    Contadores RV
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    {LINKS.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="text-ivory text-sm font-sans uppercase tracking-widest hover:text-gold transition-colors duration-300 relative group overflow-hidden"
                        >
                            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                                {link.label}
                            </span>
                            <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-gold">
                                {link.label}
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden z-50 cursor-pointer text-ivory" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-gold z-40 flex flex-col justify-center items-center h-screen"
                    >
                        <div className="flex flex-col gap-6 text-center overflow-hidden">
                            {LINKS.map((link, i) => (
                                <div key={i} className="overflow-hidden">
                                    <motion.div
                                        variants={linkVariants}
                                        initial="initial"
                                        animate="open"
                                        transition={{ delay: 0.2 + (i * 0.1) }}
                                    >
                                        <a
                                            href={link.href}
                                            className="font-serif text-5xl md:text-7xl text-obsidian hover:text-white transition-colors duration-500"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
