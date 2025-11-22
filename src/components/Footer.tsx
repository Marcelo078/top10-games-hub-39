import { Link } from "react-router-dom";
import { Gamepad2, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <Gamepad2 className="h-6 w-6 text-primary" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Top10 Games
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              As melhores análises de produtos com foco em qualidade, procedência de marcas e avaliações reais.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/games" className="text-muted-foreground hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/videogames" className="text-muted-foreground hover:text-primary transition-colors">
                  Video Games
                </Link>
              </li>
              <li>
                <Link to="/arcade" className="text-muted-foreground hover:text-primary transition-colors">
                  Fliperamas & Arcade
                </Link>
              </li>
              <li>
                <Link to="/digitais" className="text-muted-foreground hover:text-primary transition-colors">
                  Digitais
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-muted-foreground hover:text-primary transition-colors">
                  Transparência
                </Link>
              </li>
              <li>
                <Link to="/isencao" className="text-muted-foreground hover:text-primary transition-colors">
                  Isenção de Responsabilidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners & Social */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Parceiros</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <a
                  href="https://melhor-reviews.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Melhor Reviews
                </a>
              </li>
              <li>
                <a
                  href="https://ofertadigitalbr.valeapena.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Oferta Digital BR
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Top10 Games. Todos os direitos reservados. |{" "}
            <Link to="/sobre" className="hover:text-primary transition-colors">
              Sobre Nós
            </Link>
          </p>
          <p className="mt-2 text-xs">
            Como Afiliado da Mercado Livre, recebemos comissão por vendas qualificadas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
