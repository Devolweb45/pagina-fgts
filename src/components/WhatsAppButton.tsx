import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  className?: string;
  showTooltip?: boolean;
  tooltipText?: string;
  variant?: 'primary' | 'secondary' | 'floating';
}

export default function WhatsAppButton({ 
  className = "", 
  showTooltip = true, 
  tooltipText = "Receba seu PIX em 30 min!", 
  variant = 'primary' 
}: WhatsAppButtonProps) {
  
  // Logic for Floating Button (Independent to avoid horizontal expansion)
  if (variant === 'floating') {
    return (
      <a 
        href="https://wa.link/8sct8r" 
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 bg-whatsapp text-white p-4 rounded-full shadow-2xl z-50 animate-whatsapp flex items-center justify-center group hover:scale-105 transition-all duration-300 w-auto h-auto min-w-[64px] min-h-[64px] ${className}`}
      >
        <MessageCircle className="w-8 h-8 shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold text-sm">
          Falar com o Consultor Agora
        </span>
        
        {/* Glow dot */}
        <div className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
        </div>
      </a>
    );
  }

  // Logic for Internal Buttons (Magnetic effect)
  const baseStyles = "relative flex items-center justify-center gap-3 font-bold transition-all transform hover:scale-105 shadow-lg group";
  const variantStyles = variant === 'primary' 
    ? "bg-whatsapp hover:bg-opacity-90 text-white py-4 md:py-5 px-6 md:px-10 rounded-2xl text-lg md:text-xl w-full"
    : "bg-orange hover:bg-opacity-90 text-white py-4 px-8 rounded-2xl text-lg";

  return (
    <div className="relative w-full">
      {/* Tooltip Flutuante */}
      {showTooltip && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: -10, scale: 1 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: 'reverse', 
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] md:text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-bold shadow-xl z-30 border border-orange/40"
        >
          <span className="relative z-10">{tooltipText}</span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-navy rotate-45 border-r border-b border-orange/40"></div>
        </motion.div>
      )}

      {/* Botão Principal */}
      <motion.a
        href="https://wa.link/8sct8r"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles} ${className}`}
        whileTap={{ scale: 0.95 }}
      >
        {/* Camada de Pulsação (Sonar) */}
        <motion.span 
          animate={{ scale: [1, 1.1, 1.2], opacity: [0.3, 0.2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-whatsapp rounded-[inherit] -z-10"
        />

        <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span>{variant === 'primary' ? 'Simular pelo WhatsApp' : 'Quero contratar agora!'}</span>

        {/* Indicador Online (Glow) */}
        <div className="absolute top-2 right-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-white"></span>
        </div>
      </motion.a>
    </div>
  );
}
