import heroImage from "/assets/Digital_marketing_analytics_hero_aca90ab5.png";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
          Escala Ads
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium" data-testid="text-hero-slogan">
          Consultoria em Anúncios e Estratégias Digitais
        </p>
      </div>
    </section>
  );
}
