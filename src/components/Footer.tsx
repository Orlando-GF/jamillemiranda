import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1A1814] text-white">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 lg:gap-24">

                    {/* Logo Footer */}
                    <div className="flex flex-col items-center md:items-start group cursor-pointer">
                        <h2 className="font-serif text-3xl tracking-[0.15em] text-gold uppercase mb-1">Jamille Miranda</h2>
                        <span className="font-sans text-[10px] tracking-[0.4em] text-white/50 uppercase ml-1">Neuropsicóloga</span>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4 font-sans uppercase tracking-widest text-xs">
                        {[
                            { name: 'Início', href: '#inicio' },
                            { name: 'Sobre Mim', href: '#sobre' },
                            { name: 'Especialidades', href: '#atuacao' },
                            { name: 'Agendamento', href: '#contato' }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/70 hover:text-gold transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex gap-4">
                        <a href="#" className="p-3 border border-gold/30 text-gold hover:bg-gold hover:text-dark rounded-full transition-all duration-300 shadow-lg shadow-gold/5">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 border border-gold/30 text-gold hover:bg-gold hover:text-dark rounded-full transition-all duration-300 shadow-lg shadow-gold/5">
                            <Linkedin size={20} />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans text-white/30 uppercase tracking-[0.2em]">
                    <p>© 2024 Jamille Miranda • Todos os direitos reservados</p>
                    <p className="mt-4 md:mt-0">CRP: 00/00000</p>
                </div>
            </div>
        </footer>
    );
}
