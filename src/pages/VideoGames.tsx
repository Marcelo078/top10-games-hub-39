import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { Helmet } from "react-helmet-async";

const VideoGames = () => {
  const videoGameProducts = [
    {
      title: "All In One Computador AOC I5 16GB SSD 512GB Tela 27\" Full HD Branco",
      price: "R$ 3.499",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2zKgpjm",
      articleSlug: "all-in-one-computador-aoc-intel-i5-16gb-ssd-512-tela-27-full-hd",
      badge: "ALL-IN-ONE"
    },
    {
      title: "Notebook Gamer Acer Nitro ANV15-51-51UZ Intel Ci5 13ªGen 16GB RAM 512GB SSD RTX4050",
      price: "R$ 6.999",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
      articleSlug: "notebook-gamer-acer-nitro-anv15-intel-i5-13-geracao-rtx-4050",
      badge: "PORTÁTIL"
    },
    {
      title: "Computador Intel Core I5 8GB RAM SSD 240GB Monitor LED 19\" - Setup Completo",
      price: "R$ 1.899",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/1sL3qRE",
      articleSlug: "computador-intel-core-i5-8gb-ram-ssd-240gb-monitor-19"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Video Games - Melhores Consoles e Equipamentos 2025 | Top10 Games</title>
        <meta name="description" content="Análises completas de consoles, acessórios e equipamentos para video games. Encontre os melhores preços e ofertas do Mercado Livre." />
        <meta name="keywords" content="video games, consoles, playstation, xbox, nintendo switch, controles, headsets gamer, monitores gaming" />
      </Helmet>

      <Header />
      
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Video Games</span> - Equipamentos e Consoles
            </h1>
            <p className="text-lg text-muted-foreground">
              Descubra os melhores equipamentos para sua experiência de gaming, desde PCs all-in-one 
              até notebooks portáteis de alto desempenho.
            </p>
          </div>
        </div>
      </section>

      <ProductCarousel 
        title="🕹️ Equipamentos para Video Games"
        products={videoGameProducts}
      />

      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Como Montar seu <strong>Setup Gamer Perfeito</strong>?
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Montar um <strong>setup gamer completo</strong> requer planejamento e conhecimento sobre 
                cada componente. Neste guia, vamos explorar as melhores opções de equipamentos disponíveis 
                no mercado brasileiro.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🖥️ All-in-One vs Desktop Tradicional
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">All-in-One</h4>
                  <p className="text-sm mb-3">
                    Computadores <strong>all-in-one</strong> integram monitor e CPU em um único dispositivo.
                  </p>
                  <p className="text-sm font-semibold text-accent mb-2">✅ Vantagens:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Design limpo e minimalista</li>
                    <li>Economia de espaço</li>
                    <li>Menos cabos para gerenciar</li>
                    <li>Fácil instalação</li>
                  </ul>
                  <p className="text-sm font-semibold text-destructive mt-3 mb-2">❌ Desvantagens:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Upgrade limitado</li>
                    <li>Preço geralmente mais alto</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-primary mb-3">Desktop Tradicional</h4>
                  <p className="text-sm mb-3">
                    <strong>PCs montados</strong> com gabinete separado do monitor.
                  </p>
                  <p className="text-sm font-semibold text-accent mb-2">✅ Vantagens:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Fácil upgrade de componentes</li>
                    <li>Melhor custo-benefício</li>
                    <li>Mais opções de personalização</li>
                    <li>Refrigeração superior</li>
                  </ul>
                  <p className="text-sm font-semibold text-destructive mt-3 mb-2">❌ Desvantagens:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Ocupa mais espaço</li>
                    <li>Mais cabos e complexidade</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                📊 Comparativo: Top 3 Equipamentos para Video Games
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card border border-border rounded-lg">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left text-foreground">Modelo</th>
                      <th className="border border-border p-3 text-left text-foreground">Tipo</th>
                      <th className="border border-border p-3 text-left text-foreground">RAM</th>
                      <th className="border border-border p-3 text-left text-foreground">SSD</th>
                      <th className="border border-border p-3 text-left text-foreground">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3"><strong>AOC I5 All-in-One</strong></td>
                      <td className="border border-border p-3">All-in-One 27"</td>
                      <td className="border border-border p-3">16GB</td>
                      <td className="border border-border p-3">512GB</td>
                      <td className="border border-border p-3 text-primary font-bold">R$ 3.899</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Desktop I5 Completo</strong></td>
                      <td className="border border-border p-3">Desktop + Monitor 19"</td>
                      <td className="border border-border p-3">8GB</td>
                      <td className="border border-border p-3">240GB</td>
                      <td className="border border-border p-3 text-primary font-bold">R$ 2.499</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Acer Nitro Notebook</strong></td>
                      <td className="border border-border p-3">Notebook 15.6"</td>
                      <td className="border border-border p-3">16GB</td>
                      <td className="border border-border p-3">512GB</td>
                      <td className="border border-border p-3 text-primary font-bold">R$ 6.999</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🎮 Qual Opção Escolher?
              </h3>

              <div className="space-y-4">
                <div className="bg-card border-l-4 border-primary p-4">
                  <h4 className="font-semibold text-foreground mb-2">👨‍💼 Para Trabalho + Gaming Casual</h4>
                  <p className="text-sm">
                    <strong>AOC I5 All-in-One</strong> - Design elegante, ótimo para escritório e jogos leves. 
                    Tela grande de 27" perfeita para produtividade.
                  </p>
                </div>

                <div className="bg-card border-l-4 border-secondary p-4">
                  <h4 className="font-semibold text-foreground mb-2">💰 Melhor Custo-Benefício</h4>
                  <p className="text-sm">
                    <strong>Desktop I5 Completo</strong> - Entrada econômica no mundo gamer com possibilidade 
                    de upgrade futuro. Ideal para quem está começando.
                  </p>
                </div>

                <div className="bg-card border-l-4 border-accent p-4">
                  <h4 className="font-semibold text-foreground mb-2">🚀 Gaming de Alto Desempenho</h4>
                  <p className="text-sm">
                    <strong>Acer Nitro Notebook</strong> - RTX 4050 garante performance em jogos AAA. 
                    Portabilidade para levar seu setup a qualquer lugar.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-primary p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  💡 Dica de Especialista
                </h3>
                <p className="text-primary-foreground/90">
                  Ao escolher equipamentos para <strong>video games</strong>, considere não apenas o hardware 
                  mas também periféricos de qualidade: mouse gamer, teclado mecânico, headset e mousepad. 
                  Esses itens fazem diferença significativa na experiência de jogo!
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoGames;
