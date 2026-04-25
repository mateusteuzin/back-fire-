import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5569999627328?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-bounce hover:scale-110 active:scale-95 group"
      aria-label="Falar pelo WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-0 group-hover:opacity-40 transition-smooth" aria-hidden />
      <WhatsAppIcon className="w-8 h-8 relative z-10" />
      
      <span className="absolute right-full mr-4 px-4 py-2 bg-card border border-border/50 text-foreground text-sm font-medium rounded-xl opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-smooth whitespace-nowrap shadow-xl">
        Fale conosco agora!
      </span>
    </a>
  );
}
