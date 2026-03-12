import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551993631514";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Agendar pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7" style={{ color: "white" }} />
  </a>
);

export default WhatsAppButton;
