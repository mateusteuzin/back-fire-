import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    img: p1,
    title: "Site Institucional - RS Advogados",
    desc: "Feito para um escritório de advocacia. Site institucional completo, com blog integrado e espaço reservado para envio de arquivos e mensagens.",
  },
  {
    img: p2,
    title: "Landing Page - Mentoria Online",
    desc: "Feita para promover o produto de mentoria online, com foco em gatilhos mentais para facilitar a venda e aumento das inscrições. Formato ideal para infoprodutores.",
  },
  {
    img: p3,
    title: "Landing Page - Empresa de Consultoria",
    desc: "Feita com o intuito de divulgar a consultoria em licitações para órgãos públicos. Desenvolvida para aumentar a captação de clientes.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gradient-fire px-8 py-3 border-2 border-primary rounded-2xl">
            PORTFÓLIO
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Veja alguns projetos desenvolvidos que geram{" "}
            <span className="text-gradient-fire font-semibold">vendas</span> e{" "}
            <span className="text-gradient-fire font-semibold">clientes</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-hover group bg-gradient-card border border-border/50 rounded-2xl overflow-hidden p-6"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-fire transition-smooth">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
              <Button variant="fire" size="default" className="w-full">
                Acesse Aqui <ArrowUpRight className="w-4 h-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
