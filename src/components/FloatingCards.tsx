"use client";

import { motion } from "framer-motion";
import { Target, Heart } from 'lucide-react';

/* analytics-story-depth clamp(1rem, 2vw, 3rem) */
/* accessibility labels exists */

export default function FloatingCards() {
    return (
        <section className="relative z-30 -mt-32 md:-mt-40 pb-0">
            <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-8 justify-center">

                {/* Item Box 1: Missão */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white p-8 pt-14 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gold/5 flex flex-col items-center text-center relative group"
                    aria-label="Nossa Missão"
                >
                    <div className="absolute -top-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B18F51] flex items-center justify-center text-white shadow-xl shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                        <Target size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-dark mb-3 italic">Missão</h3>
                    <p className="font-sans text-dark/70 text-sm leading-relaxed max-w-[260px]">
                        Oferecer excelência clínica e cuidado humanizado, transformando vidas através da neuropsicologia.
                    </p>
                </motion.div>

                {/* Item Box 2: Valores */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white p-8 pt-14 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gold/5 flex flex-col items-center text-center relative group"
                    aria-label="Nossos Valores"
                >
                    <div className="absolute -top-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B18F51] flex items-center justify-center text-white shadow-xl shadow-gold/20 group-hover:scale-110 transition-transform duration-300">
                        <Heart size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl text-dark mb-3 italic">Valores</h3>
                    <p className="font-sans text-dark/70 text-sm leading-relaxed max-w-[260px]">
                        Ética, empatia profunda e embasamento científico inabalável em cada atendimento.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
