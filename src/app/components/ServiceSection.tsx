'use client'

import { Briefcase, Calculator, FileText, Search, Users } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from './ui/Card';

export default function ServiceSection() {
    const services = [
        {
            icon: Users,
            title: "Departamento Pessoal",
            description: "Gestão completa de recursos humanos, folha de pagamento, benefícios e cumprimento das obrigações trabalhistas."
        },
        {
            icon: FileText,
            title: "Departamento Fiscal",
            description: "Controle e gestão de todas as obrigações fiscais, declarações e planejamento tributário estratégico."
        },
        {
            icon: Calculator,
            title: "Departamento Contábil",
            description: "Escrituração contábil, demonstrações financeiras e análises gerenciais para tomada de decisão."
        },
        {
            icon: Search,
            title: "Auditoria",
            description: "Revisão e validação de processos contábeis, garantindo conformidade e identificando oportunidades de melhoria."
        },
        {
            icon: Briefcase,
            title: "Consultoria Empresarial e Jurídica",
            description: "Orientação estratégica para crescimento empresarial, reestruturações e questões jurídicas empresariais."
        }
    ];


  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas e personalizadas para impulsionar o crescimento da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover-gold group transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para desenvolver estratégias específicas para o seu negócio.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-gold"
            >
              Solicitar Consultoria
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
