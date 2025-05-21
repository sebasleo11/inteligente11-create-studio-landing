
import { Youtube, Instagram, Facebook, Globe, MessageCircle } from "lucide-react";
import TiktokIcon from "./icons/TiktokIcon";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "YouTube",
      handle: "InteliGENTE11",
      icon: <Youtube className="text-red-600" size={24} />,
      url: "https://www.youtube.com/@InteliGENTE11"
    },
    {
      name: "ChatGPT Group",
      handle: "ChatGPT-InteliGENTE",
      icon: <MessageCircle className="text-blue-600" size={24} />,
      url: "#" // Actualiza esto con el enlace correcto cuando esté disponible
    },
    {
      name: "Instagram",
      handle: "@inteligente1979",
      icon: <Instagram className="text-pink-600" size={24} />,
      url: "https://www.instagram.com/inteligente1979/"
    },
    {
      name: "TikTok",
      handle: "@inteligente..11",
      icon: <TiktokIcon className="text-black" size={24} />,
      url: "https://www.tiktok.com/@inteligente..11"
    },
    {
      name: "Facebook",
      handle: "Sebas Acuña",
      icon: <Facebook className="text-blue-700" size={24} />,
      url: "https://www.facebook.com/sebas.acuna"
    },
    {
      name: "Web Oficial",
      handle: "inteligente11.com",
      icon: <Globe className="text-brand-blue" size={24} />,
      url: "https://inteligente11.com"
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center gradient-text mb-8">Mis redes y contacto directo</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-2">{social.icon}</div>
              <h3 className="font-semibold text-gray-800">{social.name}</h3>
              <p className="text-sm text-gray-600">{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
