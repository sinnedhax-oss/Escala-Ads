import { Mail, Phone } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    icon: Mail,
    label: 'Email',
    value: 'vulgo.sinned@icloud.com',
    href: 'mailto:vulgo.sinned@icloud.com',
  },
  {
    id: 2,
    icon: Phone,
    label: 'Telefone',
    value: '(19) 99975-7331',
    href: 'tel:+5519999757331',
  },
];

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white" id="contato">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12" data-testid="text-contact-title">
          Contato
        </h2>
        
        <div className="space-y-6">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            const Component = contact.href ? 'a' : 'div';
            
            return (
              <Component
                key={contact.id}
                href={contact.href || undefined}
                className="flex items-center gap-4 p-6 bg-card border border-card-border rounded-lg hover-elevate transition-all"
                data-testid={`contact-${contact.label.toLowerCase()}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                  <div className="text-lg font-medium text-card-foreground" data-testid={`text-${contact.label.toLowerCase()}-value`}>
                    {contact.value}
                  </div>
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
