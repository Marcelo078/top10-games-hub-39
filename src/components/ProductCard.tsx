import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  price?: string;
  image: string;
  affiliateLink: string;
  articleSlug?: string;
  badge?: string;
}

const ProductCard = ({ title, price, image, affiliateLink, articleSlug, badge }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        {badge && (
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
            {badge}
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        {price && (
          <p className="text-2xl font-bold text-primary">{price}</p>
        )}
        <div className="flex gap-2">
          {articleSlug && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link to={`/artigo/${articleSlug}`}>
                <Info className="h-4 w-4" />
                Saiba Mais
              </Link>
            </Button>
          )}
          <Button variant="hero" size="sm" asChild className="flex-1">
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
            >
              <ExternalLink className="h-4 w-4" />
              Ver Oferta
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
