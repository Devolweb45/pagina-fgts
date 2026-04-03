import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Calculator, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle,
  Smartphone,
  Mail,
  MapPin,
  Instagram,
  Facebook
} from 'lucide-react';
import AppSimulator from './components/AppSimulator';

const slides = [
  {
    title: "1. No app do FGTS, escolha a opção do Saque Aniversário do FGTS",
    desc: "Confira as informações sobre a modalidade e selecione a opção do Saque Aniversário, aceitando os termos e condições",
    link: "https://play.google.com/store/apps/details?id=br.gov.caixa.fgts.trabalhador&hl=pt_BR"
  },
  {
    title: "2. No app do FGTS, em Saque Aniversário, simule o valor da parcela do empréstimo FGTS",
    desc: "Esse valor é atualizado conforme o saldo total do seu FGTS para fins de antecipação.",
    link: "https://play.google.com/store/apps/details?id=br.gov.caixa.fgts.trabalhador&hl=pt_BR"
  },
  {
    title: "3. No app do FGTS, autorize a Facta Financeira a consultar seu FGTS",
    desc: "No app do FGTS, dê a autorização para a Facta Financeira consultar seu saldo do FGTS para analisar a possibilidade de oferecer a antecipação.",
    link: "https://play.google.com/store/apps/details?id=br.gov.caixa.fgts.trabalhador&hl=pt_BR"
  },
  {
    title: "4. Finalize sua contratação com o Marcelo Brasil",
    desc: "Agora que você já autorizou, clique no botão do WhatsApp para que eu possa finalizar sua simulação e enviar o dinheiro!",
    link: "https://wa.link/8sct8r"
  }
];

const testimonials = [
  {
    name: "João Silva",
    location: "Dirceu, Teresina",
    text: "Marcelo, o dinheiro caiu agora! Muito obrigado pela agilidade, resolveu minha vida aqui no Dirceu. Nota 10!",
    time: "14:20",
    img: "https://picsum.photos/seed/joao/100/100"
  },
  {
    name: "Maria Oliveira",
    location: "Centro, Teresina",
    text: "Conseguiu liberar meu saldo que estava retido há meses. Super recomendo o trabalho do Marcelo!",
    time: "10:45",
    img: "https://picsum.photos/seed/maria/100/100"
  },
  {
    name: "Ricardo Santos",
    location: "Mocambinho, Teresina",
    text: "Fiz a simulação e em menos de 30 min o PIX tava na conta. Atendimento humano de verdade, sem enrolação.",
    time: "16:12",
    img: "https://picsum.photos/seed/ricardo/100/100"
  }
];

const faqs = [
  {
    q: "Estou negativado, posso fazer?",
    a: "Sim! Como a garantia do pagamento é o seu próprio saldo do FGTS, não fazemos consulta ao SPC ou Serasa. O crédito é liberado mesmo para quem está com o nome sujo."
  },
  {
    q: "Vou perder minha multa de 40% se for demitido?",
    a: "Não. Essa é a maior dúvida! A multa de 40% é calculada sobre o valor total que a empresa depositou, e ela continua sendo sua. Se você for demitido sem justa causa, você saca o valor da multa integralmente em dinheiro vivo."
  },
  {
    q: "Quanto tempo demora para o dinheiro cair?",
    a: "O processo é 100% digital e muito rápido. Após a aprovação e a biometria facial, o dinheiro costuma cair na sua conta via PIX ou transferência em até 30 minutos (dentro do horário bancário)."
  },
  {
    q: "Preciso pagar algum boleto mensal?",
    a: "Não. Você não tira um centavo do bolso para pagar as parcelas. O pagamento é feito automaticamente uma vez por ano, descontando direto do saldo que você já tem no FGTS. É o seu dinheiro trabalhando para você."
  },
  {
    q: "O que acontece se eu for demitido no Saque-Aniversário?",
    a: "Você recebe sua multa de 40% normalmente. A única diferença é que o saldo restante do FGTS você continua recebendo em parcelas anuais, em vez de sacar tudo de uma vez. Para quem precisa de dinheiro hoje, essa é a melhor opção."
  },
  {
    q: "É seguro mandar meus dados?",
    a: "Totalmente seguro. Como Consultor Financeiro Autorizado, seus dados são usados exclusivamente para a simulação oficial no sistema da Facta e da Caixa Econômica. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados)."
  }
];

