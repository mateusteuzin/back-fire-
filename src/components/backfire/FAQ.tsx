import { Flame, Headset } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o processo de criação?",
    a: "Começamos com uma reunião para entender seu negócio e objetivos. Em seguida criamos o layout, validamos com você e partimos para o desenvolvimento. Você acompanha cada etapa e recebe o site pronto para vender.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Aceitamos PIX, cartão de crédito em até 10x e boleto. Trabalhamos com 50% na contratação e 50% na entrega final, sem surpresas e sem mensalidades obrigatórias.",
  },
  {
    q: "Em quanto tempo o site fica pronto?",
    a: "Landing pages em até 7 dias, sites institucionais em até 30 dias. O prazo depende da complexidade e da agilidade no envio dos materiais (textos, imagens, logo).",
  },
  {
    q: "Posso solicitar alterações?",
    a: "Sim! Todo projeto inclui rodadas de revisão para garantir que o resultado fique exatamente como você imaginou. Após a entrega oferecemos suporte para ajustes pontuais.",
  },
  {
    q: "O site é responsivo e otimizado para Google?",
    a: "Sim. Todos os nossos sites são 100% responsivos (celular, tablet e desktop) e desenvolvidos com SEO técnico, performance e boas práticas para ranquear bem no Google.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gradient-fire px-8 py-3 border-2 border-primary rounded-2xl">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Tire suas dúvidas antes de dar o próximo passo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center max-w-6xl mx-auto">
          {/* Left decorative icon */}
          <div className="relative flex justify-center lg:justify-start animate-fade-up">
            <div className="group relative w-64 h-64 md:w-80 md:h-80 transition-bounce hover:scale-105">
              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse-glow group-hover:bg-primary/50 transition-smooth"
                aria-hidden
              />
              {/* Rotating ring */}
              <div
                className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30"
                style={{ animation: "spin 18s linear infinite" }}
                aria-hidden
              />
              <div
                className="absolute inset-10 rounded-full border-2 border-primary/40 animate-pulse-glow"
                style={{ animationDelay: "0.6s" }}
                aria-hidden
              />
              {/* Center gradient disc with chama icon */}
              <div className="absolute inset-16 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(255,69,0,0.5)]"
                style={{
                  background: "linear-gradient(135deg, #FF4500, #FF7A00)",
                }}
              >
                <Flame
                  className="w-20 h-20 md:w-24 md:h-24 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  strokeWidth={1.8}
                  fill="white"
                  fillOpacity={0.15}
                />
              </div>
              {/* Floating support badge */}
              <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 bg-[#1A1A1D] border border-primary/40 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <Headset className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground">Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Right accordion */}
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-4 animate-fade-up"
            style={{ animationDelay: "150ms", animationFillMode: "both" }}
          >
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="bg-[#1A1A1D] border border-border/40 rounded-2xl px-6 transition-smooth hover:border-primary/60 hover:shadow-[0_0_30px_rgba(255,69,0,0.15)] data-[state=open]:border-primary/60 data-[state=open]:shadow-[0_0_30px_rgba(255,69,0,0.2)]"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-5 [&>svg]:text-primary [&>svg]:h-5 [&>svg]:w-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
