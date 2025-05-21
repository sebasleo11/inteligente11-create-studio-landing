
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  const affiliateLink = "https://aff.vidello.com/40598/160327";
  const whatsappLink = "https://wa.me/5491140930260?text=Hola!%20Estoy%20interesado%20en%20CreateStudio%20lifetime%20que%20vi%20en%20tu%20web.%20¿Me%20podés%20pasar%20más%20info%3F%20Gracias!";

  return (
    <section className="section bg-gradient-to-br from-brand-blue/90 to-brand-purple/90 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para revolucionar tus videos?</h2>
        <p className="text-xl mb-8 opacity-90">
          Accede ahora a la licencia lifetime de CreateStudio 3D y comienza a crear animaciones profesionales hoy mismo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-purple font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            Acceder a la Oferta de por Vida
            <ArrowRight size={20} />
          </a>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
        </div>
        
        <p className="mt-6 text-sm opacity-80">
          Pago único - Sin suscripciones mensuales - Tuyo para siempre
        </p>
      </div>
    </section>
  );
};

export default CTASection;
