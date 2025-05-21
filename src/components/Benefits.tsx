
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Crear videos explicativos 3D de forma fácil",
      description: "Diseña animaciones profesionales sin experiencia previa"
    },
    {
      title: "No necesitás conocimientos técnicos",
      description: "Interfaz intuitiva que no requiere curva de aprendizaje"
    },
    {
      title: "Estilo animación tipo Pixar",
      description: "Crea personajes y escenas con calidad profesional"
    },
    {
      title: "Ideal para redes sociales, cursos, reels, TikToks",
      description: "Formatos optimizados para todas tus necesidades digitales"
    },
    {
      title: "Precio único de por vida: USD $67",
      description: "Sin suscripciones mensuales, tuyo para siempre"
    }
  ];

  return (
    <section className="section bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center gradient-text mb-12">
          Potencia tu comunicación con animaciones profesionales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-brand-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="mt-1 bg-gradient-to-r from-brand-blue to-brand-purple p-1.5 rounded-full text-white">
                  <Check size={18} />
                </div>
                <h3 className="font-semibold text-xl">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 ml-10">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
