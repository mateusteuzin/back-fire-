import { WhatsAppIcon } from "./WhatsAppIcon";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center bg-gradient-card border border-border/50">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-fire opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Pronto para <span className="text-gradient-fire">incendiar</span> suas vendas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Solicite um orçamento sem compromisso. Em poucas horas você recebe uma proposta
              personalizada para o seu projeto.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a 
                href="https://wa.me/5569999627328?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." 
                target="_blank" 
                rel="noreferrer"
              >
                <WhatsAppIcon className="w-6 h-6 mr-2" />
                Solicitar Orçamento Grátis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
