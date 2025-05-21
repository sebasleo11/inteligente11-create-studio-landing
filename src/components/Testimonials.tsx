
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Gracias a CreateStudio pude lanzar mi primer curso con video animado",
      author: "María G."
    },
    {
      quote: "No sabía editar y hoy creo animaciones para todo",
      author: "Carlos M."
    },
    {
      quote: "¡La mejor inversión que hice este año!",
      author: "Laura S."
    }
  ];

  return (
    <section className="section bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center gradient-text mb-10">Lo que dicen nuestros usuarios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-brand-light p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl text-brand-blue mb-4">"</div>
              <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              <div className="text-right font-bold text-brand-purple">- {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
