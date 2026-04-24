import { Linkedin } from "lucide-react";
import mateusImg from "@/assets/team-mateus.jpg";
import jandersonImg from "@/assets/team-janderson.jpg";

const team = [
  {
    name: "Mateus Alves",
    role: "Análise de Dados & Desenvolvimento",
    desc: "Focado em análise de dados, automação, Excel, Power BI e desenvolvimento web.",
    img: mateusImg,
    skills: ["Power BI", "Excel", "Automação", "Web Dev"],
  },
  {
    name: "Janderson Dias",
    role: "Criador da BackFire · Full Stack",
    desc: "Desenvolvedor Full Stack com dezenas de projetos entregues em diferentes setores. Sólida experiência em React, Next.js, Node.js, TypeScript, Tailwind CSS e SCSS. Entrego landing pages e aplicações personalizadas e estratégicas, com diferencial em marketing digital para potencializar conversão e crescimento.",
    img: jandersonImg,
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Marketing"],
  },
];

export function Team() {
  return (
    <section id="sobre" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full" aria-hidden />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-gradient-fire px-8 py-3 border-2 border-primary rounded-2xl">
            QUEM SOMOS
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Somos uma equipe focada em <span className="text-foreground font-semibold">tecnologia</span>,{" "}
            <span className="text-foreground font-semibold">dados</span> e{" "}
            <span className="text-foreground font-semibold">soluções digitais</span>. Unimos
            estratégia e código para transformar ideias em resultados reais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <article
              key={member.name}
              className="card-hover group bg-gradient-card border border-border/50 rounded-3xl p-8 text-center"
            >
              <div className="relative mx-auto mb-6 w-36 h-36">
                <div className="absolute inset-0 rounded-full bg-gradient-fire blur-xl opacity-40 group-hover:opacity-80 transition-smooth" aria-hidden />
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-fire">
                  <img
                    src={member.img}
                    alt={`Foto de ${member.name}`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-full rounded-full object-cover bg-card"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{member.desc}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
                href="#"
                aria-label={`LinkedIn de ${member.name}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-gradient-fire hover:text-white transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
