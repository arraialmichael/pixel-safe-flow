import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4">
    {/* Gradient divider */}
    <div className="container mx-auto mb-10">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-[#02deb6]" />
        <span className="font-display font-semibold text-foreground">PixelSafe</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} PixelSafe. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
