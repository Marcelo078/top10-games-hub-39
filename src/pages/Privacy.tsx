import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidade | Top10 Games</title>
        <meta name="description" content="Política de Privacidade do Top10 Games - Como coletamos, usamos e protegemos seus dados pessoais." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <section className="space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações que Coletamos</h2>
              <p>
                O <strong>Top10 Games</strong> coleta informações limitadas para melhorar a experiência do usuário:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
                <li><strong>Cookies:</strong> para análise de tráfego e preferências do usuário</li>
                <li><strong>Dados de afiliados:</strong> cliques em links de produtos (anonimizados)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Como Usamos suas Informações</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Melhorar o conteúdo e recomendações de produtos</li>
                <li>Analisar estatísticas de acesso e comportamento</li>
                <li>Personalizar a experiência de navegação</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartilhamento de Dados</h2>
              <p>
                <strong>Não vendemos nem compartilhamos</strong> dados pessoais identificáveis com terceiros. 
                Utilizamos serviços de análise (Google Analytics) que podem coletar dados agregados e anonimizados.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies</h2>
              <p>
                Utilizamos cookies essenciais para o funcionamento do site e cookies de terceiros para análise. 
                Você pode desativar cookies nas configurações do navegador, mas isso pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Programa de Afiliados</h2>
              <p>
                Como <strong>Afiliado do Mercado Livre</strong>, rastreamos cliques em links de produtos através de 
                cookies de afiliados. Isso não identifica você pessoalmente e serve apenas para atribuir comissões.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
              <p>De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Solicitar acesso aos seus dados</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar exclusão de dados</li>
                <li>Revogar consentimento</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Segurança</h2>
              <p>
                Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, 
                alteração, divulgação ou destruição.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contato</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato através da 
                página <a href="/sobre" className="text-primary hover:underline">Sobre Nós</a>.
              </p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
