import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductComparisonProps {
  currentProduct: Product;
  similarProducts: Product[];
}

const ProductComparison = ({ currentProduct, similarProducts }: ProductComparisonProps) => {
  const allProducts = [currentProduct, ...similarProducts.slice(0, 2)];

  const getSpecValue = (product: Product, specKey: string): string => {
    return product.specs[specKey] || "N/A";
  };

  const comparisonSpecs = [
    "Processador",
    "Memória RAM",
    "Armazenamento",
    "Placa de Vídeo",
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Comparação de Produtos</h2>
        <p className="text-muted-foreground">
          Veja como este produto se compara com alternativas similares
        </p>
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="p-4 text-left font-bold text-foreground w-1/4">Especificação</th>
              {allProducts.map((product, index) => (
                <th key={product.id} className="p-4 text-center w-1/4">
                  <Card className={`p-4 ${index === 0 ? 'border-primary border-2 shadow-glow' : ''}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                      {product.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-2">{product.price}</p>
                    {index === 0 && (
                      <div className="flex items-center justify-center gap-2 text-primary text-sm font-semibold mb-2">
                        <CheckCircle2 className="h-4 w-4" />
                        Produto Atual
                      </div>
                    )}
                  </Card>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonSpecs.map((spec, specIndex) => (
              <tr key={spec} className={specIndex % 2 === 0 ? 'bg-muted/30' : ''}>
                <td className="p-4 font-semibold text-foreground">{spec}</td>
                {allProducts.map((product, prodIndex) => (
                  <td key={product.id} className={`p-4 text-center ${prodIndex === 0 ? 'bg-primary/5' : ''}`}>
                    <span className="text-muted-foreground">{getSpecValue(product, spec)}</span>
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-4 font-semibold text-foreground">Ação</td>
              {allProducts.map((product, index) => (
                <td key={product.id} className="p-4 text-center">
                  {index === 0 ? (
                    <Button variant="hero" size="lg" asChild className="w-full">
                      <a
                        href={product.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Oferta
                      </a>
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to={`/artigo/${product.slug}`}>
                          Ver Análise
                        </Link>
                      </Button>
                      <Button variant="hero" size="sm" asChild className="w-full">
                        <a
                          href={product.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer nofollow sponsored"
                        >
                          Ver Oferta
                        </a>
                      </Button>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {allProducts.map((product, index) => (
          <Card key={product.id} className={`p-4 ${index === 0 ? 'border-primary border-2 shadow-glow' : ''}`}>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="font-semibold mb-2">{product.title}</h3>
            <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
            
            {index === 0 && (
              <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-3">
                <CheckCircle2 className="h-4 w-4" />
                Produto Atual
              </div>
            )}
            
            <div className="space-y-2 mb-4">
              {comparisonSpecs.map((spec) => (
                <div key={spec} className="flex justify-between text-sm">
                  <span className="font-semibold text-foreground">{spec}:</span>
                  <span className="text-muted-foreground text-right">{getSpecValue(product, spec)}</span>
                </div>
              ))}
            </div>
            
            {index === 0 ? (
              <Button variant="hero" size="lg" asChild className="w-full">
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Oferta no Mercado Livre
                </a>
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link to={`/artigo/${product.slug}`}>
                    Ver Análise
                  </Link>
                </Button>
                <Button variant="hero" size="sm" asChild className="flex-1">
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                  >
                    Ver Oferta
                  </a>
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;
