
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5491140930260?text=Hola!%20Estoy%20interesado%20en%20CreateStudio%20lifetime%20que%20vi%20en%20tu%20web.%20¿Me%20podés%20pasar%20más%20info%3F%20Gracias!";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 pt-12 pb-16 md:pt-16 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-bold mb-4">
              <span className="gradient-text">¡Videos animados 3D</span> 
              <br />
              <span className="gradient-text">sin saber editar!</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Promocioná tus productos, cursos o servicios con animaciones espectaculares que impacten en tu audiencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={20} />
                ¡Quiero más info por WhatsApp!
              </a>
            </div>
          </div>
          
          <div className="relative md:ml-auto">
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] animate-float">
              <img
                src="/lovable-uploads/0f857312-d8ee-4ee2-9f11-a63f12fe49bf.png"
                alt="CreateStudio 3D - Software de animación"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply opacity-30 blur-2xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply opacity-30 blur-2xl"></div>
    </section>
  );
};

export default Hero;
