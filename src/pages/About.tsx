import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre Nós | Top10 Games</title>
        <meta name="description" content="Conheça a missão do Top10 Games: trazer as melhores análises de produtos de tecnologia e gaming com transparência e qualidade." />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sobre o Top10 Games
            </h1>
            <p className="text-xl text-muted-foreground">
              Análises honestas, recomendações confiáveis e as melhores ofertas de gaming
            </p>
          </div>

          <section className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Nossa Missão</h2>
              <p>
                O <strong>Top10 Games</strong> nasceu da paixão por tecnologia e da necessidade de ter um espaço 
                onde gamers brasileiros possam encontrar <strong>análises detalhadas</strong>, 
                <strong>comparativos honestos</strong> e <strong>recomendações confiáveis</strong> sobre 
                produtos de gaming e tecnologia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <Target className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Objetivo</h3>
                <p className="text-sm">
                  Ajudar você a fazer a melhor escolha de compra com informações completas e imparciais
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Comunidade</h3>
                <p className="text-sm">
                  Construir uma comunidade de gamers informados que compartilham experiências
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <Award className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Qualidade</h3>
                <p className="text-sm">
                  Focar em produtos de marcas consolidadas com excelente reputação
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                <TrendingUp className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Valor</h3>
                <p className="text-sm">
                  Encontrar o melhor custo-benefício sem comprometer a performance
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Nossa Metodologia</h2>
              <p>
                Cada produto recomendado passa por um processo rigoroso de avaliação:
              </p>
              <ol className="list-decimal list-inside space-y-3 ml-4 mt-4">
                <li>
                  <strong>Pesquisa de mercado:</strong> Comparamos especificações, preços e disponibilidade
                </li>
                <li>
                  <strong>Análise de avaliações:</strong> Lemos centenas de reviews de usuários reais
                </li>
                <li>
                  <strong>Verificação de marca:</strong> Priorizamos fabricantes com histórico comprovado
                </li>
                <li>
                  <strong>Teste de desempenho:</strong> Quando possível, testamos produtos pessoalmente
                </li>
                <li>
                  <strong>Custo-benefício:</strong> Avaliamos se o preço justifica os recursos oferecidos
                </li>
              </ol>
            </div>

            <div className="bg-gradient-primary p-8 rounded-lg my-8">
              <h2 className="text-3xl font-semibold text-primary-foreground mb-4">Transparência Total</h2>
              <div className="space-y-4 text-primary-foreground/90">
                <p>
                  Somos <strong>afiliados do Mercado Livre</strong>, o que significa que recebemos uma pequena comissão 
                  quando você realiza uma compra através de nossos links. <strong>Isso não aumenta o preço para você</strong> - 
                  é uma forma do Mercado Livre nos recompensar por trazer clientes.
                </p>
                <p>
                  Nossa <strong>independência editorial é absoluta</strong>. Recomendamos apenas produtos que 
                  genuinamente acreditamos serem bons, independente da comissão. Sua confiança é nosso bem mais valioso.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Nossos Valores</h2>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li>
                  <strong>Honestidade:</strong> Sempre dizemos a verdade, mesmo que isso signifique não recomendar um produto
                </li>
                <li>
                  <strong>Transparência:</strong> Deixamos claro quando usamos links de afiliados
                </li>
                <li>
                  <strong>Qualidade:</strong> Conteúdo aprofundado baseado em pesquisa real
                </li>
                <li>
                  <strong>Atualização:</strong> Mantemos nossas análises atualizadas com novos lançamentos
                </li>
                <li>
                  <strong>Comunidade:</strong> Valorizamos o feedback e experiências dos nossos leitores
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Parcerias</h2>
              <p>
                Trabalhamos em conjunto com outros sites de tecnologia para oferecer conteúdo diversificado:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  <a
                    href="https://melhor-reviews.lovable.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Melhor Reviews
                  </a>{" "}
                  - Reviews detalhados de eletrônicos
                </li>
                <li>
                  <a
                    href="https://ofertadigitalbr.valeapena.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Oferta Digital BR
                  </a>{" "}
                  - Cupons e promoções exclusivas
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Contato</h2>
              <p>
                Tem dúvidas, sugestões ou quer reportar algum problema? Entre em contato conosco:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 mt-4">
                <p className="text-foreground">
                  <strong>Email:</strong> contato@top10games.com.br
                </p>
                <p className="text-foreground mt-2">
                  <strong>Resposta:</strong> Geralmente em até 48 horas
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default About;
