"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, Users, HeartHandshake } from "lucide-react";

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10">
                    {[
                        {
                            title: "Avaliação Neuropsicológica",
                            description: "Investigação aprofundada para mapear perfis cognitivos, funções executivas e identificar transtornos de aprendizagem ou suspeitas neurológicas.",
                            icon: Brain,
                            delay: 0.1
                        },
                        {
                            title: "Reabilitação Neuropsicológica",
                            description: "Programas personalizados para recuperar ou adaptar funções cognitivas e melhorar a qualidade de vida.",
                            icon: Sparkles,
                            delay: 0.2
                        },
                        {
                            title: "Psicoterapia",
                            description: "Atendimento clínico para crianças, adolescentes e adultos, focado na saúde emocional e no manejo clínico de quadros como esquizofrenia e dependência química.",
                            icon: Users,
                            delay: 0.3
                        },
                        {
                            title: "Orientação Parental & ABA",
                            description: "Capacitação estruturada para pais. Utilizamos a metodologia ABA (padrão-ouro no Transtorno do Espectro Autista) para potencializar o desenvolvimento infantil no ambiente doméstico.",
                            icon: HeartHandshake,
                            delay: 0.4
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            className="relative group transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Lifted Shadow Effect para os cards */}
                            <div className="absolute -bottom-1 left-0 w-[30%] h-4 bg-black/15 blur-lg -rotate-[4deg] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            <div className="absolute -bottom-1 right-0 w-[30%] h-4 bg-black/15 blur-lg rotate-[4deg] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                            {/* Card Content */}
                            <div className="bg-white p-6 md:p-8 border border-stone-100 flex flex-col items-center text-center flex-grow z-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] group-hover:border-gold/30">
                                <div className="w-16 h-16 bg-cream flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <service.icon size={32} strokeWidth={1} />
                                </div>
                                <h3 className="font-serif text-xl text-dark mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                                <p className="font-sans text-dark/70 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
