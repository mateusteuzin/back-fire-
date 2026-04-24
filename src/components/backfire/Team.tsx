


const team = [
  {
    name: "Mateus Alves",
    role: "Front-End & Web Designer",
    desc: "Desenvolvedor Front-End e Web Designer com experiência na criação de interfaces modernas, intuitivas e responsivas. Atuo no desenvolvimento de landing pages e sites personalizados, focando em design estratégico, usabilidade e conversão. Busco sempre entregar projetos visualmente profissionais que fortaleçam a presença digital e atraiam mais clientes.",
    img: "/mateus.png",
  },
  {
    name: "Janderson Dias",
    role: "Criador da BackFire",
    desc: "Desenvolvedor Full Stack com dezenas de projetos entregues em diferentes setores, atuando na criação de soluções digitais modernas e estratégicas. Experiência no desenvolvimento de landing pages e aplicações personalizadas, com foco em performance, usabilidade e crescimento de negócios. Buscando sempre entregar projetos que geram resultados reais, fortalecendo a presença digital e aumentando a conversão de clientes",
    img: "/janderson.jpeg",
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
              className="card-hover group bg-gradient-card border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center"
            >
              <div className="relative mb-5 w-36 h-36">
                <div className="absolute inset-0 rounded-full bg-gradient-fire blur-xl opacity-40 group-hover:opacity-80 transition-smooth" aria-hidden />
                <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-fire">
                  <img
                    src={member.img}
                    alt={`Foto de ${member.name}`}
                    loading="lazy"
                    width={160}
                    height={160}
                    className="w-full h-full rounded-full object-cover bg-card transition-smooth group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-[280px] text-center mx-auto">
                {member.desc}
              </p>            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
