import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/backfire-logo.png";

const navLinks = [
  { label: "Início", href: "#top" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 animate-fade-up transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-background/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#top"
          aria-label="BackFire — voltar ao topo"
          className="group cursor-pointer flex items-center"
        >
          <div className="relative">
            <div
              className="absolute inset-0 blur-xl bg-primary/40 opacity-60 group-hover:opacity-100 transition-smooth rounded-full"
              aria-hidden
            />
            <img
              src={logo}
              alt="BackFire"
              width={1974}
              height={797}
              className="relative h-10 md:h-12 w-auto object-contain transition-bounce group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/90 hover:text-primary transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-fire after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="default" asChild>
            <a href="#contato">Fale Conosco</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-card/60 text-foreground hover:text-primary hover:border-primary transition-smooth"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-border/40">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-smooth font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" asChild className="mt-3">
            <a href="#contato" onClick={() => setOpen(false)}>
              Fale Conosco
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
