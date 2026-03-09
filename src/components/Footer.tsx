import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        {/* Top Light Line */ }
        < div className = "w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 lg:gap-24">

                    {/* Logo Footer */}
                    <div className="flex flex-col items-center md:items-start group cursor-pointer max-w-xs">
                        <h2 className="font-serif text-3xl tracking-[0.15em] text-white group-hover:text-gold transition-colors uppercase mb-1">Jamille Miranda</h2>
                        <span className="font-sans text-[10px] tracking-[0.5em] text-white/40 uppercase ml-1">Neuropsicóloga</span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start space-y-5 font-sans uppercase tracking-[0.3em] text-[10px] font-bold">
                        {[
                            { name: 'Início', href: '#inicio' },
                            { name: 'Sobre Mim', href: '#sobre' },
                            { name: 'Áreas de Atuação', href: '#atuacao' },
                            { name: 'Agendamento', href: '#contato' }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/50 hover:text-white transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex gap-5">
                        <a href="https://www.instagram.com/jamilleneuropsico/" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 text-white/70 hover:border-gold hover:text-gold transition-all duration-500 hover:-translate-y-1">
                            <Instagram size={24} strokeWidth={1.5} />
                        </a>
                        <a href="#" className="p-4 border border-white/10 text-white/70 hover:border-gold hover:text-gold transition-all duration-500 hover:-translate-y-1">
                            <Linkedin size={24} strokeWidth={1.5} />
                        </a>
                    </div>

                </div>
            </div>

    {/* Bottom Bar */ }
    <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans text-white/30 uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Jamille Miranda • Todos os direitos reservados</p>
            <p className="mt-4 md:mt-0">CRP: 03/16290</p>
        </div>
    </div>
        </footer >
    );
}
