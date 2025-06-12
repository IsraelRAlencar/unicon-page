import { CheckCircle, Eye, Heart, Target } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from './ui/Card';

export default function AboutSection() {
    const values = [
        { icon: CheckCircle, title: "Qualidade", description: "Excelência em todos os nossos serviços" },
        { icon: Heart, title: "Satisfação do Cliente", description: "Foco total na experiência do cliente" },
        { icon: CheckCircle, title: "Integridade", description: "Transparência e ética em todas as relações" },
        { icon: Target, title: "Responsabilidade", description: "Comprometimento com resultados" },
        { icon: Eye, title: "Comprometimento", description: "Dedicação total aos nossos clientes" }
    ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-6">
            Sobre a Unicon
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 1991, construindo relacionamentos sólidos e oferecendo soluções contábeis estratégicas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* História */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Nossa História</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundada em 1991, a Unicon Consultoria e Contabilidade nasceu com o propósito de transformar 
              a gestão empresarial através de soluções contábeis inovadoras e personalizadas. 
              Com mais de três décadas de experiência, expandimos nossa atuação para todo território nacional, 
              mantendo escritórios estratégicos em Dourados e Campo Grande.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa trajetória é marcada pelo crescimento contínuo e pela confiança depositada por centenas 
              de empresas que escolheram a Unicon como parceira estratégica para seu desenvolvimento.
            </p>
          </div>

          {/* Missão, Visão, Valores */}
          <div className="space-y-8">
            <Card className="bg-card border-border hover-gold">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h4 className="text-xl font-bold text-foreground">Missão</h4>
                </div>
                <p className="text-muted-foreground">
                  Oferecer soluções contábeis estratégicas para empresas crescerem com segurança e eficiência.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover-gold">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-primary mr-3" />
                  <h4 className="text-xl font-bold text-foreground">Visão</h4>
                </div>
                <p className="text-muted-foreground">
                  Atender mais de 500 clientes com soluções completas até 2030.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover-gold text-center">
                <CardContent className="p-6">
                  <value.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Frase Destaque */}
        <div className="text-center py-8 relative">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
              "A excelência começa dentro de casa.{' '}
              <span className="gradient-gold">Nosso diferencial é o nosso time.</span>"
            </blockquote>
            <div className="mt-8 w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
