import { Container } from "@/components/common/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  Send,
  MessageSquare,
  Headphones,
  Globe
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-12">
      <Container maxWidth="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a revolucionar tu negocio con nuestras soluciones de automatización e IA. 
              Ponte en contacto con nuestro equipo de expertos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input id="firstName" type="text" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido *</Label>
                      <Input id="lastName" type="text" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" type="text" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="service">Servicio de Interés</Label>
                    <select 
                      id="service" 
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="automation">Automatización Inteligente</option>
                      <option value="integration">Integraciones GHL</option>
                      <option value="chatbots">Chatbots y Agentes de Voz</option>
                      <option value="callcenter">Call Center con IA</option>
                      <option value="sales">Optimización de Ventas</option>
                      <option value="consulting">Consultoría</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      required 
                      className="mt-1" 
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <div className="space-y-8">
              {/* Información Principal */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Correo Electrónico</h3>
                        <p className="text-gray-600">info@agen.com</p>
                        <p className="text-gray-600">support@agen.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Teléfono</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 765-4321</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Horarios de Atención</h3>
                        <p className="text-gray-600">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Sábados: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600">Domingos: Cerrado</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold">Ubicación</h3>
                        <p className="text-gray-600">123 Innovation Drive</p>
                        <p className="text-gray-600">Tech Valley, TV 12345</p>
                        <p className="text-gray-600">Estados Unidos</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Servicios Destacados */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Nuestros Servicios</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                      <span>Chatbots Inteligentes</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Headphones className="h-5 w-5 text-green-600" />
                      <span>Call Center con IA</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span>Integraciones Avanzadas</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-red-600" />
                      <span>Automatización de Marketing</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-semibold mb-3">Soporte Prioritario</h3>
                    <p className="text-gray-600 text-sm">
                      Nuestros clientes empresariales tienen acceso a soporte 24/7 
                      con tiempo de respuesta garantizado.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-semibold mb-4">¿Necesitas una Demo?</h2>
                  <p className="mb-6">
                    Programa una demostración personalizada de nuestras soluciones 
                    y descubre cómo podemos transformar tu negocio.
                  </p>
                  <Button variant="secondary" size="lg">
                    Agendar Demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">A GEN - Soluciones de Nueva Generación</h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Somos una empresa líder en automatización empresarial, especializada en integraciones inteligentes, 
                chatbots, agentes de voz y soluciones de IA que transforman la manera en que las empresas operan y se relacionan con sus clientes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">99.9%</div>
                  <div className="text-gray-600">Satisfacción del Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">24/7</div>
                  <div className="text-gray-600">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}