import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/backfire-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-[#0F0F10]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a 
          href="#top" 
          aria-label="BackFire — voltar ao topo"
          className="group transition-smooth hover:scale-105"
        >
          <img 
            src={logo} 
            alt="BackFire" 
            className="h-10 w-auto object-contain"
          />
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BackFire. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-smooth"><Instagram className="w-5 h-5" /></a>

          <a href="#" aria-label="Email" className="hover:text-primary transition-smooth"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
