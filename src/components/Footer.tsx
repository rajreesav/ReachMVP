import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919153663735?text=Hi%20ReachMVP,%20I%27d%20like%20to%20discuss%20a%20mobile%20app%20project";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ReachMVP. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:reesavraj7761@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              reesavraj7761@gmail.com
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
