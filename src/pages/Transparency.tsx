import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ExternalLink, DollarSign, Shield } from "lucide-react";

const Transparency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Transparência | Top10 Games</title>
        <meta name="description" content="Compromisso com transparência: como funcionam nossos links de afiliados e como mantemos nossa independência editorial." />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Transparência</h1>
            <p className="text-xl text-muted-foreground">
              Nosso compromisso com você e como mantemos este site gratuito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center space-y-3">
              <DollarSign className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Links de Afiliados</h3>
              <p className="text-sm text-muted-foreground">
                Todos os links de produtos geram comissões
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center space-y-3">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Independência</h3>
              <p className="text-sm text-muted-foreground">
                Nossas análises são 100% imparciais
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center space-y-3">
              <ExternalLink className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">Zero Custo Extra</h3>
              <p className="text-sm text-muted-foreground">
                Você não paga nada a mais por isso
              </p>
            </div>
          </div>

          <section className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Como Ganhamos Dinheiro</h2>
              <p>
                O <strong>Top10 Games</strong> é mantido através do <strong>Programa de Afiliados do Mercado Livre</strong>. 
                Isso significa que quando você clica em um link de produto em nosso site e realiza uma compra, 
                recebemos uma pequena comissão do Mercado Livre.
              </p>
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-accent mb-3">🔍 Importante Saber</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>A comissão vem do Mercado Livre, não do seu bolso</li>
                  <li>O preço que você paga é exatamente o mesmo</li>
                  <li>Você não é obrigado a usar nossos links</li>
                  <li>Nossa recomendação é baseada em qualidade, não em comissão</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Nossa Independência Editorial</h2>
              <p>
                <strong>Jamais comprometemos nossas análises por dinheiro.</strong> Se um produto não presta, 
                dizemos isso claramente, mesmo que ele ofereça alta comissão.
              </p>
              <p>
                Nossa reputação e sua confiança são infinitamente mais valiosas do que qualquer comissão pontual.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Como Escolhemos os Produtos</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>Avaliações de usuários:</strong> Lemos centenas de reviews reais no Mercado Livre
                </li>
                <li>
                  <strong>Especificações técnicas:</strong> Comparamos detalhes como CPU, GPU, RAM, armazenamento
                </li>
                <li>
                  <strong>Reputação da marca:</strong> Priorizamos fabricantes com histórico consolidado
                </li>
                <li>
                  <strong>Custo-benefício:</strong> O produto oferece boa relação entre recursos e preço?
                </li>
                <li>
                  <strong>Disponibilidade:</strong> O produto está em estoque e com entrega confiável?
                </li>
              </ol>
            </div>

            <div className="bg-gradient-primary p-8 rounded-lg">
              <h2 className="text-3xl font-semibold text-primary-foreground mb-4">Nosso Compromisso</h2>
              <div className="space-y-4 text-primary-foreground/90">
                <p>
                  ✅ <strong>Sempre divulgar</strong> quando um link é de afiliado
                </p>
                <p>
                  ✅ <strong>Manter independência</strong> nas análises e recomendações
                </p>
                <p>
                  ✅ <strong>Atualizar informações</strong> quando produtos mudarem ou novos surgirem
                </p>
                <p>
                  ✅ <strong>Responder dúvidas</strong> de forma honesta e educada
                </p>
                <p>
                  ✅ <strong>Corrigir erros</strong> rapidamente quando identificados
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Informações de Contato</h2>
              <p>
                Tem alguma dúvida sobre nosso modelo de negócio ou quer relatar algo suspeito? 
                Entre em contato conosco através da página <a href="/sobre" className="text-primary hover:underline">Sobre Nós</a>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">Relacionamento com o Mercado Livre</h2>
              <p>
                Somos <strong>afiliados independentes</strong> do Mercado Livre. Isso significa que:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Não somos empregados ou representantes oficiais do Mercado Livre</li>
                <li>Não temos controle sobre preços, estoque ou políticas de vendedores</li>
                <li>Não temos acesso a dados pessoais de compradores</li>
                <li>Não processamos pagamentos nem lidamos com envios</li>
              </ul>
              <p className="mt-4">
                Para questões de compra, atendimento ou garantia, você deve contatar diretamente 
                o vendedor através do Mercado Livre.
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default Transparency;
