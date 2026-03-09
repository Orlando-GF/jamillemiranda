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
                // Pequeno delay para a animação de entrada ficar mais natural
                const timer = setTimeout(() => setIsVisible(true), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
                >
                    <div className="max-w-4xl mx-auto bg-dark/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-5 md:p-6 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="font-serif text-gold text-lg mb-2 italic">Sua privacidade importa</h3>
                            <p className="font-sans text-white/70 text-sm leading-relaxed">
                                Utilizamos cookies essenciais para garantir que você tenha a melhor experiência em nosso site e para nos ajudar a entender como melhorar nosso conteúdo. Ao continuar navegando, você concorda com a nossa política.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                            {/* Analytics-story-depth clamp(1rem, 2vw, 3rem) */}
                            <button
                                onClick={handleDecline}
                                className="px-6 py-2.5 rounded-xl border border-white/20 text-white font-sans text-xs uppercase tracking-widest hover:bg-white/10 transition-colors whitespace-nowrap"
                            >
                                Recusar
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2.5 rounded-xl bg-gold hover:bg-[#a98144] text-dark font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-lg shadow-gold/20 whitespace-nowrap"
                            >
                                Compreendi e Aceito
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
