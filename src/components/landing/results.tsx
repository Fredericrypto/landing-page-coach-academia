import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const results = [
  {
    beforeId: "result-1-before",
    afterId: "result-1-after",
    caption: "Perdeu 15kg em 4 meses",
  },
  {
    beforeId: "result-2-before",
    afterId: "result-2-after",
    caption: "Ganhou 8kg de massa muscular",
  },
  {
    beforeId: "result-3-before",
    afterId: "result-3-after",
    caption: "Redefiniu o corpo e a autoestima",
  },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export function Results() {
  return (
    <section id="resultados" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Resultados Reais</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transformações que Inspiram</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja o progresso real de alguns de nossos clientes. O próximo pode ser você.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {results.map((result, index) => {
            const beforeImg = getImage(result.beforeId);
            const afterImg = getImage(result.afterId);
            if (!beforeImg || !afterImg) return null;

            return (
              <Card key={index} className="overflow-hidden border-border/50">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-[2/3]">
                      <Image
                        src={beforeImg.imageUrl}
                        alt="Antes"
                        fill
                        className="object-cover"
                        data-ai-hint={beforeImg.imageHint}
                      />
                       <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">ANTES</div>
                    </div>
                    <div className="relative aspect-[2/3]">
                       <Image
                        src={afterImg.imageUrl}
                        alt="Depois"
                        fill
                        className="object-cover"
                        data-ai-hint={afterImg.imageHint}
                      />
                       <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">DEPOIS</div>
                    </div>
                  </div>
                  <div className="p-4 bg-card">
                    <p className="font-semibold text-center text-foreground">{result.caption}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
