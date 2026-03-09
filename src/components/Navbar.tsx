"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'INÍCIO', href: '#inicio' },
        { name: 'SOBRE MIM', href: '#sobre' },
        { name: 'ÁREAS DE ATUAÇÃO', href: '#atuacao' },
    ];
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 w-full z-50 p-6 md:p-10 flex flex-row justify-between items-center max-w-7xl mx-auto left-0 right-0"
        >
            <div className="flex flex-col group cursor-pointer">
                <span className="font-serif text-2xl md:text-3xl tracking-[0.1em] md:tracking-[0.15em] text-gold uppercase leading-normal">Jamille Miranda</span>
                <span className="font-sans text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-dark/60 uppercase ml-1">Neuropsicóloga</span>
            </div>

            <div className="hidden md:flex items-center gap-8 mt-4 md:mt-0">
                {navLinks.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-gold/80 hover:text-gold transition-colors font-sans text-xs tracking-[0.2em] relative group"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
                <Link
                    href="#contato"
                    className="px-6 py-2.5 border border-gold/50 text-gold hover:bg-gold hover:text-white transition-all duration-300 font-sans text-xs tracking-[0.2em] rounded-full uppercase"
                >
                    Agendar
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-gold p-2 -mr-2"
                aria-label="Abrir menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#1A1814]/98 backdrop-blur-xl z-[60] flex flex-col items-center justify-center space-y-8"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 text-gold"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.concat({ name: 'CONTATO', href: '#contato' }).map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gold transition-colors font-serif text-2xl tracking-[0.2em] uppercase"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
