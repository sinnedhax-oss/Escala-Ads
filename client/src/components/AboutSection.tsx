export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background" id="sobre">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8" data-testid="text-about-title">
          Sobre Nós
        </h2>
        <p className="text-base md:text-lg text-foreground leading-relaxed" data-testid="text-about-description">
          A Escala Ads ajuda criadores e empresas a otimizarem campanhas de marketing digital 
          com foco em performance, ROI e automação de análise de anúncios.
        </p>
      </div>
    </section>
  );
}
