import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4">
    {/* Gradient divider */}
    <div className="container mx-auto mb-10">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-display font-semibold text-foreground">PixelSafe</span>
      </div>
      <div className="flex flex-col items-center md:items-end gap-1">
        <p className="text-xs text-muted-foreground/60">Última atualização: Abril 2026</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PixelSafe. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
