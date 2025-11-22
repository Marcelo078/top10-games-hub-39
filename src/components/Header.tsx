import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, Gamepad2 } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Games", href: "/games" },
    { label: "Video Games", href: "/videogames" },
    { label: "Fliperamas & Arcade", href: "/arcade" },
    { label: "Digitais", href: "/digitais" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Top10 Games
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="hero" size="sm" asChild className="hidden md:inline-flex">
            <a
              href="https://mercadolivre.com/sec/14GQgfK"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Ver Ofertas
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild className="w-full">
              <a
                href="https://mercadolivre.com/sec/14GQgfK"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Ver Ofertas
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
