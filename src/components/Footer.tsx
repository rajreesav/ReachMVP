import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Reesav Raj. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/reesav-raj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
