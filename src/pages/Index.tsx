import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { ArrowRight, Star, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      title: "Notebook Gamer Acer Nitro ANV15-51-51UZ Intel Ci5 13ªGen 16GB RAM 512GB SSD RTX4050",
      price: "R$ 6.999",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
      articleSlug: "notebook-gamer-acer-nitro",
      badge: "DESTAQUE"
    },
    {
      title: "Computador Intel Core I5 8GB RAM SSD 240GB Monitor LED 19\"",
      price: "R$ 2.499",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/1sL3qRE",
      articleSlug: "computador-intel-i5-completo",
      badge: "OFERTA"
    },
    {
      title: "Mini PDV Elgin M11 Pro Touch Screen com Impressora WiFi",
      price: "R$ 1.899",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2EY25ET",
      articleSlug: "mini-pdv-elgin-m11-pro"
    },
    {
      title: "Computador Intel Core I3 7ª Geração 8GB SSD 240GB Monitor",
      price: "R$ 1.999",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2igquAH",
      articleSlug: "computador-intel-i3-geracao"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Descubra os{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Melhores Games
              </span>{" "}
              e Equipamentos
            </h1>
            <p className="text-xl text-muted-foreground">
              Análises detalhadas, avaliações reais e as melhores ofertas do Mercado Livre
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://mercadolivre.com/sec/14GQgfK" target="_blank" rel="noopener noreferrer nofollow">
                  Ver Todas as Ofertas
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="neon" size="xl" asChild>
                <Link to="/games">
                  Explorar Categorias
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Star className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Análises Detalhadas</h3>
              <p className="text-sm text-muted-foreground">
                Avaliações completas com foco em qualidade e desempenho
              </p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Marcas Confiáveis</h3>
              <p className="text-sm text-muted-foreground">
                Selecionamos apenas produtos de fabricantes reconhecidos
              </p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Melhores Preços</h3>
              <p className="text-sm text-muted-foreground">
                Ofertas exclusivas direto do Mercado Livre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductCarousel 
        title="🔥 Produtos em Destaque" 
        products={featuredProducts}
      />

      {/* Categories Preview */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            Explore por Categoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Games", href: "/games", icon: "🎮" },
              { title: "Video Games", href: "/videogames", icon: "🕹️" },
              { title: "Fliperamas & Arcade", href: "/arcade", icon: "👾" },
              { title: "Digitais", href: "/digitais", icon: "💿" },
            ].map((category) => (
              <Link
                key={category.href}
                to={category.href}
                className="group relative overflow-hidden rounded-lg bg-gradient-cosmic p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Pronto para Encontrar seu Próximo Game?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Acesse nossas recomendações exclusivas e aproveite as melhores ofertas
          </p>
          <Button variant="gaming" size="xl" asChild>
            <a href="https://mercadolivre.com/sec/14GQgfK" target="_blank" rel="noopener noreferrer nofollow">
              Ver Minhas Recomendações
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
