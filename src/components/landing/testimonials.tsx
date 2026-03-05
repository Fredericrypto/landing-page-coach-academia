import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "João S.",
    imageId: "testimonial-1",
    text: "O melhor investimento que fiz na minha saúde! Resultados incríveis e um profissional super atencioso. Recomendo 100%!",
  },
  {
    name: "Ana M.",
    imageId: "testimonial-2",
    text: "Consegui emagrecer e ganhar disposição como nunca imaginei. Os treinos são desafiadores e motivantes. Obrigada!",
  },
  {
    name: "Pedro L.",
    imageId: "testimonial-3",
    text: "Finalmente estou vendo a definição muscular que sempre quis. O acompanhamento faz toda a diferença. Valeu, mestre!",
  },
  {
    name: "Carla P.",
    imageId: "testimonial-4",
    text: "Treinar online parecia impossível, mas com o suporte do personal, me sinto mais motivada do que nunca. Super prático!",
  },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Depoimentos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que Nossos Clientes Dizem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A satisfação de quem confia no nosso trabalho é a nossa maior recompensa.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {testimonials.map((testimonial, index) => {
            const image = getImage(testimonial.imageId);
            return (
              <Card key={index} className="bg-background border-border/50 flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-muted-foreground italic">&quot;{testimonial.text}&quot;</p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  <Avatar>
                    {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-semibold">{testimonial.name}</p>
                    <StarRating />
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
