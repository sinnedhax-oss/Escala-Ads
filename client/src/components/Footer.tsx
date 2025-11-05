export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-sm" data-testid="text-copyright">
          © 2025 Escala Ads — Todos os direitos reservados.
        </p>
        <a
          href="/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:opacity-80 transition-opacity inline-block"
          data-testid="link-privacy-policy"
        >
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
}
