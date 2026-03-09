"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="inicio" className="relative w-full min-h-[90dvh] md:min-h-[95dvh] flex flex-col justify-start md:justify-center overflow-visible mb-16 md:mb-24">
            {/* Sombras de Canto (Lifted Corners Effect) - Suaves e concentradas nas laterais */}
            <div className="absolute bottom-2 left-[4%] w-[30%] h-6 bg-black/25 blur-2xl -rotate-3 z-0" />
            <div className="absolute bottom-2 right-[4%] w-[30%] h-6 bg-black/25 blur-2xl rotate-3 z-0" />

            {/* Background Image Layer (The Floating Card - Straight Edges) */}
            <div className="absolute inset-x-0 top-0 bottom-6 z-10 overflow-hidden bg-background">
                <div
                    className="absolute inset-0 bg-cover bg-[position:65%_top] sm:bg-[position:75%_top] md:bg-[position:80%_top] lg:bg-[position:90%_top] xl:bg-right-top bg-no-repeat bg-[url('/img/hero_mobile.webp')] lg:bg-[url('/img/hero.webp')]"
                    aria-hidden="true"
                />
                {/* Overlay Esquerdo: Contraste suave para o texto descritivo */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-[85%]" />

            </div>

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 z-10 flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 lg:items-center pt-[20dvh] lg:pt-32 pb-12 flex-grow">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full flex flex-col flex-grow items-start max-w-[85%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-none"
                >
                    <div className="inline-flex max-w-full items-center justify-center px-3 md:px-4 py-1.5 bg-gold/10 rounded-full mb-6 border border-gold/20 whitespace-nowrap">
                        <span className="text-gold text-[10.5px] sm:text-xs font-sans tracking-wider sm:tracking-widest uppercase font-bold">Neuropsicologia & Psicoterapia</span>
                    </div>

                    <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] md:leading-[1.15] text-dark mb-6 tracking-tight drop-shadow-sm">
                        Um novo olhar <br className="hidden lg:block" /> <span className="text-gold italic font-bodoni">sobre a sua mente</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-sans text-dark/90 text-base md:text-xl mb-8 md:mb-14 sm:max-w-prose leading-relaxed drop-shadow-sm"
                    >
                        Avaliação neuropsicológica e psicoterapia para o seu bem-estar e desenvolvimento humano.
                    </motion.p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contato"
                        className="relative overflow-hidden group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-gold to-[#a98144] hover:from-[#a98144] hover:to-[#8c6732] text-white font-sans font-bold px-5 py-3.5 md:px-8 md:py-4 rounded-full shadow-2xl shadow-gold/30 transition-all border border-white/20 uppercase tracking-wider md:tracking-widest whitespace-nowrap text-[13px] sm:text-sm mt-auto w-full md:w-auto"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform" />

                        <span className="relative z-10">Agendar consulta</span>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 bg-white/20 p-1 rounded-full"><path d="m9 18 6-6-6-6" /></svg>
                    </motion.a>
                </motion.div>

                {/* Espaço removido: A coluna vazia que causava altura artificial não é mais necessária */}
            </div>
        </section >
    );
}
