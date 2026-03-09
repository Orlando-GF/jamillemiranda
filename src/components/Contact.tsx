"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* fluid typography using clamp() */

const formSchema = z.object({
    nome: z.string().min(2, "Nome muito curto"),
    telefone: z.string().min(10, "Telefone inválido"),
    email: z.string().email("E-mail inválido"),
    mensagem: z.string().min(10, "Mensagem muito curta"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            const message = `Olá! Vim pelo site e gostaria de conversar.
      
*Nome:* ${data.nome}
*Telefone:* ${data.telefone}
*Email:* ${data.email}

*Mensagem:* 
${data.mensagem}`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/5577999341689?text=${encodedMessage}`;

            window.open(whatsappLink, '_blank');
        } catch (error) {
            console.error(/* analytics-story-depth clamp(1rem, 2vw, 3rem) */error);
        }
    };

    return (
        <section id="contato" className="w-full py-12 md:py-24 px-6 relative bg-background">
            <h1 className="sr-only">Entre em Contato - Jamille Miranda</h1>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl md:text-5xl text-center text-dark mb-6 tracking-tight"
                >
                    Entre em contato
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-sans text-dark/70 text-center max-w-prose mx-auto mb-16 leading-relaxed"
                >
                    Comprometida com o acolhimento humano e o rigor científico, ofereço um espaço seguro para o seu desenvolvimento.
                    Cada trajetória é única, e meu objetivo é guiar você através de descobertas que promovam autonomia,
                    saúde emocional e uma vida plena e equilibrada.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start max-w-5xl mx-auto">

                    {/* Formulário Bloco */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 md:p-8 border-[3px] border-gold/60 shadow-2xl relative"
                    >
                        {/* Linha dourada extra por baixo como na imagem */}
                        <div className="absolute -inset-2 border border-gold/30 rounded-3xl -z-10 bg-white/50 blur-sm pointer-events-none"></div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <label htmlFor="nome" className="block text-xs font-sans font-bold text-gold uppercase tracking-wider mb-1.5 ml-1">Seu Nome</label>
                                <input
                                    {...register("nome")}
                                    id="nome"
                                    placeholder="Ex: Maria Silva"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.nome ? 'border-red-400' : 'border-stone-200'} focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-stone-50/50 font-sans text-dark transition-all`}
                                />
                                {errors.nome && <span className="text-red-500 text-xs mt-1 font-sans">{errors.nome.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="telefone" className="block text-xs font-sans font-bold text-gold uppercase tracking-wider mb-1.5 ml-1">Telefone / WhatsApp</label>
                                <input
                                    {...register("telefone")}
                                    id="telefone"
                                    placeholder="(00) 00000-0000"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.telefone ? 'border-red-400' : 'border-stone-200'} focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-stone-50/50 font-sans text-dark transition-all`}
                                />
                                {errors.telefone && <span className="text-red-500 text-xs mt-1 font-sans">{errors.telefone.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-sans font-bold text-gold uppercase tracking-wider mb-1.5 ml-1">E-mail</label>
                                <input
                                    {...register("email")}
                                    id="email"
                                    placeholder="seu@email.com"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-stone-200'} focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-stone-50/50 font-sans text-dark transition-all`}
                                />
                                {errors.email && <span className="text-red-500 text-xs mt-1 font-sans">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="mensagem" className="block text-xs font-sans font-bold text-gold uppercase tracking-wider mb-1.5 ml-1">Como posso ajudar?</label>
                                <textarea
                                    {...register("mensagem")}
                                    id="mensagem"
                                    placeholder="Escreva sua mensagem aqui..."
                                    rows={4}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.mensagem ? 'border-red-400' : 'border-stone-200'} focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-stone-50/50 font-sans text-dark resize-none transition-all`}
                                />
                                {errors.mensagem && <span className="text-red-500 text-xs mt-1 font-sans">{errors.mensagem.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative overflow-hidden group w-full bg-gradient-to-r from-[#a98144] to-gold hover:from-gold hover:to-[#a98144] text-white font-sans font-bold py-4 rounded-xl shadow-xl shadow-gold/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mb-6 uppercase tracking-widest text-sm"
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform" />

                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Enviando...</span>
                                    </>
                                ) : (
                                    <span className="relative z-10">Enviar Mensagem</span>
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-2 text-[10px] text-dark/40 uppercase tracking-widest">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Conexão Segura SSL HTTPS • Suas informações estão protegidas</span>
                            </div>
                        </form>
                    </motion.div>

                    {/* Dados de Contato Direita */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col justify-center h-full space-y-10"
                    >
                        <div className="border-l-2 border-gold/30 pl-6 mb-4">
                            <h3 className="font-serif text-3xl text-gold mb-2 italic">Atendimento Humanizado</h3>
                            <p className="font-sans text-dark/60 text-base leading-relaxed">
                                Suporte especializado baseado em ética clínica, escuta ativa e profundo acolhimento humano.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-white transition-all">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.3-2.3a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-dark mb-1 italic">WhatsApp</h4>
                                    <p className="font-sans text-dark/70 text-lg tracking-tight">+55 77 9 9934-1689</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-white transition-all">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-dark mb-1 italic">Email</h4>
                                    <p className="font-sans text-dark/70 text-lg tracking-tight">nome_jamille@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-white transition-all">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-dark mb-1 italic">Endereço da Clínica</h4>
                                    <p className="font-sans text-dark/70 text-lg tracking-tight">Rua das Flores, 123, Sala 401 -<br />Centro, Cidade - UF</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
