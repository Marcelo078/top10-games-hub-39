import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Termos de Uso | Top10 Games</title>
        <meta name="description" content="Termos de Uso do Top10 Games - Regras e condições para uso do site." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6">Termos de Uso</h1>
          <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e usar o <strong>Top10 Games</strong>, você concorda com estes Termos de Uso. 
                Se não concordar, por favor, não utilize nosso site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Sobre o Serviço</h2>
              <p>
                O Top10 Games é um <strong>site de avaliações e recomendações de produtos</strong> relacionados a games e tecnologia. 
                Atuamos como <strong>afiliados do Mercado Livre</strong>, recebendo comissões por vendas qualificadas através de nossos links.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Conteúdo e Opiniões</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nossas análises refletem opiniões baseadas em pesquisa e testes quando possível</li>
                <li>Preços e disponibilidade são de responsabilidade dos vendedores no Mercado Livre</li>
                <li>Não garantimos que informações estejam sempre atualizadas</li>
                <li>Recomendamos verificar especificações diretamente no site do vendedor</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Links de Afiliados</h2>
              <p>
                <strong>Todos os links de produtos são links de afiliados.</strong> Ao clicar e realizar uma compra, 
                recebemos uma comissão do Mercado Livre sem custo adicional para você. Isso nos permite manter o site gratuito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Uso Aceitável</h2>
              <p>Você concorda em NÃO:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usar o site para fins ilegais</li>
                <li>Tentar acessar áreas restritas do site</li>
                <li>Reproduzir conteúdo sem autorização prévia</li>
                <li>Enviar vírus ou código malicioso</li>
                <li>Coletar dados de usuários sem permissão</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p>
                Todo conteúdo do site (textos, imagens, logos, design) é de propriedade do Top10 Games ou licenciado de terceiros. 
                É protegido por leis de direitos autorais e não pode ser reproduzido sem autorização.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Isenção de Garantias</h2>
              <p>
                O site é fornecido "<strong>como está</strong>". Não garantimos disponibilidade ininterrupta, 
                ausência de erros ou que o conteúdo atenda completamente suas necessidades.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitação de Responsabilidade</h2>
              <p>
                Não nos responsabilizamos por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Decisões de compra baseadas em nossas recomendações</li>
                <li>Problemas com produtos adquiridos através de links de afiliados</li>
                <li>Perdas indiretas, incidentais ou consequenciais</li>
                <li>Conteúdo de sites de terceiros (incluindo Mercado Livre)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modificações</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                Alterações significativas serão comunicadas no site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Lei Aplicável</h2>
              <p>
                Estes termos são regidos pelas leis brasileiras. Foro da comarca de [sua cidade] para dirimir controvérsias.
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
