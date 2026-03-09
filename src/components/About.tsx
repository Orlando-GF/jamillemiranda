"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function About() {
    return (
        <section id="sobre" className="w-full bg-gradient-to-b from-[#F5EFE6] to-white py-16 md:py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                {/* Left Side - Image with Brain background */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center w-full min-h-[400px]"
                >
                    {/* Decorative Brain Silhouette Graphic */}
                    <div className="absolute -left-12 sm:-left-32 md:-left-16 z-0 text-gold/10 hidden sm:block">
                        <Brain size={400} strokeWidth={0.5} />
                    </div>
                    <div className="absolute -left-24 z-0 text-gold/15 sm:hidden opacity-70">
                        <Brain size={280} strokeWidth={0.5} />
                    </div>

                    {/* Imagem removida temporariamente
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 w-full max-w-sm aspect-[4/5] bg-stone-100 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 mx-auto"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('/img/sobre_mim.webp')" }}
                        />
                    </motion.div>
                    */}
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-lg"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-dark mb-6 tracking-tight uppercase">
                        Quem é Jamille Miranda?
                    </h2>
                    <div className="space-y-4 font-sans text-dark/80 text-lg leading-relaxed mb-12 text-justify">
                        <p>
                            Jamille Miranda é psicóloga corporativa e neuropsicóloga (CRP 03/16290) com mais de 8 anos de experiência clínica. Desde 2017, dedica sua carreira ao cuidado da mente humana, atuando tanto em consultórios privados quanto em redes de saúde pública.
                        </p>
                        <p>
                            Com formação avançada em <strong className="font-medium text-dark">Análise do Comportamento Aplicada (ABA)</strong>, Jamille é especialista no atendimento de crianças, adolescentes e adultos. Seu raciocínio clínico é referência regional no manejo do Transtorno do Espectro Autista (TEA) e no acompanhamento estratégico de transtornos psiquiátricos complexos, como esquizofrenia e dependência química.
                        </p>
                    </div>

                    {/* Integrated Mission & Values */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/50 backdrop-blur-sm p-6 border border-gold/10 hover:border-gold/30 transition-all duration-500"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            <div className="relative z-10">
                                <h3 className="font-serif text-xl text-gold mb-2 italic">Missão</h3>
                                <p className="font-sans text-dark/70 text-sm leading-relaxed">
                                    Oferecer excelência clínica e cuidado humanizado, transformando vidas através da neuropsicologia.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/50 backdrop-blur-sm p-6 border border-gold/10 hover:border-gold/30 transition-all duration-500"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            <div className="relative z-10">
                                <h3 className="font-serif text-xl text-gold mb-2 italic">Valores</h3>
                                <p className="font-sans text-dark/70 text-sm leading-relaxed">
                                    Ética, empatia profunda e embasamento científico inabalável em cada atendimento.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
