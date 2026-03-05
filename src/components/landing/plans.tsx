import { Dumbbell, Laptop, Flame, Weight, Apple } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Dumbbell className="h-10 w-10 text-primary" />,
    title: "Treino Presencial",
    description: "Acompanhamento individual e personalizado no seu local de preferência em Blumenau.",
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "Treino Online",
    description: "Planilhas de treino e suporte completo à distância, para você treinar onde e quando quiser.",
  },
  {
    icon: <Flame className="h-10 w-10 text-primary" />,
    title: "Programa Emagrecimento",
    description: "Foco total na perda de gordura e definição muscular com estratégias eficientes e comprovadas.",
  },
  {
    icon: <Weight className="h-10 w-10 text-primary" />,
    title: "Hipertrofia e Força",
    description: "Aumente sua massa muscular e força com treinos intensos e periodização inteligente.",
  },
  {
    icon: <Apple className="h-10 w-10 text-primary" />,
    title: "Acompanhamento Nutricional",
    description: "Orientações e planos alimentares para potencializar seus resultados e sua saúde. (Parceria)",
  },
];

export function Plans() {
  return (
    <section id="planos" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Nossos Serviços</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Encontre o Plano Perfeito para Você</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos uma variedade de serviços para atender às suas necessidades e objetivos específicos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 xl:grid-cols-5 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border/50 hover:border-primary transition-colors text-center flex flex-col items-center">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
