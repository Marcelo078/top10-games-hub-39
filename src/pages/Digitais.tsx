import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { Helmet } from "react-helmet-async";
import { Download, Cloud, ShoppingCart, Zap } from "lucide-react";

const Digitais = () => {
  const digitalProducts = [
    {
      title: "Notebook Gamer Acer Nitro ANV15 - Ideal para Downloads e Streaming",
      price: "R$ 6.999",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
      badge: "ALTO DESEMPENHO"
    },
    {
      title: "All In One AOC I5 16GB - Perfeito para Jogos Digitais",
      price: "R$ 3.899",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2zKgpjm",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Games Digitais - Guia Completo de Plataformas 2025 | Top10 Games</title>
        <meta name="description" content="Tudo sobre jogos digitais: Steam, Epic Games, Xbox Game Pass, PlayStation Plus. Guia completo de plataformas, vantagens e equipamentos recomendados." />
        <meta name="keywords" content="jogos digitais, steam, epic games, game pass, playstation plus, downloads jogos, cloud gaming, digital gaming" />
      </Helmet>

      <Header />
      
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Games Digitais</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              O guia definitivo sobre plataformas de jogos digitais, assinaturas e os melhores equipamentos 
              para aproveitar sua biblioteca digital.
            </p>
          </div>
        </div>
      </section>

      <ProductCarousel 
        title="💿 Equipamentos para Jogos Digitais"
        products={digitalProducts}
      />

      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Guia Completo de <strong>Jogos Digitais</strong> e Plataformas
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                A era dos <strong>jogos digitais</strong> revolucionou como compramos, armazenamos e jogamos. 
                Sem mídia física, com downloads instantâneos e bibliotecas na nuvem, o gaming digital oferece 
                conveniência incomparável.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🎮 Principais Plataformas de Jogos Digitais
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Cloud className="h-8 w-8 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Steam</h4>
                  </div>
                  <p className="text-sm">
                    A <strong>maior plataforma de PC gaming</strong> do mundo com mais de 50.000 jogos.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Promoções frequentes e saldões sazonais</li>
                    <li>Workshop para mods da comunidade</li>
                    <li>Cloud saves entre dispositivos</li>
                    <li>Sistema de conquistas e perfis</li>
                  </ul>
                  <p className="text-sm font-bold text-primary">
                    ✅ Melhor para: Variedade e preços
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Download className="h-8 w-8 text-secondary" />
                    <h4 className="text-lg font-semibold text-foreground">Epic Games Store</h4>
                  </div>
                  <p className="text-sm">
                    Plataforma com <strong>jogos grátis semanais</strong> e exclusivos AAA.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>1-2 jogos grátis toda semana</li>
                    <li>Exclusivos como Fortnite</li>
                    <li>Cupons de desconto frequentes</li>
                    <li>Integração com Unreal Engine</li>
                  </ul>
                  <p className="text-sm font-bold text-secondary">
                    ✅ Melhor para: Jogos grátis e exclusivos
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <ShoppingCart className="h-8 w-8 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">Xbox Game Pass</h4>
                  </div>
                  <p className="text-sm">
                    <strong>Netflix dos games:</strong> assinatura com centenas de jogos inclusos.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>+400 jogos por mensalidade fixa</li>
                    <li>Lançamentos day-one da Microsoft</li>
                    <li>Cloud Gaming (jogue via streaming)</li>
                    <li>Desconto em compras de jogos</li>
                  </ul>
                  <p className="text-sm font-bold text-accent">
                    ✅ Melhor para: Valor por assinatura
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="h-8 w-8 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">PlayStation Plus</h4>
                  </div>
                  <p className="text-sm">
                    Serviço de assinatura do <strong>PlayStation</strong> com catálogo robusto.
                  </p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Catálogo de clássicos PS1, PS2, PS3</li>
                    <li>Jogos mensais inclusos</li>
                    <li>Multiplayer online (PS4/PS5)</li>
                    <li>Tiers variados (Essential, Extra, Premium)</li>
                  </ul>
                  <p className="text-sm font-bold text-primary">
                    ✅ Melhor para: Exclusivos PlayStation
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                💻 Requisitos de Hardware para Jogos Digitais
              </h3>

              <p>
                Diferente de consoles, PCs precisam atender requisitos específicos. Aqui está o que você precisa 
                para diferentes níveis de gaming digital:
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse bg-card border border-border rounded-lg">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left text-foreground">Categoria</th>
                      <th className="border border-border p-3 text-left text-foreground">CPU</th>
                      <th className="border border-border p-3 text-left text-foreground">GPU</th>
                      <th className="border border-border p-3 text-left text-foreground">RAM</th>
                      <th className="border border-border p-3 text-left text-foreground">SSD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3"><strong>Casual Gaming</strong></td>
                      <td className="border border-border p-3">Intel i3/Ryzen 3</td>
                      <td className="border border-border p-3">Integrada</td>
                      <td className="border border-border p-3">8GB</td>
                      <td className="border border-border p-3">256GB</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Mid-Range Gaming</strong></td>
                      <td className="border border-border p-3">Intel i5/Ryzen 5</td>
                      <td className="border border-border p-3">GTX 1660 / RX 580</td>
                      <td className="border border-border p-3">16GB</td>
                      <td className="border border-border p-3">512GB</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>High-End Gaming</strong></td>
                      <td className="border border-border p-3">Intel i7/Ryzen 7</td>
                      <td className="border border-border p-3">RTX 4050+</td>
                      <td className="border border-border p-3">16-32GB</td>
                      <td className="border border-border p-3">1TB</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                📥 Vantagens dos Jogos Digitais
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border-l-4 border-primary p-4">
                  <h4 className="font-semibold text-foreground mb-2">✅ Conveniência Total</h4>
                  <p className="text-sm">
                    Sem necessidade de trocar discos ou cartuchos. Toda sua biblioteca acessível instantaneamente.
                  </p>
                </div>

                <div className="bg-card border-l-4 border-secondary p-4">
                  <h4 className="font-semibold text-foreground mb-2">💰 Preços Melhores</h4>
                  <p className="text-sm">
                    Promoções digitais frequentes com descontos de até 90%. Steam Sale, Black Friday, etc.
                  </p>
                </div>

                <div className="bg-card border-l-4 border-accent p-4">
                  <h4 className="font-semibold text-foreground mb-2">☁️ Cloud Saves</h4>
                  <p className="text-sm">
                    Seus saves sincronizados na nuvem. Jogue em qualquer PC sem perder progresso.
                  </p>
                </div>

                <div className="bg-card border-l-4 border-primary p-4">
                  <h4 className="font-semibold text-foreground mb-2">🔄 Atualizações Automáticas</h4>
                  <p className="text-sm">
                    Patches e DLCs baixados automaticamente. Sempre na versão mais recente.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🖥️ Equipamento Recomendado para Gaming Digital
              </h3>

              <div className="bg-card border border-primary rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  🏆 Notebook Gamer Acer Nitro ANV15
                </h4>
                <p className="text-sm mb-4">
                  O <strong>Acer Nitro</strong> é perfeito para quem quer mobilidade sem sacrificar desempenho. 
                  Com RTX 4050 e 512GB SSD, você pode baixar sua biblioteca Steam/Epic e jogar em qualquer lugar.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-sm">
                    <p><strong>CPU:</strong> Intel i5 13ª Gen</p>
                    <p><strong>GPU:</strong> NVIDIA RTX 4050 6GB</p>
                    <p><strong>RAM:</strong> 16GB DDR5</p>
                  </div>
                  <div className="text-sm">
                    <p><strong>SSD:</strong> 512GB NVMe (rápido!)</p>
                    <p><strong>Tela:</strong> 15.6" Full HD 144Hz</p>
                    <p className="font-bold text-primary text-xl mt-2">R$ 6.999</p>
                  </div>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded p-4 mb-4">
                  <p className="text-sm">
                    <strong>💡 Por que é ideal?</strong> SSD rápido para downloads grandes, RTX para jogos modernos, 
                    16GB RAM para multitask (Discord, Chrome, stream simultâneos).
                  </p>
                </div>
                <a 
                  href="https://mercadolivre.com/sec/12sBVEV"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-block bg-gradient-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Ver Notebook no Mercado Livre →
                </a>
              </div>

              <div className="bg-gradient-primary p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  💡 Dica Pro: Gerenciando sua Biblioteca Digital
                </h3>
                <div className="space-y-3 text-primary-foreground/90">
                  <p>
                    📚 <strong>Use GOG Galaxy:</strong> Agregador que unifica Steam, Epic, Xbox, PlayStation em uma interface
                  </p>
                  <p>
                    💾 <strong>HD Externo:</strong> Armazene jogos que não joga atualmente. Economize espaço no SSD principal
                  </p>
                  <p>
                    🔔 <strong>IsThereAnyDeal.com:</strong> Rastreie preços e receba alertas quando jogos entrarem em promoção
                  </p>
                  <p>
                    🎮 <strong>Game Pass Ultimate:</strong> Se joga muitos jogos diferentes, assinatura compensa mais que comprar
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🌐 Cloud Gaming: O Futuro dos Jogos Digitais?
              </h3>

              <p>
                <strong>Cloud gaming</strong> permite jogar sem hardware potente - tudo roda em servidores remotos:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  <strong>Xbox Cloud Gaming:</strong> Parte do Game Pass Ultimate, jogue via navegador ou app
                </li>
                <li>
                  <strong>GeForce NOW:</strong> NVIDIA streaming service com biblioteca Steam/Epic
                </li>
                <li>
                  <strong>PlayStation Plus Premium:</strong> Streaming de jogos PS4/PS5
                </li>
              </ul>

              <p className="mt-4">
                <em className="text-sm">
                  ⚠️ <strong>Requisito:</strong> Conexão de internet estável com pelo menos 25 Mbps para melhor experiência.
                </em>
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Digitais;
