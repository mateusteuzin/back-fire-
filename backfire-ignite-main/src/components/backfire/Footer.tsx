import { Flame, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-primary" />
          <span className="font-bold">Back<span className="text-gradient-fire">Fire</span></span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BackFire. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-smooth"><Instagram className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-smooth"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="Email" className="hover:text-primary transition-smooth"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
