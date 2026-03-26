import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">PixelSafe</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Como funciona", "como-funciona"],
            ["Benefícios", "beneficios"],
            ["Preços", "pricing"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("pricing")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue transition-all hover:scale-105"
          >
            Começar grátis
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-background px-4 pb-4"
        >
          {[
            ["Como funciona", "como-funciona"],
            ["Benefícios", "beneficios"],
            ["Preços", "pricing"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("pricing")}
            className="w-full mt-2 bg-primary text-primary-foreground"
          >
            Começar grátis
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
