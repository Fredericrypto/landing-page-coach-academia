import Link from "next/link";
import { Instagram } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { WhatsappIcon } from "../icons/whatsapp-icon";

const WHATSAPP_LINK = "https://wa.me/5547999999999";
const INSTAGRAM_LINK = "https://instagram.com/fitevolutionbnu";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="flex flex-col items-center gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Evolua com quem entende de resultados reais!
            </p>
          </div>
          <div className="grid gap-4 place-items-center">
            <h4 className="font-semibold tracking-tight">Contato</h4>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>Rua Fictícia, 123 - Velha, Blumenau/SC</p>
              <Link href={WHATSAPP_LINK} className="hover:text-primary transition-colors flex items-center gap-2 justify-center" target="_blank">
                <WhatsappIcon className="w-4 h-4" /> (47) 99999-9999
              </Link>
            </div>
          </div>
          <div className="grid gap-4 place-items-center">
            <h4 className="font-semibold tracking-tight">Siga-nos</h4>
            <div className="flex items-center gap-4">
              <Link href={INSTAGRAM_LINK} aria-label="Instagram" target="_blank">
                <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fit Evolution Blumenau. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
