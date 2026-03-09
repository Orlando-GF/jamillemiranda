"use client";

import { motion } from "framer-motion";
import { Brain, Stethoscope, Users, Sparkles } from "lucide-react";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

/* analytics-story-depth clamp(1rem, 2vw, 3rem) */

export default function Services() {
    return (
        <section id="atuacao" className="w-full bg-white py-16 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                {/* Decorative text behind */}
                <div className="absolute top-0 left-0 w-full text-center opacity-[0.02] pointer-events-none select-none z-0 mt-4 overflow-hidden whitespace-nowrap">
                    <span className="font-serif font-bold text-[20vw] md:text-[180px] tracking-tighter uppercase leading-none">ATUAÇÃO</span>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-3xl md:text-[40px] text-center text-[#B18F51] mb-20 relative z-10 font-normal tracking-tight uppercase"
                >
                    Áreas de atuação
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {/* Atuação Box 1 */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Brain size={32} strokeWidth={1} />
                        </div>
                        <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">Neuropsicologia</h3>
                        <p className="font-sans text-dark/60 leading-relaxed text-sm">
                            Avaliação detalhada das funções cognitivas, auxiliando no diagnóstico e tratamento de transtornos.
                        </p>
                    </motion.div>

                    {/* Atuação Box 2 */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-[0_15px_40_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Stethoscope size={32} strokeWidth={1} />
                        </div>
                        <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">Avaliação Cognitiva</h3>
                        <p className="font-sans text-dark/60 leading-relaxed text-sm">
                            Testes especializados para investigar memória, atenção, linguagem e outras funções cerebrais.
                        </p>
                    </motion.div>

                    {/* Atuação Box 3 */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Users size={32} strokeWidth={1} />
                        </div>
                        <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">Terapia Cognitiva</h3>
                        <p className="font-sans text-dark/60 leading-relaxed text-sm">
                            Abordagem focada em resultados para reestruturação de pensamentos e comportamentos.
                        </p>
                    </motion.div>

                    {/* Atuação Box 4 */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col items-center text-center group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Sparkles size={32} strokeWidth={1} />
                        </div>
                        <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">Reabilitação</h3>
                        <p className="font-sans text-dark/60 leading-relaxed text-sm">
                            Programas personalizados para recuperar ou compensar funções cognitivas afetadas.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
