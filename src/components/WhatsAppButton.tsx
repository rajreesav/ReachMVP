import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919153663735?text=Hi%20ReachMVP,%20I%27d%20like%20to%20discuss%20a%20mobile%20app%20project";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
