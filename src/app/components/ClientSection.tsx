'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/Card'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export default function ClientSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Maria Silva",
            company: "Tech Solutions Ltd.",
            role: "CEO",
            content: "A Unicon transformou nossa gestão financeira. Com mais de 5 anos de parceria, posso afirmar que são excepcionais em tudo que fazem.",
            rating: 5
        },
        {
            name: "João Santos",
            company: "Indústria Nova Era",
            role: "Diretor Financeiro",
            content: "Profissionalismo, agilidade e conhecimento técnico incomparáveis. A Unicon é fundamental para o crescimento da nossa empresa.",
            rating: 5
        },
        {
            name: "Ana Costa",
            company: "Comércio Central",
            role: "Proprietária",
            content: "Desde que contratei os serviços da Unicon, minha empresa cresceu 200%. O suporte é excepcional e sempre disponível.",
            rating: 5
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };


  return (
    <section id="clientes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-6">
            Clientes & Resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é o reflexo da nossa dedicação e qualidade
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card border-border relative overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Quote */}
        <div className="text-center py-16">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
              "Um cliente satisfeito é o{' '}
              <span className="gradient-gold">nosso maior marketing.</span>"
            </blockquote>
            <div className="mt-8 w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
