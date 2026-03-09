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
            className="absolute top-0 w-full z-50 bg-dark/85 backdrop-blur-md border-b border-dark/50"
        >
            <div className="px-6 py-3 md:px-10 md:py-4 flex flex-row justify-between items-center max-w-7xl mx-auto w-full">
                <div className="flex flex-col group cursor-pointer whitespace-nowrap flex-shrink-0">
                    <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.1em] sm:tracking-[0.15em] text-white uppercase leading-normal drop-shadow-sm">Jamille Miranda</span>
                    <span className="font-sans text-[7px] sm:text-[8px] lg:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-white/70 uppercase ml-1 drop-shadow-sm">Neuropsicóloga</span>
                </div>

                <div className="hidden md:flex flex-row items-center gap-4 lg:gap-8 flex-shrink-0">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-white/90 hover:text-white transition-colors font-sans text-[10.5px] lg:text-xs font-bold tracking-[0.2em] relative group whitespace-nowrap"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className={`md:hidden p-2 -mr-2 transition-opacity ${isOpen ? 'opacity-0' : 'text-white drop-shadow-sm opacity-100'}`}
                    aria-label="Abrir menu"
                >
                    <Menu size={28} />
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
            </div>
        </motion.nav>
    );
}
