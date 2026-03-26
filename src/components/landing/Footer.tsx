import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary" />
        <span className="font-semibold text-foreground">PixelSafe</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} PixelSafe. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
