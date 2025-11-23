import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getProductBySlug, getSimilarProducts } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ImageGallery from "@/components/ImageGallery";
import ProductSpecs from "@/components/ProductSpecs";
import FAQSection from "@/components/FAQSection";
import ProductComparison from "@/components/ProductComparison";
import TableOfContents from "@/components/TableOfContents";
import ProductCarousel from "@/components/ProductCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, CheckCircle2, XCircle, Star, TrendingUp, Shield, Award } from "lucide-react";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const similarProducts = getSimilarProducts(product.similarProducts);
  
  const categoryRoutes: Record<string, string> = {
    games: "/games",
    videogames: "/videogames",
    arcade: "/arcade",
    digitais: "/digitais"
  };

  const tableOfContents = [
    { id: "introducao", title: "Introdução" },
    { id: "especificacoes", title: "Especificações Técnicas" },
    { id: "analise", title: "Análise Detalhada" },
    { id: "pros-cons", title: "Prós e Contras" },
    { id: "comparacao", title: "Comparação" },
    { id: "faq", title: "Perguntas Frequentes" },
    { id: "conclusao", title: "Conclusão" }
  ];

  // Generate JSON-LD structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.images,
    "description": product.shortDescription,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "price": product.price.replace("R$ ", "").replace(".", "").replace(",", "."),
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": product.affiliateLink
    },
    "aggregateRating": product.rating ? {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    } : undefined
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faq.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://top10games.lovable.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": product.category,
        "item": `https://top10games.lovable.app${categoryRoutes[product.category]}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://top10games.lovable.app/artigo/${product.slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": product.title,
    "image": product.images,
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "author": {
      "@type": "Organization",
      "name": "Top10 Games"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Top10 Games",
      "logo": {
        "@type": "ImageObject",
        "url": "https://top10games.lovable.app/logo.png"
      }
    },
    "description": product.shortDescription
  };

  return (
    <>
      <Helmet>
        <title>{`${product.title} - Análise Completa 2025 | Top10 Games`}</title>
        <meta name="description" content={`${product.shortDescription} - Análise completa com especificações, prós e contras, comparação e FAQ. ${product.keywords.slice(0, 3).join(", ")}`} />
        <meta name="keywords" content={product.keywords.join(", ")} />
        <link rel="canonical" href={`https://top10games.lovable.app/artigo/${product.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${product.title} - Análise Completa`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:url" content={`https://top10games.lovable.app/artigo/${product.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.shortDescription} />
        <meta name="twitter:image" content={product.images[0]} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <BreadcrumbNav items={[
            { label: product.category, href: categoryRoutes[product.category] },
            { label: product.title }
          ]} />

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-8">
              {/* Hero Section */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  {product.badge && (
                    <Badge variant="default" className="text-sm px-3 py-1">
                      {product.badge}
                    </Badge>
                  )}
                  {product.rating && (
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-bold text-primary">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviewCount} avaliações)</span>
                    </div>
                  )}
                </div>

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">{product.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Marca: {product.brand}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">Produto Verificado</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{product.shortDescription}</p>
              </div>

              {/* Price and CTA */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through mb-1">
                        De: {product.originalPrice}
                      </p>
                    )}
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl md:text-5xl font-bold text-primary">{product.price}</p>
                      {product.originalPrice && (
                        <Badge variant="default" className="bg-green-500">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Economize
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Melhor preço garantido</p>
                  </div>
                  <Button variant="hero" size="xl" asChild className="w-full md:w-auto text-lg px-8 py-6">
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Ver Oferta no Mercado Livre
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Image Gallery */}
              <ImageGallery images={product.images} alt={product.title} />

              {/* Introduction */}
              <section id="introducao" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Introdução
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                  {product.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Specifications */}
              <section id="especificacoes" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Especificações Técnicas Completas
                </h2>
                <ProductSpecs specs={product.specs} />
              </section>

              {/* Detailed Analysis */}
              <section id="analise" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Análise Detalhada de Performance
                </h2>
                <Card className="p-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Após análise minuciosa das especificações técnicas e testes práticos, o <strong className="text-foreground">{product.brand} {product.title.split(' ').slice(0, 3).join(' ')}</strong> demonstra ser uma escolha sólida dentro de sua categoria de preço.
                  </p>
                  <p>
                    O processador <strong className="text-foreground">{product.specs["Processador"]}</strong> oferece poder computacional adequado para as demandas modernas, enquanto a memória RAM de <strong className="text-foreground">{product.specs["Memória RAM"]}</strong> garante multitarefas fluidas sem gargalos de desempenho.
                  </p>
                  {product.specs["Placa de Vídeo"] && (
                    <p>
                      A <strong className="text-foreground">{product.specs["Placa de Vídeo"]}</strong> é um dos destaques, proporcionando capacidade gráfica {product.specs["Placa de Vídeo"].includes("integrada") ? "adequada para tarefas cotidianas e jogos leves" : "robusta para jogos modernos e aplicações gráficas exigentes"}.
                    </p>
                  )}
                  <p>
                    O armazenamento em <strong className="text-foreground">{product.specs["Armazenamento"]}</strong> {product.specs["Armazenamento"]?.includes("SSD") ? "garante velocidade excepcional de leitura e escrita, com tempos de boot e carregamento significativamente reduzidos" : "oferece amplo espaço para arquivos, embora recomendemos considerar upgrade para SSD futuramente"}.
                  </p>
                </Card>
              </section>

              {/* Pros and Cons */}
              <section id="pros-cons" className="scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                  Prós e Contras - Análise Honesta
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-green-500/20 bg-green-500/5">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <h3 className="text-xl font-bold text-green-500">Pontos Positivos</h3>
                    </div>
                    <ul className="space-y-3">
                      {product.pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6 border-orange-500/20 bg-orange-500/5">
                    <div className="flex items-center gap-2 mb-4">
                      <XCircle className="h-6 w-6 text-orange-500" />
                      <h3 className="text-xl font-bold text-orange-500">Pontos de Atenção</h3>
                    </div>
                    <ul className="space-y-3">
                      {product.cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </section>

              {/* CTA Middle */}
              <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <h3 className="text-2xl font-bold mb-4">Gostou do que viu?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Aproveite as melhores ofertas do Mercado Livre com entrega rápida e garantia oficial.
                  Não perca esta oportunidade!
                </p>
                <Button variant="hero" size="xl" asChild className="text-lg px-8">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Conferir Preço Atualizado
                  </a>
                </Button>
              </Card>

              {/* Comparison */}
              {similarProducts.length > 0 && (
                <section id="comparacao" className="scroll-mt-24">
                  <ProductComparison currentProduct={product} similarProducts={similarProducts} />
                </section>
              )}

              {/* FAQ */}
              <section id="faq" className="scroll-mt-24">
                <FAQSection faqs={product.faq} />
              </section>

              {/* Conclusion */}
              <section id="conclusao" className="scroll-mt-24">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                    Conclusão - Vale a Pena?
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      O <strong className="text-foreground">{product.title}</strong> se destaca como uma escolha {product.badge?.toLowerCase().includes("premium") ? "premium" : "excelente"} para quem busca {product.category === "videogames" ? "desempenho em jogos e produtividade" : "qualidade e funcionalidade"} com {product.badge?.toLowerCase().includes("econômico") ? "ótimo custo-benefício" : "alto padrão de qualidade"}.
                    </p>
                    <p>
                      Recomendamos especialmente para usuários que valorizam {product.pros.slice(0, 2).join(" e ").toLowerCase()}. O investimento de <strong className="text-primary">{product.price}</strong> se justifica pela combinação de recursos oferecidos.
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Nossa avaliação: {product.rating}/5.0 estrelas - {product.rating && product.rating >= 4.7 ? "ALTAMENTE RECOMENDADO" : product.rating >= 4.5 ? "RECOMENDADO" : "BOM CUSTO-BENEFÍCIO"}
                    </p>
                  </div>

                  <div className="mt-8 text-center">
                    <Button variant="hero" size="xl" asChild className="text-lg px-8">
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Comprar Agora no Mercado Livre
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-3">
                      ✓ Frete Grátis | ✓ Parcelamento sem juros | ✓ Garantia oficial
                    </p>
                  </div>
                </Card>
              </section>

              {/* Related Products */}
              {similarProducts.length > 0 && (
                <section>
                  <ProductCarousel 
                    title="Produtos Relacionados que Você Pode Gostar"
                    products={similarProducts.map(p => ({
                      title: p.title,
                      price: p.price,
                      image: p.images[0],
                      affiliateLink: p.affiliateLink,
                      articleSlug: p.slug,
                      badge: p.badge
                    }))}
                  />
                </section>
              )}

              {/* Back to Category */}
              <div className="text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to={categoryRoutes[product.category]}>
                    ← Voltar para {product.category === "videogames" ? "Video Games" : product.category === "arcade" ? "Fliperamas & Arcade" : product.category === "digitais" ? "Digitais" : "Games"}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Table of Contents - Sticky Sidebar */}
            <TableOfContents items={tableOfContents} />
          </div>
        </main>

        <Footer />
      </div>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4 xl:hidden z-50">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">A partir de</p>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
          </div>
          <Button variant="hero" size="lg" asChild className="flex-shrink-0">
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver Oferta
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Article;
