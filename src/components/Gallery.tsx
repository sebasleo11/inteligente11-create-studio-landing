
import { Images } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/9468619c-d545-428e-a8e9-2caaf976a93c.png", 
      alt: "CreateStudio 3D - Personajes animados"
    },
    {
      src: "/lovable-uploads/9956d921-946f-4b6f-a308-a5e099b119e1.png", 
      alt: "CreateStudio 3D - Ejemplo de uso"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Images className="text-brand-purple" size={24} />
            <h2 className="gradient-text">Ejemplos increíbles</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mira lo que podés crear con CreateStudio 3D, ¡sin conocimientos técnicos!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-2"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover rounded-md hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
