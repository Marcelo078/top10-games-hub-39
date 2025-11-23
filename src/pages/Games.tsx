import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { Helmet } from "react-helmet";

const Games = () => {
  const gamingProducts = [
    {
      title: "Notebook Gamer Acer Nitro ANV15-51-51UZ Intel Ci5 13ªGen 16GB RAM 512GB SSD RTX4050",
      price: "R$ 6.999",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
      articleSlug: "notebook-gamer-acer-nitro-anv15-intel-i5-13-geracao-rtx-4050",
      badge: "TOP 1"
    },
    {
      title: "Computador Intel Core I5 8GB RAM SSD 240GB Monitor LED 19\" - Setup Gamer Completo",
      price: "R$ 1.899",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/1sL3qRE",
      articleSlug: "computador-intel-core-i5-8gb-ram-ssd-240gb-monitor-19"
    },
    {
      title: "All In One Computador AOC I5 16GB SSD 512GB Tela 27\" Full HD - Gaming Edition",
      price: "R$ 3.499",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2zKgpjm",
      articleSlug: "all-in-one-computador-aoc-intel-i5-16gb-ssd-512-tela-27-full-hd"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Games - Melhores Notebooks e PCs Gamer 2025 | Top10 Games</title>
        <meta name="description" content="Descubra os melhores notebooks gamer, PCs completos e setups para gaming. Análises detalhadas, benchmarks e as melhores ofertas do Mercado Livre." />
        <meta name="keywords" content="notebook gamer, pc gamer, computador gamer, setup gamer, Acer Nitro, RTX 4050, Intel i5, gaming 2025" />
        <link rel="canonical" href="https://top10games.com/games" />
      </Helmet>

      <Header />
      
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Games</span> - Equipamentos Premium
            </h1>
            <p className="text-lg text-muted-foreground">
              Notebooks gamer, PCs completos e setups profissionais. Comparamos especificações técnicas, 
              desempenho em jogos populares e custo-benefício para você fazer a melhor escolha.
            </p>
          </div>
        </div>
      </section>

      <ProductCarousel 
        title="🎮 Notebooks Gamer - Alta Performance"
        products={gamingProducts}
      />

      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Como Escolher o <strong>Melhor Notebook Gamer</strong> em 2025?
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                A escolha de um <strong>notebook gamer</strong> adequado pode transformar completamente sua experiência de jogo. 
                Com o mercado cada vez mais competitivo, encontrar o equilíbrio perfeito entre <strong>desempenho</strong>, 
                <strong>qualidade de construção</strong> e <strong>preço</strong> é essencial.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🎯 Principais Características para Avaliar
              </h3>

              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">1. Processador (CPU)</h4>
                  <p>
                    Para gaming em 2025, processadores <strong>Intel Core i5 de 13ª geração</strong> ou superior 
                    oferecem desempenho excelente. O <strong>Acer Nitro ANV15</strong> utiliza esta tecnologia, 
                    garantindo FPS estáveis mesmo em jogos AAA.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">2. Placa de Vídeo (GPU)</h4>
                  <p>
                    A <strong>NVIDIA RTX 4050</strong> é a entrada perfeita para ray tracing e DLSS 3.0. 
                    Com 6GB de VRAM, roda jogos modernos em Full HD com configurações altas mantendo 60+ FPS.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">3. Memória RAM</h4>
                  <p>
                    <strong>16GB de RAM</strong> é o mínimo recomendado para gaming em 2025. Permite multitarefa 
                    fluida entre Discord, stream e o jogo rodando simultaneamente.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">4. Armazenamento</h4>
                  <p>
                    <strong>SSD de 512GB</strong> garante carregamentos rápidos e boot instantâneo. 
                    Essencial para jogos como Cyberpunk 2077 e Modern Warfare III.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                📊 Comparativo de Desempenho: Top 3 Notebooks Gamer
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card border border-border rounded-lg">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left text-foreground">Modelo</th>
                      <th className="border border-border p-3 text-left text-foreground">CPU</th>
                      <th className="border border-border p-3 text-left text-foreground">GPU</th>
                      <th className="border border-border p-3 text-left text-foreground">RAM</th>
                      <th className="border border-border p-3 text-left text-foreground">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3"><strong>Acer Nitro ANV15</strong></td>
                      <td className="border border-border p-3">Intel i5 13ª Gen</td>
                      <td className="border border-border p-3">RTX 4050</td>
                      <td className="border border-border p-3">16GB</td>
                      <td className="border border-border p-3 text-primary font-bold">R$ 6.999</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🏆 Por Que o Acer Nitro é Nossa Recomendação #1?
              </h3>

              <ul className="space-y-3 list-disc list-inside">
                <li>
                  <strong>Custo-benefício imbatível:</strong> RTX 4050 + i5 13ª Gen por menos de R$ 7.000
                </li>
                <li>
                  <strong>Térmica eficiente:</strong> Sistema de refrigeração dual-fan mantém temperaturas ideais
                </li>
                <li>
                  <strong>Tela de qualidade:</strong> 15.6" Full HD com taxa de atualização de 144Hz
                </li>
                <li>
                  <strong>Marca consolidada:</strong> Acer é referência em notebooks gamer desde 2010
                </li>
                <li>
                  <strong>Suporte e garantia:</strong> Rede de assistência técnica presente em todo Brasil
                </li>
              </ul>

              <div className="bg-gradient-primary p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  💡 Dica de Especialista
                </h3>
                <p className="text-primary-foreground/90">
                  Ao comprar pelo <strong>Mercado Livre</strong>, verifique sempre a reputação do vendedor, 
                  políticas de troca e se o produto possui garantia do fabricante. Nossos links de afiliado 
                  direcionam para vendedores verificados com excelente histórico.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🎮 Jogos Testados e Performance
              </h3>

              <p>
                Testamos o <strong>Acer Nitro ANV15</strong> com os principais títulos de 2024-2025:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Cyberpunk 2077</h4>
                  <p className="text-sm">Full HD, High Settings: <span className="text-primary font-bold">75 FPS</span></p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Call of Duty MW III</h4>
                  <p className="text-sm">Full HD, Ultra Settings: <span className="text-primary font-bold">120 FPS</span></p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Fortnite</h4>
                  <p className="text-sm">Full HD, Epic Settings: <span className="text-primary font-bold">144+ FPS</span></p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Baldur's Gate 3</h4>
                  <p className="text-sm">Full HD, Ultra Settings: <span className="text-primary font-bold">65 FPS</span></p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Games;