export default function App() {
  const [saldo, setSaldo] = useState<string>('');
  const [estimativa, setEstimativa] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const handleCalcular = () => {
    const val = parseFloat(saldo);
    if (val > 0) {
      setEstimativa(val * 0.70);
      setTimeout(() => {
        calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      alert('Por favor, digite um valor válido.');
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen">
      {/* Header / Hero Section */}
      <header className="bg-navy text-white pt-10 pb-20 px-6 rounded-b-[40px] shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block"
          >
            Consultoria Especializada em Antecipação de FGTS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight"
          >
            Receba seu dinheiro <span className="text-orange">hoje mesmo</span>, sem burocracia!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg opacity-90 mb-8 font-medium text-center mx-auto max-w-2xl"
          >
            Atendimento personalizado para negativados e desempregados. Dinheiro na conta via PIX em até 30 minutos.
          </motion.p>
          
          {/* Foto do Consultor */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-orange overflow-hidden mx-auto shadow-xl bg-white">
              <img 
                src="/consultor-marcelo.jpg" 
                alt="Consultor Marcelo Brasil" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400";
                }}
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-whatsapp text-white text-[10px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap uppercase tracking-tighter shadow-lg">
              Consultor Marcelo Brasil
            </div>
          </div>

          <div className="flex flex-col gap-4 px-4">
            <a 
              href="https://wa.link/8sct8r" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-opacity-90 text-white font-bold py-4 md:py-5 px-4 md:px-8 rounded-2xl text-lg md:text-xl shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 w-full"
            >
              <MessageCircle className="w-6 h-6" />
              Simular pelo WhatsApp
            </a>
          </div>

          {/* Contador de credibilidade */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-orange">+500</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">Clientes Atendidos</p>
            </div>
            <div className="w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-orange">30min</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">PIX na Conta</p>
            </div>
            <div className="w-px bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <p className="text-3xl font-extrabold text-orange">100%</p>
              <p className="text-xs text-white/70 uppercase tracking-wide">Aprovação Online</p>
            </div>
          </div>

          {/* Urgência */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block"></span>
            ⏰ Horário de atendimento: Seg–Sex 08h às 18h | Sáb 08h às 12h
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange opacity-10 rounded-full -mr-32 -mt-32"></div>
      </header>

      {/* Calculadora de Simulação */}
      <section id="simulador" className="px-6 -mt-12 relative z-20">
        <div ref={calculatorRef} className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-navy mb-6 text-center flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5 text-orange" />
            Simulador de Estimativa
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">Qual seu saldo total no FGTS?</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">R$</span>
                  <input 
                    type="number" 
                    value={saldo}
                    onChange={(e) => setSaldo(e.target.value)}
                    placeholder="Ex: 5000" 
                    min="0"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-orange outline-none transition-all text-xl font-bold"
                  />
              </div>
            </div>
            <button 
              onClick={handleCalcular}
              className="w-full bg-navy text-white font-bold py-4 rounded-2xl hover:bg-opacity-90 transition-all"
            >
              Calcular Estimativa
            </button>
            
            <AnimatePresence>
              {estimativa !== null && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-6 bg-navy rounded-2xl border-2 border-orange text-center shadow-inner overflow-hidden"
                >
                  <p className="text-sm text-white opacity-80 mb-1">Você pode receber aproximadamente:</p>
                  <p className="text-4xl font-extrabold text-orange">
                    {estimativa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  <p className="text-[10px] text-white opacity-60 mt-4 leading-tight italic">
                    *O valor real depende da simulação oficial no sistema da Facta. Sujeito a análise de saldo e taxas vigentes.
                  </p>
                  <a
                    href="https://wa.link/8sct8r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-2xl text-base shadow-lg transition-all transform hover:scale-105 w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar pelo WhatsApp
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-navy text-center mb-10">Por que escolher minha consultoria?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Atendimento 100% Humano", desc: "Nada de robôs. Você fala diretamente comigo para tirar todas as suas dúvidas e ter segurança.", color: "bg-navy" },
            { icon: ShieldCheck, title: "Especialista em Saldo Retido", desc: "Experiência comprovada na liberação de saldos que outros consultores não conseguem liberar.", color: "bg-orange" },
            { icon: CheckCircle2, title: "Multa de 40% Protegida", desc: "Transparência total: a multa de 40% continua sendo sua em caso de demissão sem justa causa.", color: "bg-whatsapp" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all group"
            >
              <div className={`w-20 h-20 ${item.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Parceiros e CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-5">Operação realizada com segurança via</p>
          <div className="flex justify-center items-center gap-8 flex-wrap mb-10">
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-3 border border-gray-100">
              <div className="w-8 h-8 bg-[#004B87] rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">F</span>
              </div>
              <div className="text-left">
                <p className="font-extrabold text-navy text-sm leading-none">Facta</p>
                <p className="text-[10px] text-gray-400">Financeira</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center gap-3 border border-gray-100">
              <div className="w-8 h-8 bg-[#0066CC] rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">C</span>
              </div>
              <div className="text-left">
                <p className="font-extrabold text-navy text-sm leading-none">Caixa</p>
                <p className="text-[10px] text-gray-400">Econômica Federal</p>
              </div>
            </div>
          </div>
          <a
            href="https://wa.link/8sct8r"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-lg transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            Quero contratar agora!
          </a>
        </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-navy py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">O que dizem meus clientes em Teresina</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => {
              const initials = t.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();
              const colors = ['bg-orange', 'bg-navy', 'bg-whatsapp'];
              return (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full border-2 border-whatsapp ${colors[i % colors.length]} flex items-center justify-center shrink-0`}>
                      <span className="text-white font-bold text-sm">{initials}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{t.name}</p>
                      <p className="text-orange text-[10px] uppercase font-bold">{t.location}</p>
                    </div>
                  </div>
                  <div className="bg-[#DCF8C6] p-4 rounded-2xl rounded-tl-none shadow-md relative">
                    <p className="text-gray-800 text-sm italic">"{t.text}"</p>
                    <div className="flex justify-end mt-1 items-center gap-1">
                      <span className="text-[10px] text-gray-500">{t.time}</span>
                      <div className="flex text-blue-500">
                        <CheckCircle2 className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passo a Passo Carrossel */}
      <section id="passo-a-passo" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy text-center mb-12">Como contratar? Passo a Passo</h2>
          
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 min-h-[500px] flex flex-col md:flex-row items-center gap-12">
            {/* Simulador Animado (Auto-run) */}
            <div className="w-full md:w-1/2 flex justify-center items-center py-8">
              <AppSimulator />
            </div>

            {/* Conteúdo Dinâmico (Apenas o texto muda) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="min-h-[300px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                      {slides[currentSlide].desc}
                    </p>
                    {currentSlide === 3 ? (
                      <a 
                        href={slides[currentSlide].link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-whatsapp hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 w-full md:w-auto mb-10"
                      >
                        <MessageCircle className="w-6 h-6" />
                        Simular pelo WhatsApp
                      </a>
                    ) : (
                      <a 
                        href={slides[currentSlide].link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange font-bold text-xl hover:underline flex items-center gap-2 mb-10"
                      >
                        <Smartphone className="w-6 h-6" />
                        Baixe o app FGTS
                      </a>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Botões de Controle */}
              <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
                <button 
                  onClick={prevSlide}
                  className="text-gray-400 hover:text-orange transition-colors p-2 bg-gray-50 rounded-full"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                
                <div className="flex gap-3">
                  {slides.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all text-lg ${
                        i === currentSlide ? 'bg-orange text-white shadow-lg scale-110' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="text-gray-400 hover:text-orange transition-colors p-2 bg-gray-50 rounded-full"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-navy text-center mb-8 flex items-center justify-center gap-2">
          <HelpCircle className="w-6 h-6 text-orange" />
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white p-4 rounded-xl border border-gray-100 cursor-pointer group">
              <summary className="font-bold text-navy list-none flex justify-between items-center">
                {faq.q}
                <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-sm text-gray-600 mt-2">{faq.a}</p>
            </details>
          ))}
        </div>
        </div>
      </section>

      {/* Footer Completo */}
      <footer className="bg-navy text-white pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-orange w-6 h-6" />
              Marcelo Brasil
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consultoria especializada em antecipação de FGTS. Ajudamos trabalhadores a resgatarem seu saldo de forma rápida, segura e 100% online. Atendimento humanizado e focado na sua necessidade.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#simulador" className="hover:text-orange transition-colors">Simulador de Saldo</a></li>
              <li><a href="#passo-a-passo" className="hover:text-orange transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-orange transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-orange transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-whatsapp shrink-0" />
                <a href="https://wa.link/8sct8r" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  (86) 98894-9544<br/>
                  Clique para falar agora
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange shrink-0" />
                <span>contato@marcelobrasil.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange shrink-0" />
                <span>Teresina - Piauí<br/>Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
            <h4 className="text-lg font-bold mb-6">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://wa.link/8sct8r" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-whatsapp transition-all duration-300 group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/marcelobrasilconsultor" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-orange transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576454917042" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-orange transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110" />
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Horário de Atendimento:<br/>
              Segunda a Sexta: 08h às 18h<br/>
              Sábado: 08h às 12h
            </p>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-gray-500 mb-4 max-w-4xl mx-auto leading-relaxed">
            AVISO LEGAL: A antecipação do Saque-Aniversário FGTS é uma modalidade de empréstimo com garantia do saldo do FGTS. A operação está sujeita a análise de crédito e condições do banco parceiro. O Custo Efetivo Total (CET) será informado no momento da simulação. Marcelo Brasil atua como correspondente bancário autorizado.
          </p>
          <p className="text-sm text-gray-400">
            © 2026 Marcelo Brasil - Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.link/8sct8r" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-whatsapp text-white p-4 rounded-full shadow-2xl z-50 animate-whatsapp flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold">
          Falar com o Consultor Agora
        </span>
      </a>
    </div>
  );
}
