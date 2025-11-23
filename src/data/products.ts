export interface ProductSpec {
  [key: string]: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: "games" | "videogames" | "arcade" | "digitais";
  brand: string;
  price: string;
  originalPrice?: string;
  affiliateLink: string;
  images: string[];
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpec;
  pros: string[];
  cons: string[];
  faq: ProductFAQ[];
  similarProducts: string[]; // IDs of similar products
  keywords: string[];
  rating?: number;
  reviewCount?: number;
}

export const products: Product[] = [
  {
    id: "notebook-gamer-acer-nitro-anv15",
    slug: "notebook-gamer-acer-nitro-anv15-intel-i5-13-geracao-rtx-4050",
    title: "Notebook Gamer Acer Nitro ANV15-51-51UZ Intel Core i5 13ª Geração 16GB RAM 512GB SSD RTX 4050 15.6\"",
    category: "videogames",
    brand: "Acer",
    price: "R$ 6.999",
    originalPrice: "R$ 8.999",
    affiliateLink: "https://mercadolivre.com/sec/12sBVEV",
    badge: "MAIS VENDIDO",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=800&fit=crop"
    ],
    shortDescription: "Potência gamer com Intel Core i5 13ª geração e RTX 4050 para jogos em alta performance",
    fullDescription: `O Notebook Gamer Acer Nitro ANV15-51-51UZ representa o equilíbrio perfeito entre desempenho e custo-benefício para gamers que buscam qualidade sem comprometer o orçamento. Equipado com processador Intel Core i5 da 13ª geração, este notebook oferece poder de processamento excepcional para jogos modernos, streaming e multitarefas intensivas.

A placa de vídeo NVIDIA GeForce RTX 4050 com 6GB GDDR6 traz tecnologias de ponta como Ray Tracing e DLSS 3.0, permitindo gráficos realistas e taxas de quadros elevadas nos jogos mais exigentes. Com 16GB de RAM DDR5, você terá fluidez absoluta mesmo com múltiplas aplicações abertas simultaneamente.

O SSD NVMe de 512GB garante tempos de carregamento ultra-rápidos, tanto para o sistema operacional quanto para seus jogos favoritos. A tela Full HD de 15.6" com taxa de atualização de 144Hz proporciona imagens nítidas e suaves, essencial para jogos competitivos onde cada frame conta.

O design robusto e agressivo do Acer Nitro é complementado por um sistema de refrigeração eficiente com múltiplas ventoinhas e heat pipes, mantendo temperaturas controladas mesmo durante longas sessões de gaming. O teclado retroiluminado em RGB permite personalização total e facilita uso em ambientes com pouca luz.

Conectividade completa com USB-C, USB 3.2, HDMI 2.1, Ethernet Gigabit e Wi-Fi 6 garantem que você esteja sempre conectado com a melhor performance possível, seja para jogos online, transferência de arquivos ou conexão com monitores externos.`,
    specs: {
      "Processador": "Intel Core i5-13500H (12 núcleos, até 4.7GHz)",
      "Placa de Vídeo": "NVIDIA GeForce RTX 4050 6GB GDDR6",
      "Memória RAM": "16GB DDR5 4800MHz (expansível até 32GB)",
      "Armazenamento": "SSD 512GB NVMe PCIe 4.0",
      "Tela": "15.6\" Full HD (1920x1080) IPS 144Hz",
      "Sistema Operacional": "Windows 11 Home",
      "Bateria": "57Wh, até 6 horas de uso",
      "Peso": "2.5kg",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.2, USB-C, USB 3.2, HDMI 2.1, RJ45",
      "Áudio": "DTS:X Ultra, 2 alto-falantes estéreo",
      "Webcam": "HD 720p com microfone integrado",
      "Dimensões": "363 x 255 x 23.9mm"
    },
    pros: [
      "RTX 4050 entrega excelente desempenho em Full HD",
      "Processador i5 13ª geração muito potente para jogos e produtividade",
      "16GB DDR5 garante fluidez em multitarefas",
      "Tela 144Hz proporciona experiência suave em jogos competitivos",
      "Sistema de refrigeração eficiente mantém temperaturas baixas",
      "Design gamer premium com construção sólida",
      "Ótimo custo-benefício comparado a concorrentes",
      "Teclado retroiluminado RGB personalizável"
    ],
    cons: [
      "Bateria poderia ter maior autonomia",
      "Um pouco pesado para transportar diariamente (2.5kg)",
      "SSD de 512GB pode encher rápido com jogos modernos",
      "Webcam básica HD 720p"
    ],
    faq: [
      {
        question: "Este notebook roda jogos AAA recentes em alta qualidade?",
        answer: "Sim! A RTX 4050 roda jogos como Cyberpunk 2077, Call of Duty, Fortnite e Valorant em configurações altas/ultra com 60-120 FPS em Full HD. Jogos competitivos facilmente ultrapassam 144 FPS."
      },
      {
        question: "É possível fazer upgrade de RAM e SSD?",
        answer: "Sim, a RAM pode ser expandida até 32GB (possui 2 slots SO-DIMM DDR5) e há slot M.2 adicional para instalar um segundo SSD, permitindo aumentar o armazenamento."
      },
      {
        question: "A tela de 144Hz faz diferença real nos jogos?",
        answer: "Faz muita diferença! A taxa de atualização de 144Hz torna os movimentos muito mais suaves, especialmente em jogos competitivos como CS2, Valorant e League of Legends, proporcionando vantagem competitiva."
      },
      {
        question: "O notebook esquenta muito durante jogos pesados?",
        answer: "O sistema de refrigeração Acer CoolBoost mantém temperaturas controladas. Em jogos intensos, o notebook aquece mas não a ponto de comprometer o desempenho ou causar desconforto. As ventoinhas são eficientes e o design favorece a dissipação de calor."
      },
      {
        question: "Vale a pena comparado a notebooks com RTX 4060?",
        answer: "Depende do orçamento. A RTX 4060 oferece 10-15% mais desempenho, mas custa significativamente mais. Para a maioria dos gamers, a RTX 4050 entrega performance excelente em Full HD com melhor custo-benefício."
      },
      {
        question: "O áudio é bom para jogos sem headset?",
        answer: "O sistema DTS:X Ultra oferece áudio surround decente, mas para experiência imersiva em jogos competitivos, recomendamos usar headset gamer para aproveitar melhor o posicionamento sonoro 3D."
      },
      {
        question: "Vem com Windows original?",
        answer: "Sim, vem com Windows 11 Home original e licenciado, pronto para uso assim que você ligar o notebook pela primeira vez."
      },
      {
        question: "Quanto tempo de garantia?",
        answer: "O notebook Acer Nitro vem com 1 ano de garantia oficial do fabricante no Brasil, podendo ser estendida através de planos adicionais."
      }
    ],
    similarProducts: [
      "computador-intel-i5-8gb-ssd-240gb",
      "all-in-one-aoc-i5-16gb-ssd-512",
      "computador-intel-i3-7-geracao"
    ],
    keywords: [
      "notebook gamer acer nitro",
      "notebook rtx 4050",
      "notebook i5 13 geração",
      "notebook gamer 16gb",
      "notebook tela 144hz",
      "acer nitro anv15",
      "notebook gamer custo benefício",
      "notebook para jogos 2025"
    ],
    rating: 4.8,
    reviewCount: 1247
  },
  {
    id: "computador-intel-i5-8gb-ssd-240gb",
    slug: "computador-intel-core-i5-8gb-ram-ssd-240gb-monitor-19",
    title: "Computador Intel Core i5 8GB RAM SSD 240GB Monitor LED 19\"",
    category: "videogames",
    brand: "Intel",
    price: "R$ 1.899",
    originalPrice: "R$ 2.499",
    affiliateLink: "https://mercadolivre.com/sec/1sL3qRE",
    badge: "OFERTA",
    images: [
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1612837017391-4b6b7e14e37a?w=1200&h=800&fit=crop"
    ],
    shortDescription: "PC completo com Core i5, SSD rápido e monitor incluído - perfeito para home office e jogos leves",
    fullDescription: `Este conjunto de Computador Intel Core i5 com 8GB RAM e SSD 240GB representa uma solução completa e acessível para quem busca desempenho sólido para trabalho, estudos e entretenimento. Com monitor LED de 19" incluso, você recebe tudo pronto para começar a usar imediatamente.

O processador Intel Core i5 oferece poder de processamento mais que suficiente para multitarefas do dia a dia, navegação web, pacote Office, streaming de vídeos em alta qualidade e até jogos leves como League of Legends, CS:GO e Minecraft. A arquitetura eficiente garante baixo consumo de energia e operação silenciosa.

O SSD de 240GB NVMe é o grande destaque, proporcionando inicialização do sistema em segundos e abertura instantânea de aplicativos. Comparado a HDs tradicionais, você experimentará uma diferença radical na velocidade e responsividade geral do sistema.

Com 8GB de RAM DDR4, você pode trabalhar com múltiplas abas do navegador, documentos e aplicativos simultaneamente sem travamentos. A placa-mãe moderna suporta expansão futura de memória e armazenamento, garantindo que seu PC possa evoluir conforme suas necessidades.

O gabinete compacto inclui portas USB frontais para fácil acesso, leitor de cartões e áudio frontal. O monitor LED de 19" oferece imagens nítidas com tecnologia anti-reflexo, ideal para longas jornadas de trabalho sem cansaço visual. Teclado e mouse USB inclusos completam o pacote.`,
    specs: {
      "Processador": "Intel Core i5 (4 núcleos, até 3.6GHz)",
      "Placa de Vídeo": "Intel HD Graphics integrada",
      "Memória RAM": "8GB DDR4 2666MHz",
      "Armazenamento": "SSD 240GB SATA III",
      "Placa-Mãe": "Chipset Intel com USB 3.0",
      "Monitor": "LED 19\" HD (1366x768)",
      "Sistema Operacional": "Windows 10 Pro",
      "Conectividade": "Ethernet Gigabit, USB 3.0, USB 2.0, HDMI, VGA",
      "Áudio": "Áudio integrado HD",
      "Periféricos": "Teclado e Mouse USB inclusos",
      "Gabinete": "Mini Tower com fonte 350W",
      "Garantia": "1 ano fabricante"
    },
    pros: [
      "Preço excelente para conjunto completo (PC + monitor + periféricos)",
      "SSD torna o sistema muito rápido e responsivo",
      "Core i5 oferece bom desempenho para tarefas cotidianas",
      "Pronto para usar - vem com tudo incluído",
      "Consome pouca energia",
      "Silencioso durante operação normal",
      "Fácil expansão e upgrade futuro",
      "Windows 10 Pro original incluso"
    ],
    cons: [
      "Placa de vídeo integrada limita jogos pesados",
      "Monitor de 19\" pode ser pequeno para alguns usuários",
      "SSD 240GB enche rápido se você instalar muitos programas",
      "RAM de 8GB pode ser insuficiente para edição profissional"
    ],
    faq: [
      {
        question: "Este PC roda jogos?",
        answer: "Sim, mas com limitações. Jogos leves e competitivos como League of Legends, CS:GO, Valorant, Minecraft e Roblox rodam bem. Jogos AAA modernos não rodam ou rodam em configurações muito baixas devido à GPU integrada."
      },
      {
        question: "Posso adicionar uma placa de vídeo dedicada?",
        answer: "Depende da fonte e do gabinete. A fonte de 350W pode ser limitante para GPUs potentes. Recomendamos verificar especificações técnicas do gabinete e considerar upgrade de fonte para GPUs mais exigentes."
      },
      {
        question: "É possível aumentar a RAM e o SSD?",
        answer: "Sim! A maioria das placas-mãe suporta até 16GB ou 32GB de RAM. Você pode adicionar outro pente de 8GB. Para armazenamento, é possível adicionar um HD secundário ou substituir o SSD por um maior."
      },
      {
        question: "O monitor de 19\" é suficiente?",
        answer: "Para trabalho básico, navegação e estudos é adequado. Porém, se você trabalha com múltiplas janelas ou conteúdo multimídia, considere investir em um monitor maior (24\" ou 27\") no futuro."
      },
      {
        question: "Serve para home office e aulas online?",
        answer: "Perfeitamente! O processador i5 e 8GB RAM são mais que suficientes para videoconferências (Zoom, Teams, Meet), navegação, pacote Office, e-mails e multitarefas típicas de home office."
      },
      {
        question: "Vem montado e configurado?",
        answer: "Sim, o PC vem totalmente montado, testado e com Windows instalado. Basta conectar na tomada e começar a usar."
      },
      {
        question: "O SSD faz muita diferença?",
        answer: "Faz TODA a diferença! Com SSD, o Windows inicia em 10-15 segundos, programas abrem instantaneamente e o sistema nunca trava por lentidão de disco. É impossível voltar para HD tradicional depois de usar SSD."
      }
    ],
    similarProducts: [
      "notebook-gamer-acer-nitro-anv15",
      "computador-intel-i3-7-geracao",
      "all-in-one-aoc-i5-16gb-ssd-512"
    ],
    keywords: [
      "computador completo intel i5",
      "pc com monitor incluído",
      "computador ssd 240gb",
      "pc para home office",
      "computador barato completo",
      "pc core i5 8gb",
      "computador para estudos",
      "desktop completo"
    ],
    rating: 4.6,
    reviewCount: 892
  },
  {
    id: "mini-pdv-elgin-m11-pro",
    slug: "mini-pdv-elgin-m11-pro-touch-screen-impressora-wifi",
    title: "Mini PDV Elgin M11 Pro Touch Screen com Impressora WiFi",
    category: "digitais",
    brand: "Elgin",
    price: "R$ 2.299",
    originalPrice: "R$ 2.999",
    affiliateLink: "https://mercadolivre.com/sec/2EY25ET",
    badge: "PROFISSIONAL",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=1200&h=800&fit=crop"
    ],
    shortDescription: "Solução completa PDV com tela touch, impressora integrada e conectividade total para seu negócio",
    fullDescription: `O Mini PDV Elgin M11 Pro é a solução completa e profissional para estabelecimentos comerciais que buscam modernização e eficiência no ponto de venda. Com design compacto e elegante, este terminal integra tela touchscreen, impressora térmica e todas as funcionalidades necessárias para gestão comercial eficiente.

A tela touchscreen capacitiva de 11.6" com resolução HD oferece interface intuitiva e responsiva, facilitando o treinamento de funcionários e agilizando o atendimento. O sistema operacional Android empresarial permite instalação de diversos aplicativos de gestão, PDV e controle de estoque das principais plataformas do mercado.

A impressora térmica não-fiscal integrada de 58mm imprime cupons com alta velocidade (150mm/s) e possui guilhotina automática para corte preciso. Compatível com SAT, NFC-e e diversos sistemas de gestão, o M11 Pro se adapta às necessidades fiscais do seu negócio.

Conectividade completa com WiFi dual-band, Bluetooth 4.2, Ethernet Gigabit, 4 portas USB e gaveta de dinheiro opcional garantem integração total com seu ecossistema comercial. Suporte para leitor de código de barras, balanças e outros periféricos complementa a solução.

O processador quad-core de 1.8GHz com 2GB RAM garante operação fluida mesmo com múltiplos aplicativos rodando simultaneamente. O armazenamento interno de 16GB comporta todos os dados necessários e pode ser expandido via cartão SD.`,
    specs: {
      "Processador": "Quad-Core 1.8GHz Cortex-A53",
      "Memória RAM": "2GB DDR3",
      "Armazenamento": "16GB (expansível via SD até 128GB)",
      "Tela": "11.6\" Touchscreen Capacitiva HD (1366x768)",
      "Impressora": "Térmica 58mm, 150mm/s, guilhotina automática",
      "Sistema Operacional": "Android 7.1 empresarial",
      "Conectividade": "WiFi dual-band, Bluetooth 4.2, Ethernet Gigabit",
      "Portas": "4x USB 2.0, RJ-45, RJ-11 (gaveta), Serial",
      "Áudio": "Alto-falante integrado",
      "Bateria": "Opcional (autonomia 4 horas)",
      "Certificações": "Anatel, Inmetro, compatível SAT/NFC-e",
      "Dimensões": "310 x 195 x 385mm",
      "Peso": "3.2kg"
    },
    pros: [
      "Solução all-in-one economiza espaço no balcão",
      "Tela touchscreen responsiva e intuitiva",
      "Impressora térmica rápida e silenciosa",
      "Android permite instalar diversos apps de gestão",
      "Conectividade completa (WiFi, Ethernet, Bluetooth)",
      "Suporte a SAT e NFC-e para conformidade fiscal",
      "Design profissional e robusto",
      "Ótimo custo-benefício para pequenos e médios negócios"
    ],
    cons: [
      "Bateria vendida separadamente",
      "Armazenamento de 16GB pode ser limitado para alguns casos",
      "Não vem com leitor de código de barras (vendido separadamente)",
      "Android 7.1 é versão antiga (mas estável para PDV)"
    ],
    faq: [
      {
        question: "Quais sistemas de PDV são compatíveis?",
        answer: "O M11 Pro roda a maioria dos sistemas de PDV Android do mercado, incluindo Vend, Square, Lightspeed, SysMenu, iFood Gestor, entre outros. Também é compatível com apps personalizados desenvolvidos para Android."
      },
      {
        question: "Preciso comprar impressora separada?",
        answer: "Não! A impressora térmica de 58mm já vem integrada no equipamento, pronta para imprimir cupons não-fiscais. Apenas conecte o papel térmico e comece a usar."
      },
      {
        question: "Funciona com maquininha de cartão?",
        answer: "Sim! Você pode conectar maquininhas via Bluetooth, USB ou usar soluções de pagamento integradas que funcionam diretamente no Android. É compatível com as principais adquirentes do mercado."
      },
      {
        question: "Posso usar offline?",
        answer: "Sim, o sistema funciona offline. Você pode processar vendas sem internet e sincronizar dados quando a conexão for restabelecida. A impressora também funciona offline."
      },
      {
        question: "É difícil instalar e configurar?",
        answer: "Não. O M11 Pro é plug-and-play para a maioria das aplicações. Basta conectar na energia, conectar à rede WiFi e instalar seu app de PDV preferido pela Play Store. Suporte técnico Elgin disponível."
      },
      {
        question: "Serve para restaurante e food service?",
        answer: "Perfeitamente! É muito usado em restaurantes, lanchonetes, bares e food trucks. Suporta apps específicos para food service, pedidos online e integração com delivery."
      },
      {
        question: "Qual o custo do papel térmico?",
        answer: "O papel térmico 58mm é barato e fácil de encontrar. Um rolo custa entre R$ 3-5 e rende centenas de cupons. O consumo depende do volume de vendas do estabelecimento."
      },
      {
        question: "Tem garantia e suporte técnico?",
        answer: "Sim, vem com 1 ano de garantia oficial Elgin no Brasil. A Elgin possui rede de assistências técnicas autorizadas em todo país e suporte técnico via telefone e chat online."
      }
    ],
    similarProducts: [
      "computador-intel-i5-8gb-ssd-240gb",
      "all-in-one-aoc-i5-16gb-ssd-512"
    ],
    keywords: [
      "mini pdv elgin",
      "pdv touch screen",
      "impressora pdv integrada",
      "terminal de vendas",
      "pdv android",
      "elgin m11 pro",
      "equipamento para loja",
      "pdv wifi"
    ],
    rating: 4.7,
    reviewCount: 634
  },
  {
    id: "computador-intel-i3-7-geracao",
    slug: "computador-intel-core-i3-7-geracao-8gb-ssd-240gb-monitor",
    title: "Computador Intel Core i3 7ª Geração 8GB SSD 240GB Monitor",
    category: "videogames",
    brand: "Intel",
    price: "R$ 1.599",
    originalPrice: "R$ 2.199",
    affiliateLink: "https://mercadolivre.com/sec/2igquAH",
    badge: "ECONÔMICO",
    images: [
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=1200&h=800&fit=crop"
    ],
    shortDescription: "PC completo econômico com i3, SSD rápido - ideal para estudos, trabalho e uso básico",
    fullDescription: `Este Computador Intel Core i3 7ª Geração com 8GB RAM e SSD 240GB é a escolha inteligente para quem busca um computador completo, funcional e econômico. Perfeito para estudantes, profissionais de home office e usuários que precisam de um PC confiável para tarefas diárias sem gastar muito.

O processador Intel Core i3 de 7ª geração oferece desempenho dual-core eficiente para navegação web, pacote Office, videoconferências, streaming de vídeos e aplicativos leves. Embora seja uma geração mais antiga, ainda entrega performance sólida para uso cotidiano com excelente relação custo-benefício.

O grande destaque é o SSD de 240GB SATA, que transforma completamente a experiência de uso comparado a PCs com HD tradicional. O Windows inicia em segundos, aplicativos abrem instantaneamente e o sistema nunca trava por lentidão de disco. É a diferença entre um PC lento e um PC ágil.

Com 8GB de RAM DDR4, você pode trabalhar com múltiplas abas do navegador, documentos do Office e aplicativos de comunicação simultaneamente sem engasgos. É memória suficiente para todas as tarefas básicas e intermediárias do dia a dia.

O conjunto inclui monitor LED com entrada VGA/HDMI, teclado e mouse USB, oferecendo tudo que você precisa para começar a usar imediatamente. O gabinete compacto economiza espaço e possui design discreto que combina com qualquer ambiente.`,
    specs: {
      "Processador": "Intel Core i3 7ª Geração (2 núcleos, 3.9GHz)",
      "Placa de Vídeo": "Intel HD Graphics 630 integrada",
      "Memória RAM": "8GB DDR4 2400MHz",
      "Armazenamento": "SSD 240GB SATA III",
      "Placa-Mãe": "Chipset H110M com USB 3.0",
      "Monitor": "LED 19\" HD (1366x768)",
      "Sistema Operacional": "Windows 10 Pro",
      "Conectividade": "Ethernet 10/100, USB 3.0, USB 2.0, HDMI, VGA",
      "Áudio": "Áudio integrado Realtek HD",
      "Periféricos": "Teclado e Mouse USB padrão",
      "Gabinete": "Mini Tower com fonte 300W",
      "Garantia": "1 ano fabricante"
    },
    pros: [
      "Preço acessível para conjunto completo",
      "SSD proporciona sistema rápido e responsivo",
      "Suficiente para home office, estudos e uso básico",
      "Baixo consumo de energia",
      "Inclui tudo necessário (PC + monitor + teclado + mouse)",
      "Windows 10 Pro original",
      "Operação silenciosa",
      "Fácil manutenção e upgrades"
    ],
    cons: [
      "Processador i3 7ª geração é mais antigo",
      "GPU integrada básica não roda jogos modernos",
      "Monitor pequeno (19\")",
      "SSD 240GB enche com uso intenso"
    ],
    faq: [
      {
        question: "Serve para home office e aulas online?",
        answer: "Sim, é perfeito para isso! O i3 com 8GB RAM é mais que suficiente para Zoom, Teams, Google Meet, pacote Office, navegação e e-mails. Muitas empresas usam configurações similares para trabalho remoto."
      },
      {
        question: "Roda jogos?",
        answer: "Apenas jogos muito leves e antigos. Títulos como Minecraft (versão leve), jogos de navegador e títulos 2D rodam. Jogos modernos AAA não funcionam bem devido à GPU integrada básica."
      },
      {
        question: "Posso fazer upgrade?",
        answer: "Sim! Você pode adicionar mais 8GB de RAM para ter 16GB total, trocar o SSD por um maior ou adicionar um HD secundário para mais armazenamento. Adicionar GPU dedicada requer verificar compatibilidade da fonte."
      },
      {
        question: "A diferença entre i3 e i5 é grande?",
        answer: "Para tarefas básicas (navegação, Office, vídeos), a diferença é pequena. O i5 é melhor para multitarefas pesadas, edição de vídeos e jogos. Para uso leve/moderado, o i3 atende bem com melhor custo-benefício."
      },
      {
        question: "Quanto tempo leva para ligar?",
        answer: "Com o SSD, o Windows 10 inicia em cerca de 15-20 segundos do botão ligar até a área de trabalho. É muito rápido comparado aos minutos que HDs tradicionais levam."
      },
      {
        question: "Vem configurado e pronto para usar?",
        answer: "Sim, chega montado, testado e com Windows instalado e ativado. Basta conectar na tomada, ligar o monitor e começar a usar."
      }
    ],
    similarProducts: [
      "computador-intel-i5-8gb-ssd-240gb",
      "all-in-one-aoc-i5-16gb-ssd-512"
    ],
    keywords: [
      "computador barato completo",
      "pc intel i3",
      "computador para estudos",
      "pc home office",
      "computador ssd",
      "desktop completo econômico",
      "pc i3 8gb"
    ],
    rating: 4.4,
    reviewCount: 567
  },
  {
    id: "all-in-one-aoc-i5-16gb-ssd-512",
    slug: "all-in-one-computador-aoc-intel-i5-16gb-ssd-512-tela-27-full-hd",
    title: "All In One Computador AOC Intel i5 16GB SSD 512GB Tela 27\" Full HD Branco",
    category: "videogames",
    brand: "AOC",
    price: "R$ 3.499",
    originalPrice: "R$ 4.299",
    affiliateLink: "https://mercadolivre.com/sec/2zKgpjm",
    badge: "PREMIUM",
    images: [
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1623184663167-c29451aef4c0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=1200&h=800&fit=crop"
    ],
    shortDescription: "Design elegante All-in-One com tela 27\" Full HD, i5, 16GB RAM e SSD 512GB - potência e estilo",
    fullDescription: `O All In One AOC com Intel Core i5, 16GB RAM e SSD 512GB em tela de 27" Full HD representa a fusão perfeita entre desempenho, design e praticidade. Este computador elegante em cor branca elimina a bagunça de cabos e economiza espaço, sendo ideal para ambientes modernos, escritórios minimalistas e usuários que valorizam estética sem comprometer performance.

A tela IPS de 27 polegadas com resolução Full HD (1920x1080) oferece imagens nítidas, cores vibrantes e ângulos de visão amplos - perfeita para trabalho profissional com design, edição de fotos, planilhas complexas e entretenimento. O painel anti-reflexo garante conforto visual mesmo em ambientes iluminados.

O processador Intel Core i5 de última geração combinado com generosos 16GB de RAM DDR4 entrega performance fluida para multitarefas intensivas, edição de conteúdo, desenvolvimento, virtualização e aplicações profissionais. Você pode manter dezenas de abas abertas, programas pesados e videoconferências sem engasgos.

O SSD NVMe de 512GB proporciona velocidade excepcional de leitura/escrita, com sistema operacional iniciando em segundos e aplicativos abrindo instantaneamente. Espaço generoso para instalar todos os programas que você precisa e armazenar documentos importantes.

A webcam Full HD 1080p integrada com microfone duplo array oferece qualidade superior para videoconferências profissionais. O sistema de áudio estéreo com tecnologia de cancelamento de ruído garante chamadas claras. Conectividade completa com Wi-Fi 6, Bluetooth 5.0, múltiplas portas USB e HDMI para monitor secundário.`,
    specs: {
      "Processador": "Intel Core i5 10ª Geração (4 núcleos, até 4.2GHz)",
      "Placa de Vídeo": "Intel UHD Graphics integrada",
      "Memória RAM": "16GB DDR4 2666MHz (expansível até 32GB)",
      "Armazenamento": "SSD 512GB NVMe PCIe 3.0",
      "Tela": "27\" IPS Full HD (1920x1080) anti-reflexo",
      "Sistema Operacional": "Windows 11 Pro",
      "Webcam": "Full HD 1080p com microfone array duplo",
      "Áudio": "Estéreo 2x 5W com cancelamento de ruído",
      "Conectividade": "Wi-Fi 6, Bluetooth 5.0, Ethernet Gigabit",
      "Portas": "4x USB 3.2, 2x USB-C, HDMI out, RJ-45, áudio combo",
      "Periféricos": "Teclado e Mouse Wireless inclusos",
      "Ajuste": "Inclinação -5° a +20°",
      "Cor": "Branco Premium",
      "Dimensões": "611 x 455 x 195mm"
    },
    pros: [
      "Design All-in-One elegante economiza espaço e elimina cabos",
      "Tela 27\" Full HD IPS com excelente qualidade de imagem",
      "16GB RAM + SSD 512GB entregam performance premium",
      "Core i5 10ª geração é potente para trabalho profissional",
      "Webcam Full HD 1080p ideal para reuniões remotas",
      "Wi-Fi 6 e Bluetooth 5.0 - conectividade moderna",
      "Cor branca premium combina com ambientes modernos",
      "Silencioso e eficiente energeticamente"
    ],
    cons: [
      "Preço mais alto que PCs tradicionais equivalentes",
      "GPU integrada limita uso para games pesados",
      "Upgrades são mais difíceis que em desktops tradicionais",
      "Não possui leitor de DVD/CD"
    ],
    faq: [
      {
        question: "Serve para trabalho profissional e home office?",
        answer: "Perfeitamente! Com i5, 16GB RAM e tela 27\" Full HD, é ideal para arquitetos, designers, desenvolvedores, analistas e qualquer profissional que trabalhe com múltiplos programas e documentos simultaneamente. A webcam Full HD garante reuniões com qualidade profissional."
      },
      {
        question: "Posso usar dois monitores?",
        answer: "Sim! O All-in-One possui porta HDMI out que permite conectar um segundo monitor, criando setup dual-screen. Perfeito para aumentar produtividade com mais espaço de tela."
      },
      {
        question: "É possível fazer upgrade de RAM e SSD?",
        answer: "A RAM pode ser expandida até 32GB através dos slots SO-DIMM acessíveis. O SSD pode ser substituído por um maior, mas é mais complexo que em PCs tradicionais. Recomendamos consultar suporte técnico AOC."
      },
      {
        question: "A tela de 27\" Full HD é boa?",
        answer: "Sim! A densidade de pixels em 27\" Full HD (82 PPI) é adequada para a maioria dos usos. O painel IPS oferece cores precisas e ângulos de visão amplos. Para designers que exigem 4K, existem modelos mais caros, mas Full HD é excelente para uso geral."
      },
      {
        question: "Roda programas pesados tipo AutoCAD, Photoshop?",
        answer: "Sim, roda bem! O i5 com 16GB RAM é suficiente para AutoCAD, Photoshop, Illustrator, Premiere (edições leves), programação e virtualização. Para renderizações 3D pesadas, workstations mais robustas seriam ideais, mas para trabalho diário profissional é ótimo."
      },
      {
        question: "Vem com teclado e mouse?",
        answer: "Sim, vem com teclado e mouse wireless AOC de qualidade, eliminando mais cabos da sua mesa. As baterias já vêm incluídas."
      },
      {
        question: "É difícil instalar?",
        answer: "Não! Basta tirar da caixa, conectar o cabo de energia e ligar. Tudo já vem integrado. Setup leva menos de 5 minutos."
      },
      {
        question: "Qual a vantagem sobre PC tradicional?",
        answer: "Design limpo sem cabos, economia de espaço, menos componentes para dar problema, consumo energético menor, operação silenciosa e estética moderna. Ideal para quem valoriza ambiente organizado."
      }
    ],
    similarProducts: [
      "computador-intel-i5-8gb-ssd-240gb",
      "notebook-gamer-acer-nitro-anv15"
    ],
    keywords: [
      "all in one aoc",
      "computador tela 27",
      "pc all in one i5",
      "computador branco",
      "all in one 16gb",
      "pc elegante",
      "computador full hd",
      "all in one ssd 512gb"
    ],
    rating: 4.7,
    reviewCount: 423
  }
];

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get similar products
export const getSimilarProducts = (productIds: string[]): Product[] => {
  return products.filter(product => productIds.includes(product.id));
};

// Helper function to get all product slugs (useful for sitemap generation)
export const getAllProductSlugs = (): string[] => {
  return products.map(product => product.slug);
};
