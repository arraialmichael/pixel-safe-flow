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

  const navItems = [
    ["Como funciona", "como-funciona"],
    ["Benefícios", "beneficios"],
    ["Preços", "pricing"],
    ["FAQ", "faq"],
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 backdrop-blur-2xl bg-background/70"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => scrollTo("hero")}
        >
          <div className="relative">
            <Shield className="h-6 w-6 text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(190_100%_50%/0.6)]" />
          </div>
          <span className="text-lg font-display font-bold tracking-tight text-foreground">
            PixelSafe
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => scrollTo("pricing")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn transition-all hover:scale-105 glow-cyan font-medium"
          >
            Começar grátis
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl px-4 pb-4"
        >
          {navItems.map(([label, id]) => (
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
            className="w-full mt-2 bg-primary text-primary-foreground shimmer-btn"
          >
            Começar grátis
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
