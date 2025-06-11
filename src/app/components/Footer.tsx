'use client'

import { Instagram, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">U</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">UNICON</h3>
                <p className="text-xs text-muted-foreground">Consultoria & Contabilidade</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Facilitamos a rotina da sua empresa para que você cresça exponencialmente. 
              Mais de 30 anos de experiência e atendimento nacional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('clientes')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Clientes
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">(67) 3424-2406</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Dourados e Campo Grande - MS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/unicon_consultoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Siga-nos no Instagram para dicas e novidades sobre contabilidade e gestão empresarial.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Unicon Consultoria e Contabilidade. Todos os direitos reservados.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>Desenvolvido com </span>
              <span className="text-primary">♥</span>
              <span> para impulsionar seu negócio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
