import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Plans } from "@/components/landing/plans";
import { Results } from "@/components/landing/results";
import { Testimonials } from "@/components/landing/testimonials";
import { ContactForm } from "@/components/landing/contact-form";
import { Footer } from "@/components/landing/footer";
import { FloatingWhatsapp } from "@/components/landing/floating-whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Plans />
        <Results />
        <Testimonials />
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">Contato</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pronto para Mudar?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Preencha o formulário abaixo para agendar sua avaliação gratuita e dar o primeiro passo na sua jornada de transformação.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl py-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
