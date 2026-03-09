"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { X, MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    href="https://wa.me/5577999341689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-gold hover:bg-gold-hover text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(177,143,81,0.3)] transition-all duration-500 hover:-translate-y-2 flex items-center justify-center group h-14 w-14 border border-white/20"
                    aria-label="Agendar via WhatsApp"
                >
                    {/* Pulsing Aura */}
                    <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping group-hover:hidden" />

                    {/* Main Icon */}
                    <MessageCircle size={24} fill="currentColor" strokeWidth={1} className="relative z-10" />

                    {/* Premium Label */}
                    <span className="absolute right-[80px] bg-dark text-white text-[12px] font-sans tracking-[0.1em] px-5 py-3 rounded-xl shadow-2xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap uppercase border border-white/10 backdrop-blur-sm">
                        Agende via WhatsApp
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Garantir que a leitura ocorra apenas no lado do cliente
        if (typeof window !== "undefined") {
            const consent = localStorage.getItem("cookieConsent");
            if (!consent) {
                setIsVisible(true); // eslint-disable-line react-hooks/set-state-in-effect
            }
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 w-full bg-dark/95 backdrop-blur-md text-white p-5 z-50 shadow-2xl border-t border-gold/30"
                >
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-sans text-white/90 text-center md:text-left">
                            Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa Política de Privacidade.
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={acceptCookies}
                                className="bg-gold hover:bg-[#a98144] px-6 py-2 rounded-lg text-sm font-bold font-sans transition-colors whitespace-nowrap"
                            >
                                Aceitar e fechar
                            </button>
                            <button onClick={() => setIsVisible(false)} className="text-white/50 hover:text-white p-1">
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
