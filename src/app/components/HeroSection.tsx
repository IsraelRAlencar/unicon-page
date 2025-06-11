'use client'

import React from 'react'
import { Button } from './ui/Button'
import { ArrowRight, Award, MapPin, Users } from 'lucide-react'
import Image from 'next/image';

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        {/* <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-gold">
            <span className="text-4xl font-bold text-primary-foreground">U</span>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Name */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* <h1 className="text-5xl md:text-7xl font-bold gradient-gold mb-4">
              UNICON
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Consultoria & Contabilidade
            </p> */}
            
            <Image className='mx-auto' src="/images/logo_unicon.png" alt="Logo" width={500} height={500} />
          </div>

          {/* Main Headline */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Facilitamos a rotina da sua empresa para que você{' '}
              <span className="gradient-gold">cresça exponencialmente</span>
            </h2>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('servicos')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 shadow-gold hover-gold group"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Highlights */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover-gold">
                <Award className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">+30 anos</h3>
                  <p className="text-muted-foreground">de experiência</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover-gold">
                <MapPin className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">Nacional</h3>
                  <p className="text-muted-foreground">Atendimento</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover-gold">
                <Users className="h-8 w-8 text-primary" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary">2 Escritórios</h3>
                  <p className="text-muted-foreground">Dourados e Campo Grande</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
