import Link from "next/link";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

const WHATSAPP_LINK = "https://wa.me/5547999999999";

export function FloatingWhatsapp() {
  return (
    <Link
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8" />
    </Link>
  );
}
