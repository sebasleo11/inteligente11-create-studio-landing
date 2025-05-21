
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-4 px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">
            <span className="gradient-text">InteliGENTE11</span>
          </div>
        </div>
      </header>
      
      <main>
        <Hero />
        <Benefits />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      
      <footer className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} InteliGENTE11. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-50 mt-2">
            CreateStudio 3D es propiedad de su respectivo dueño. InteliGENTE11 es afiliado oficial.
          </p>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
