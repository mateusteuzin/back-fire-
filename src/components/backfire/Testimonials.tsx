import { Quote, Star } from "lucide-react";
import cliente1 from "@/assets/depoimentos 1.jfif";
import cliente2 from "@/assets/depoimentos 2.jfif";
import cliente3 from "@/assets/depoimentos 3.jfif";

const testimonials = [
  {
    text: "O trabalho da equipe superou minhas expectativas. Nossa plataforma de vendas triplicou de conversão no primeiro mês graças ao design rápido e muito intuitivo!",
    name: "Lucas",
    role: "Dono de E-commerce",
    img: cliente1,
  },
  {
    text: "Como advogado, eu precisava de um site que transmitisse muita seriedade e confiança. O resultado final ficou extremamente profissional e me trouxe excelentes contatos.",
    name: "Roberto",
    role: "Advogado Associado",
    img: cliente2,
  },
  {
    text: "Vocês transformaram a presença digital da minha clínica. Hoje, minhas pacientes elogiam a facilidade e a beleza do site toda vez que vão agendar um horário.",
    name: "Camila",
    role: "Dona de Clínica de Estética",
    img: cliente3,
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-full" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gradient-fire px-8 py-3 border-2 border-primary rounded-2xl">
            DEPOIMENTOS
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Quem confiou na BackFire teve <span className="text-foreground font-semibold">resultados reais</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="card-hover group relative bg-[#1A1A1D] border border-primary/40 rounded-3xl p-8 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/50 transition-smooth"
                aria-hidden
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8 flex-1 text-base">
                “{t.text}”
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-fire blur-md opacity-50 group-hover:opacity-90 transition-smooth" aria-hidden />
                  <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-fire">
                    <img
                      src={t.img}
                      alt={`Foto de ${t.name}`}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="w-full h-full rounded-full object-cover bg-card"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary font-semibold">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
