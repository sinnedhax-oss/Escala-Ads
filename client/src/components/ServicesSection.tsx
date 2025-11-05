import { BarChart3, TrendingUp, Sparkles, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Análise de anúncios e métricas',
    icon: BarChart3,
  },
  {
    id: 2,
    title: 'Estratégias de tráfego pago',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Otimização de criativos',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Consultoria para infoprodutores',
    icon: Users,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30" id="servicos">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-12" data-testid="text-services-title">
          Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-card border border-card-border rounded-lg p-8 hover-elevate transition-all"
                data-testid={`card-service-${service.id}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground" data-testid={`text-service-title-${service.id}`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
