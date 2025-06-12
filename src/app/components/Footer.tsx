'use client'

import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image';
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image onClick={() => scrollToSection('home')} className='mx-auto hover:cursor-pointer' src="/images/logo_unicon.png" alt="Logo" width={200} height={96} />
            </div>
            {/* <p className="text-sm text-muted-foreground leading-relaxed">
              Facilitamos a rotina da sua empresa para que você cresça exponencialmente. 
              Mais de 30 anos de experiência e atendimento nacional.
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Links Rápidos</h4>
            <nav className="flex items-center space-x-2">
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
              <div onClick={() => window.open("tel:+556734242406")} className="flex items-center space-x-3 hover:cursor-pointer">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">(67) 3424-2406</span>
              </div>
              <div onClick={() => window.open("https://api.whatsapp.com/send?phone=5567984316015")} className="flex items-center space-x-3 hover:cursor-pointer">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">(67) 98431-6015</span>
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
            <div className="flex gap-2">
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
        </div>
      </div>
    </footer>
  )
}
