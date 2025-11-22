import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import { Helmet } from "react-helmet-async";

const Arcade = () => {
  const arcadeProducts = [
    {
      title: "Mini PDV Elgin M11 Pro Touch Screen com Impressora WiFi - Sistema de Pontos",
      price: "R$ 1.899",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2EY25ET",
      badge: "AUTOMAÇÃO"
    },
    {
      title: "Computador Intel Core I3 7ª Geração 8GB SSD 240GB Monitor - Setup Arcade",
      price: "R$ 1.999",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop",
      affiliateLink: "https://mercadolivre.com/sec/2igquAH",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fliperamas & Arcade - Equipamentos e Sistemas 2025 | Top10 Games</title>
        <meta name="description" content="Equipamentos para montagem de fliperamas, arcades e sistemas de pontos. Guia completo com os melhores produtos do Mercado Livre." />
        <meta name="keywords" content="fliperama, arcade, retro gaming, bartop arcade, gabinete arcade, controles arcade, sistema de pontos, mini pdv" />
      </Helmet>

      <Header />
      
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Fliperamas & Arcade</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Equipamentos para montagem de fliperamas caseiros, arcades profissionais e sistemas de gerenciamento.
            </p>
          </div>
        </div>
      </section>

      <ProductCarousel 
        title="👾 Equipamentos para Arcade e Automação"
        products={arcadeProducts}
      />

      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Guia Completo: Como Montar seu <strong>Fliperama Caseiro</strong>
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                O movimento <strong>retro gaming</strong> está em alta! Montar um <strong>fliperama caseiro</strong> 
                (também conhecido como bartop arcade) é mais acessível do que nunca. Neste guia, exploramos 
                equipamentos essenciais e configurações recomendadas.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🕹️ Componentes Essenciais de um Fliperama
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="text-4xl mb-2">🖥️</div>
                  <h4 className="text-lg font-semibold text-primary">1. Computador / SBC</h4>
                  <p className="text-sm">
                    CPU que rodará os emuladores. Pode ser um <strong>PC compacto</strong>, 
                    Raspberry Pi ou mini PC.
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Recomendado: Intel Core i3 ou superior
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="text-4xl mb-2">🖼️</div>
                  <h4 className="text-lg font-semibold text-primary">2. Monitor / Display</h4>
                  <p className="text-sm">
                    Tela para exibir os jogos. Pode reutilizar um monitor antigo ou comprar específico.
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Tamanho ideal: 17" a 24"
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="text-4xl mb-2">🎮</div>
                  <h4 className="text-lg font-semibold text-primary">3. Controles Arcade</h4>
                  <p className="text-sm">
                    Joysticks e botões estilo arcade autênticos. Existem kits USB prontos.
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Marca recomendada: Sanwa ou similares
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div className="text-4xl mb-2">🪵</div>
                  <h4 className="text-lg font-semibold text-primary">4. Gabinete MDF</h4>
                  <p className="text-sm">
                    Estrutura de madeira que abriga todos os componentes. Pode ser comprado pronto ou DIY.
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Opção: Corte a laser personalizado
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🔧 Passo a Passo: Montagem de Fliperama Caseiro
              </h3>

              <ol className="list-decimal list-inside space-y-4 ml-4">
                <li>
                  <strong>Escolha o projeto:</strong> Bartop (mesa), cabine completa ou mini arcade?
                </li>
                <li>
                  <strong>Adquira o hardware:</strong> PC (como nosso <strong>Intel i3 com SSD 240GB</strong>), 
                  monitor e kit de controles
                </li>
                <li>
                  <strong>Monte ou compre o gabinete:</strong> MDF com espessura 15mm é ideal
                </li>
                <li>
                  <strong>Instale o sistema operacional:</strong> RetroPie, Recalbox ou Batocera Linux
                </li>
                <li>
                  <strong>Configure os emuladores:</strong> MAME para arcade, emuladores de consoles clássicos
                </li>
                <li>
                  <strong>Adicione as ROMs:</strong> Jogos legalmente obtidos (ou de domínio público)
                </li>
                <li>
                  <strong>Configure controles:</strong> Mapeamento de botões para cada emulador
                </li>
                <li>
                  <strong>Personalize:</strong> Adesivos, marquee iluminada, sistema de som
                </li>
              </ol>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                🎯 Produto Recomendado para Base do Arcade
              </h3>

              <div className="bg-card border border-primary rounded-lg p-6">
                <h4 className="text-xl font-bold text-primary mb-3">
                  🏆 Computador Intel Core I3 7ª Geração
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm"><strong>CPU:</strong> Intel i3 7ª Gen</p>
                    <p className="text-sm"><strong>RAM:</strong> 8GB DDR4</p>
                    <p className="text-sm"><strong>Armazenamento:</strong> SSD 240GB</p>
                  </div>
                  <div>
                    <p className="text-sm"><strong>Sistema:</strong> Windows ou Linux</p>
                    <p className="text-sm"><strong>Conectividade:</strong> USB, HDMI</p>
                    <p className="text-sm font-bold text-primary text-xl">R$ 1.999</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  <strong>Por que é perfeito para arcade?</strong> Potência suficiente para rodar emuladores 
                  até de consoles de 32/64 bits, SSD garante carregamento rápido, e o tamanho compacto 
                  facilita instalação no gabinete.
                </p>
                <a 
                  href="https://mercadolivre.com/sec/2igquAH"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-block bg-gradient-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Ver Oferta no Mercado Livre →
                </a>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                💼 Sistema de Pontos para Fliperamas Comerciais
              </h3>

              <p>
                Se você planeja abrir um <strong>fliperama comercial</strong> ou <strong>casa de jogos</strong>, 
                precisa de um sistema de gerenciamento de fichas/créditos profissional.
              </p>

              <div className="bg-card border border-secondary rounded-lg p-6 mt-4">
                <h4 className="text-xl font-bold text-secondary mb-3">
                  ⚡ Mini PDV Elgin M11 Pro - Solução Profissional
                </h4>
                <p className="text-sm mb-3">
                  O <strong>Mini PDV Elgin M11 Pro</strong> não é apenas um terminal de pagamento - 
                  pode ser adaptado como sistema de controle de fichas e créditos para fliperamas.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm mb-4">
                  <li><strong>Touch screen:</strong> Interface intuitiva para clientes</li>
                  <li><strong>Impressora integrada:</strong> Emite tickets/comprovantes</li>
                  <li><strong>WiFi:</strong> Conectividade para gestão remota</li>
                  <li><strong>Software customizável:</strong> Pode rodar sistema de gestão de fichas</li>
                  <li><strong>Compacto:</strong> Ocupa pouco espaço no balcão</li>
                </ul>
                <p className="text-sm font-bold text-secondary text-xl mb-4">R$ 1.899</p>
                <a 
                  href="https://mercadolivre.com/sec/2EY25ET"
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-block bg-gradient-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Ver Detalhes no Mercado Livre →
                </a>
              </div>

              <div className="bg-gradient-primary p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  💡 Dica Legal Importante
                </h3>
                <p className="text-primary-foreground/90">
                  <strong>ROMs e Emulação:</strong> Apenas use ROMs de jogos que você possui fisicamente 
                  ou que estejam em domínio público. Baixar ROMs comerciais sem possuir o jogo original 
                  pode violar direitos autorais. Muitos jogos clássicos estão disponíveis legalmente 
                  através de serviços oficiais ou coleções licenciadas.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                📚 Recursos Adicionais
              </h3>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>RetroPie:</strong> Sistema operacional especializado para retro gaming
                </li>
                <li>
                  <strong>MAME:</strong> Emulador de arcade mais completo disponível
                </li>
                <li>
                  <strong>Fóruns brasileiros:</strong> Comunidades como Arcade Brasil para tirar dúvidas
                </li>
                <li>
                  <strong>YouTube:</strong> Tutoriais em vídeo detalhados sobre montagem
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Arcade;
