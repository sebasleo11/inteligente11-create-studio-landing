
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Necesito saber diseño o edición?",
      answer: "No, CreateStudio está diseñado para ser súper intuitivo. La interfaz es amigable y no necesitas conocimientos técnicos previos para crear animaciones impactantes."
    },
    {
      question: "¿Sirve para promocionar productos?",
      answer: "¡Absolutamente! Es ideal para emprendedores que quieren destacar sus productos o servicios con animaciones profesionales. Perfecto para marketing digital."
    },
    {
      question: "¿Funciona en Mac y Windows?",
      answer: "Sí, CreateStudio es compatible con ambos sistemas operativos, Mac y Windows, lo que te permite trabajar desde cualquier computadora."
    },
    {
      question: "¿Es un pago mensual?",
      answer: "¡No! Lo mejor de CreateStudio es que ofreces un pago único lifetime. Pagas una sola vez y el software es tuyo para siempre, sin cuotas ni suscripciones mensuales."
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center gradient-text mb-10">Preguntas frecuentes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
