'use client'

import React, { useState } from 'react'
import { Card, CardContent } from './ui/Card'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Button } from './ui/Button'
import { Input } from './ui/Input';
import { Textarea } from './ui/Textare';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre os serviços da Unicon Consultoria e Contabilidade.`);
        window.open(`https://wa.me/556734242406?text=${message}`, '_blank');
    };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para impulsionar o crescimento da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicitar Consultoria</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo
                  </label>
                  <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" required className="bg-input border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" required className="bg-input border-border" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(67) 9999-9999"
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Conte-nos sobre sua empresa e como podemos ajudar..." rows={4} required className="bg-input border-border" />
                </div>

                <Button  type="submit"  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold" >
                  Enviar Mensagem
                </Button>

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Ou fale conosco pelo WhatsApp</p>
                  <Button 
                    type="button"
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(67) 3424-2406</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/unicon_consultoria/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        @unicon_consultoria
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Dourados - MS</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Av. Weimar Gonçalves Torres, 4554<br />
                        Jardim Caramuru<br />
                        Dourados - MS, 79830-021
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Campo Grande - MS</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Rua Doutor Dolor Ferreira de Andrade, 848<br />
                        Campo Grande - MS, 79010-140
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Nossas Localizações</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dourados Map */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d-54.8!3d-22.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEyJzAwLjAiUyA1NMDCNDQ4JzAwLjAiVw!5e0!3m2!1spt-BR!2sbr!4v1609459200000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Unicon Dourados"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground">Escritório Dourados</h4>
                  <p className="text-sm text-muted-foreground">Av. Weimar Gonçalves Torres, 4554</p>
                </div>
              </CardContent>
            </Card>

            {/* Campo Grande Map */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8!2d-54.6!3d-20.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI0JzAwLjAiUyA1NMDCNDA2JzAwLjAiVw!5e0!3m2!1spt-BR!2sbr!4v1609459200000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Unicon Campo Grande"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-foreground">Escritório Campo Grande</h4>
                  <p className="text-sm text-muted-foreground">Rua Dr. Dolor Ferreira de Andrade, 848</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
