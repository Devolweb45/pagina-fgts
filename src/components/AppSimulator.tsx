import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  ChevronRight, 
  CheckCircle2, 
  Search,
  MessageCircle,
  Smartphone
} from 'lucide-react';

const screens = [
  {
    id: 'login',
    title: 'Acesse o App FGTS',
    description: 'Abra o aplicativo oficial da Caixa no seu celular.',
    color: 'bg-[#005CA9]' // Azul Caixa
  },
  {
    id: 'menu',
    title: 'Escolha a Modalidade',
    description: 'Selecione a opção "Saque-Aniversário do FGTS".',
    color: 'bg-white'
  },
  {
    id: 'autorizar',
    title: 'Autorize a Facta',
    description: 'Vá em "Autorizar Bancos" e busque por FACTA FINANCEIRA.',
    color: 'bg-white'
  },
  {
    id: 'sucesso',
    title: 'Tudo Pronto!',
    description: 'Agora é só me chamar no WhatsApp para seu PIX.',
    color: 'bg-[#EBF9F1]' // Verde Sucesso suave
  }
];

export default function AppSimulator() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 4000); // 4 segundos por tela para dar tempo de ler
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-navy rounded-[3rem] p-3 border-[8px] border-gray-800 shadow-2xl overflow-hidden ring-4 ring-orange/20 transition-all transform hover:scale-105">
      {/* Notch / Speaker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
      
      {/* App Content Area */}
      <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col pt-8">
        
        {/* Status Bar Mockup */}
        <div className="flex justify-between px-6 py-2 text-[10px] font-bold text-gray-400">
          <span>09:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentScreen === 0 && (
            <motion.div 
              key="login"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-6 bg-[#005CA9] text-white text-center"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl animate-bounce">
                <Smartphone className="w-10 h-10 text-[#005CA9]" />
              </div>
              <h4 className="font-bold text-xl mb-2 italic">FGTS</h4>
              <p className="text-sm opacity-80 mb-8 leading-tight">CAIXA Econômica Federal</p>
              
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-full h-12 bg-[#FF7B00] rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white/20"
              >
                ENTRAR
              </motion.div>
            </motion.div>
          )}

          {currentScreen === 1 && (
            <motion.div 
              key="menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 p-4 bg-gray-50 overflow-y-auto pt-4"
            >
              <div className="bg-white p-3 rounded-xl mb-4 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                <div className="h-2 w-24 bg-gray-100 rounded"></div>
              </div>
              
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-3">Serviços</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="bg-white p-3 rounded-xl shadow-sm h-16 opacity-40"></div>
                 ))}
              </div>

              <motion.div 
                animate={{ scale: [1, 1.05, 1], backgroundColor: ['#ffffff', '#fff7ed', '#ffffff'] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="bg-white p-4 rounded-xl shadow-md border-2 border-orange flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange/10 text-orange rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-navy leading-tight">Saque-<br/>Aniversário</span>
                </div>
                <ChevronRight className="w-4 h-4 text-orange" />
              </motion.div>
            </motion.div>
          )}

          {currentScreen === 2 && (
            <motion.div 
              key="autorizar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 p-5 bg-white pt-6"
            >
              <h5 className="text-[12px] font-bold text-navy mb-4">Autorize nossos Bancos Parceiros</h5>
              
              <div className="relative mb-4">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Search className="w-4 h-4 text-orange" />
                </div>
                <motion.div 
                  initial={{ width: "30%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="w-full py-3 pl-9 bg-gray-100 rounded-full text-[12px] font-bold text-navy overflow-hidden whitespace-nowrap border border-orange/20"
                >
                  <motion.span
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    BUSCAR BANCO...
                  </motion.span>
                </motion.div>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'FACTA FINANCEIRA', color: 'bg-[#004B87]', short: 'F' },
                  { name: 'BANCO SAFRA', color: 'bg-[#C5A059]', short: 'S' },
                  { name: 'BANCO PAN', color: 'bg-[#00AEEF]', short: 'P' }
                ].map((bank, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white p-3 rounded-xl flex items-center justify-between border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 ${bank.color} rounded-lg flex items-center justify-center text-white text-[10px] font-black`}>{bank.short}</div>
                      <span className="text-[10px] font-bold text-navy">{bank.name}</span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-[9px] text-gray-400 mt-6 text-center italic leading-tight bg-gray-50 p-2 rounded-lg">
                Atuamos com os melhores bancos para garantir a sua menor taxa!
              </p>
            </motion.div>
          )}

          {currentScreen === 3 && (
            <motion.div 
              key="sucesso"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex-1 flex flex-col items-center justify-center p-6 bg-whatsapp text-white text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl"
              >
                <CheckCircle2 className="w-10 h-10 text-whatsapp" />
              </motion.div>
              <h4 className="font-bold text-xl mb-4 leading-tight">Autorização Concluída!</h4>
              <p className="text-xs opacity-90 mb-8 leading-relaxed">
                Agora o Marcelo Brasil já consegue liberar o seu dinheiro no sistema.
              </p>
              
              <a
                href="https://wa.link/8sct8r"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-whatsapp rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                CONTRATAR AGORA
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Navigation Overlay */}
        <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-center gap-2 z-30">
          {screens.map((_, i) => (
            <motion.div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentScreen ? 'w-8 bg-orange shadow-sm' : 'w-2 bg-gray-200 opacity-50'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Side Buttons Mockup */}
      <div className="absolute top-24 -right-1 w-1.5 h-12 bg-gray-700 rounded-l-md"></div>
      <div className="absolute top-40 -right-1 w-1.5 h-16 bg-gray-700 rounded-l-md"></div>
      <div className="absolute top-24 -left-1 w-1.5 h-8 bg-gray-700 rounded-r-md"></div>
    </div>
  );
}
