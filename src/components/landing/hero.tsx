import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const WHATSAPP_LINK = "https://wa.me/5547999999999";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4 md:px-6 space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Transforme seu corpo em <span className="text-primary">2026</span> com treinos personalizados em Blumenau
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
          Emagrecimento, hipertrofia, condicionamento físico – avaliação gratuita + plano exclusivo!
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Agende Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
