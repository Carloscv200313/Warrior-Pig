import { WhatsAppBubble } from "@/components/secciones/Burbuja";
import { Elejir } from "@/components/secciones/Elejir";
import FooterContacto from "@/components/secciones/Footer";
import { Ofertas } from "@/components/secciones/Ofertas";
import { Portal } from "@/components/secciones/Portal";

export default function Home() {
  return (
    <div className="h-[200vh] text-black">
      <Portal />
      <Elejir />
      <Ofertas />
      <FooterContacto/>
      <WhatsAppBubble
        phoneNumber="985014631" // Replace with the actual phone number
        message="¡Hola! Me gustaría obtener más información"
      />
    </div>
  );
}
