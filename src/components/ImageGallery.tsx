import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Image Carousel */}
      <div className="relative group">
        <Carousel
          opts={{ align: "center" }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-zoom-in"
                  onClick={() => setIsZoomOpen(true)}
                >
                  <img
                    src={image}
                    alt={`${alt} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 flex-wrap justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all hover:scale-105",
                selectedImage === index
                  ? "border-primary shadow-glow"
                  : "border-border hover:border-primary/50"
              )}
            >
              <img
                src={image}
                alt={`${alt} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95">
          <Carousel className="w-full" opts={{ startIndex: selectedImage }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center min-h-[80vh] p-4">
                    <img
                      src={image}
                      alt={`${alt} - Imagem ampliada ${index + 1}`}
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
                <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
              </>
            )}
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
