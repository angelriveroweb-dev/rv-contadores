import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    // Number format: +52 + 844 + 414 + 2244 = 528444142244
    const whatsappUrl = "https://wa.me/528444142244?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios.";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] group"
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden"
            >
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>

                {/* Icon */}
                <MessageCircle size={32} color="white" fill="white" className="relative z-10" />
            </motion.div>
        </a>
    );
};

export default WhatsAppButton;
