/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  CheckCircle2, 
  Users, 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ArrowRight,
  Star,
  Brain,
  Sparkles,
  Coffee
} from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5593992006784&text=Olá! Gostaria de agendar uma consulta na CLIPS.";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Header/Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-bold tracking-tight text-primary">CLIPS</span>
          </div>
          <a 
            href={WHATSAPP_URL}
            className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden bg-primary-light/30 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Psicologia em Santarém - PA
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
                Recupere o seu <span className="text-primary">equilíbrio emocional</span> e volte a sorrir.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Na CLIPS, oferecemos um espaço seguro e acolhedor para você cuidar da sua saúde mental com profissionais especializados e atendimento humanizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP_URL} className="btn-whatsapp">
                  <MessageCircle size={24} />
                  Agendar pelo WhatsApp
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="Avatar" 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>+500 vidas transformadas em Santarém</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://picsum.photos/seed/therapy-warm/800/800" 
                  alt="Ambiente acolhedor CLIPS" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] hidden md:block">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Heart size={20} fill="currentColor" />
                  <span className="font-bold">Acolhimento Real</span>
                </div>
                <p className="text-sm text-slate-600">Um ambiente pensado para você se sentir em casa.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. PROBLEMA SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                Você sente que está carregando o mundo nas costas?
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                A ansiedade constante, o estresse do dia a dia e a sensação de sobrecarga podem parecer insuportáveis. Muitas vezes, tentamos lidar com tudo sozinhos, mas o peso emocional acaba afetando nossa saúde, nossos relacionamentos e nossa paz.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                  "Ansiedade que não te deixa descansar",
                  "Dificuldade em lidar com perdas ou mudanças",
                  "Sentimento de insegurança e baixa autoestima",
                  "Sobrecarga emocional e esgotamento (Burnout)",
                  "Dificuldades no relacionamento familiar ou amoroso",
                  "Preocupação com o desenvolvimento dos filhos"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="mt-1 text-red-400">
                      <ArrowRight size={18} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-xl font-medium text-primary">
                Você não precisa passar por isso sozinho. Existe um caminho para o alívio.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3. SOLUÇÃO SECTION */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Na CLIPS, você encontra o acolhimento que merece.
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Nossa clínica nasceu com o propósito de ser um refúgio em Santarém. Aqui, cada paciente é visto em sua totalidade, com respeito, ética e, acima de tudo, humanidade.
              </p>
              <ul className="space-y-4">
                {[
                  "Ambiente seguro e livre de julgamentos",
                  "Profissionais altamente qualificados e em constante atualização",
                  "Abordagens terapêuticas baseadas em evidências",
                  "Foco total no seu bem-estar e autonomia emocional"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={24} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg">
                  Quero conhecer a CLIPS
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/clips-clinic/800/600" 
                alt="Profissional CLIPS" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* 4. BENEFÍCIOS SECTION */}
        <section className="py-24 bg-soft-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Por que escolher a CLIPS?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Cuidado especializado para todas as fases da vida.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Heart className="text-primary" size={32} />,
                  title: "Atendimento Humanizado",
                  desc: "Priorizamos a escuta ativa e o vínculo terapêutico real."
                },
                {
                  icon: <Users className="text-primary" size={32} />,
                  title: "Equipe Especializada",
                  desc: "Psicólogos com expertise em diversas áreas da saúde mental."
                },
                {
                  icon: <Coffee className="text-primary" size={32} />,
                  title: "Ambiente Acolhedor",
                  desc: "Espaço físico planejado para proporcionar calma e privacidade."
                },
                {
                  icon: <Sparkles className="text-primary" size={32} />,
                  title: "Presencial e Online",
                  desc: "Flexibilidade para você ser atendido onde preferir."
                }
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <div className="mb-6 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. COMO FUNCIONA SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como iniciar sua jornada?</h2>
              <p className="text-slate-600">O processo é simples, discreto e rápido.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
              
              {[
                {
                  step: "01",
                  title: "Contato via WhatsApp",
                  desc: "Clique no botão e envie uma mensagem. Nossa equipe te atenderá com total sigilo."
                },
                {
                  step: "02",
                  title: "Direcionamento",
                  desc: "Entendemos sua necessidade e indicamos o profissional mais adequado para o seu caso."
                },
                {
                  step: "03",
                  title: "Início do Atendimento",
                  desc: "Agendamos sua primeira sessão e você começa a cuidar de quem mais importa: você."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 bg-white text-center"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <a href={WHATSAPP_URL} className="btn-whatsapp inline-flex">
                <MessageCircle size={24} />
                Quero agendar agora
              </a>
            </div>
          </div>
        </section>

        {/* 6. AUTORIDADE SECTION */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-2 text-accent mb-6">
                <Star size={20} fill="currentColor" />
                <span className="font-bold uppercase tracking-widest text-sm">Referência em Santarém</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Uma equipe multidisciplinar pronta para te apoiar.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                A CLIPS se consolidou como uma das principais clínicas de psicologia da região do Baixo Amazonas. Nossa infraestrutura foi planejada para oferecer conforto e tecnologia a serviço da saúde mental.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-slate-400 text-sm">Profissionais Especialistas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-slate-400 text-sm">Sessões Realizadas</div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/clips-1/400/500" alt="Clínica CLIPS" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/clips-2/400/500" alt="Clínica CLIPS" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </section>

        {/* 7. PROVA SOCIAL SECTION */}
        <section className="py-24 bg-soft-bg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Vidas transformadas pela CLIPS</h2>
              <p className="text-slate-600">Confira o que dizem nossos pacientes (Nomes alterados para preservar o sigilo).</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Mariana S.",
                  text: "Cheguei na CLIPS com crises de ansiedade constantes. O acolhimento desde a recepção até a terapia foi fundamental para eu recuperar minha qualidade de vida.",
                  role: "Paciente há 6 meses"
                },
                {
                  name: "Ricardo M.",
                  text: "A terapia online me ajudou muito, pois viajo bastante a trabalho. A equipe é extremamente profissional e pontual. Recomendo a todos em Santarém.",
                  role: "Paciente há 1 ano"
                },
                {
                  name: "Ana Paula G.",
                  text: "Levei meu filho para atendimento infantil e a evolução dele foi nítida. O carinho e a paciência da psicóloga fizeram toda a diferença no processo.",
                  role: "Mãe de paciente"
                }
              ].map((testimonial, i) => (
                <motion.div 
                  key={i}
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 italic text-slate-700 relative"
                >
                  <div className="absolute -top-4 left-8 bg-primary text-white p-2 rounded-lg">
                    <Coffee size={20} />
                  </div>
                  <p className="mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 not-italic">
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-primary-light/50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10"><Brain size={120} /></div>
                <div className="absolute bottom-10 right-10"><Heart size={120} /></div>
              </div>
              
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                  Dê o primeiro passo para uma vida mais leve hoje.
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                  Não deixe sua saúde mental para depois. Nossa equipe está pronta para te acolher e ajudar você a encontrar o equilíbrio que busca.
                </p>
                <div className="flex flex-col items-center gap-6">
                  <a href={WHATSAPP_URL} className="btn-whatsapp text-xl px-12 py-5">
                    <MessageCircle size={28} />
                    Agendar Agora pelo WhatsApp
                  </a>
                  <p className="text-sm text-slate-500 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-primary" />
                    Atendimento 100% sigiloso e ético
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">C</div>
                <span className="text-xl font-bold text-primary">CLIPS</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Clínica de Psicologia em Santarém - PA. Cuidando da sua saúde mental com ética, acolhimento e profissionalismo.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contatos</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  Santarém - Pará, Brasil
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-primary" />
                  (93) 99200-6784
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-primary" />
                  Seg - Sex: 08h às 20h
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sobre a Clínica</a></li>
                <li><a href={WHATSAPP_URL} className="hover:text-primary transition-colors">Agendamentos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} CLIPS - Clínica de Psicologia. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com carinho para a saúde mental de Santarém.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
