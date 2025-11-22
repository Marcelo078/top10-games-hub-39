import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Isenção de Responsabilidade | Top10 Games</title>
        <meta name="description" content="Isenção de responsabilidade sobre nossas análises, recomendações e links de afiliados." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="space-y-8">
          <div className="text-center space-y-4">
            <AlertTriangle className="h-16 w-16 text-primary mx-auto" />
            <h1 className="text-4xl font-bold text-foreground">Isenção de Responsabilidade</h1>
            <p className="text-xl text-muted-foreground">
              Informações importantes sobre o uso deste site
            </p>
          </div>

          <section className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-destructive mb-4">⚠️ Leia com Atenção</h2>
              <p>
                Este documento estabelece limites de responsabilidade sobre o conteúdo e recomendações 
                fornecidas pelo <strong>Top10 Games</strong>. Ao usar nosso site, você concorda com estes termos.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">1. Natureza das Informações</h2>
              <p>
                O conteúdo deste site é fornecido apenas para <strong>fins informativos e educacionais</strong>. 
                Nossas análises, opiniões e recomendações:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>São baseadas em pesquisa e testes quando possível</li>
                <li>Refletem nossa opinião pessoal e experiência</li>
                <li>Podem conter erros ou imprecisões não intencionais</li>
                <li>Podem ficar desatualizadas com o tempo</li>
                <li>Não substituem pesquisa própria antes da compra</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">2. Decisões de Compra</h2>
              <p>
                <strong>Você é inteiramente responsável</strong> por suas decisões de compra. Antes de adquirir qualquer produto:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Verifique especificações diretamente com o vendedor</li>
                <li>Leia avaliações de outros compradores</li>
                <li>Confirme preço, disponibilidade e condições de entrega</li>
                <li>Entenda políticas de troca e garantia</li>
                <li>Considere suas necessidades e orçamento específicos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">3. Links de Afiliados</h2>
              <p>
                Este site contém <strong>links de afiliados do Mercado Livre</strong>. Isso significa que:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Recebemos comissões por vendas através de nossos links</li>
                <li>O preço para você permanece o mesmo</li>
                <li>A comissão não influencia nossas análises</li>
                <li>Você pode comprar diretamente sem usar nossos links</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">4. Relacionamento com Vendedores</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">⚡ Muito Importante</h3>
                <p>
                  <strong>Não somos vendedores, fabricantes ou representantes oficiais</strong> de produtos mencionados. 
                  Não temos controle sobre:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Qualidade, autenticidade ou condição dos produtos</li>
                  <li>Preços, estoques ou disponibilidade</li>
                  <li>Processos de envio, entrega ou rastreamento</li>
                  <li>Atendimento ao cliente, trocas ou devoluções</li>
                  <li>Garantias ou assistência técnica</li>
                </ul>
              </div>
              <p className="mt-4">
                Para quaisquer problemas relacionados à compra, entre em contato diretamente com o 
                <strong> vendedor através do Mercado Livre</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">5. Preços e Disponibilidade</h2>
              <p>
                Preços, descontos e disponibilidade mencionados em nossos artigos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>São válidos apenas no momento da publicação</li>
                <li>Podem mudar sem aviso prévio</li>
                <li>Não são garantidos por nós</li>
                <li>Devem ser confirmados no site do vendedor</li>
              </ul>
              <p className="mt-3">
                <strong>Sempre verifique o preço final</strong> antes de concluir sua compra no Mercado Livre.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">6. Compatibilidade e Desempenho</h2>
              <p>
                Informações sobre desempenho, FPS, compatibilidade e requisitos técnicos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>São estimativas baseadas em testes ou especificações</li>
                <li>Podem variar conforme configuração e uso</li>
                <li>Não são garantias de desempenho</li>
                <li>Dependem de fatores externos (drivers, atualizações, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">7. Links Externos</h2>
              <p>
                Nosso site contém links para sites externos (Mercado Livre, fabricantes, parceiros). 
                <strong> Não nos responsabilizamos</strong> por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Conteúdo, políticas ou práticas de sites de terceiros</li>
                <li>Segurança ou privacidade em sites externos</li>
                <li>Transações realizadas fora do Top10 Games</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">8. Limitação de Responsabilidade</h2>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                <p>
                  <strong>Na máxima extensão permitida por lei</strong>, o Top10 Games e seus operadores 
                  não serão responsáveis por:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Perdas financeiras resultantes de compras baseadas em nossas recomendações</li>
                  <li>Produtos defeituosos, não conformes ou incompatíveis</li>
                  <li>Problemas com vendedores, entregas ou garantias</li>
                  <li>Decisões tomadas com base em informações do site</li>
                  <li>Erros ou omissões em nosso conteúdo</li>
                  <li>Interrupções ou falhas no funcionamento do site</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">9. Atualizações de Conteúdo</h2>
              <p>
                Fazemos esforços razoáveis para manter informações atualizadas, mas:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Não garantimos que todo conteúdo está sempre atualizado</li>
                <li>Produtos podem ser descontinuados ou substituídos</li>
                <li>Preços e especificações mudam frequentemente</li>
                <li>Sempre confirme informações críticas na fonte original</li>
              </ul>
            </div>

            <div className="bg-gradient-primary p-8 rounded-lg">
              <h2 className="text-3xl font-semibold text-primary-foreground mb-4">💡 Nossa Recomendação</h2>
              <div className="space-y-3 text-primary-foreground/90">
                <p>
                  Use o Top10 Games como <strong>ponto de partida</strong> para sua pesquisa, não como única fonte.
                </p>
                <p>
                  Sempre faça sua própria due diligence antes de comprar. Leia avaliações, compare preços, 
                  verifique garantias e entenda políticas de troca.
                </p>
                <p>
                  <strong>Compre com consciência e segurança!</strong>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-4">10. Contato para Correções</h2>
              <p>
                Se você identificar informações incorretas ou desatualizadas em nosso site, 
                por favor nos avise através da página <a href="/sobre" className="text-primary hover:underline">Sobre Nós</a>. 
                Faremos o possível para corrigir erros rapidamente.
              </p>
            </div>

            <div className="text-sm text-muted-foreground pt-6 border-t border-border">
              <p>
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
              <p className="mt-2">
                Reservamo-nos o direito de modificar este documento a qualquer momento. 
                Alterações entram em vigor imediatamente após publicação.
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default Disclaimer;
