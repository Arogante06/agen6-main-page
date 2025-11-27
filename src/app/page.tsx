import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/common/Container";
import { 
  Bot, 
  Zap, 
  BarChart3, 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  Headphones,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-linear-to-r from-blue-600 to-purple-600 text-white w-full">
        <div className="w-full px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Soluciones de Nueva Generación
            </h1>
            <div className="text-2xl lg:text-3xl font-bold mb-4 text-blue-100">
              A GEN
            </div>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Revoluciona tu negocio con integraciones inteligentes, automatización avanzada 
              y soluciones que transforman datos en resultados extraordinarios
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-slate-900 w-full">
        <div className="w-full px-6 lg:px-8">
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Nuestros Servicios</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Potencia tu empresa con soluciones de automatización e inteligencia artificial de última generación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-500/20 p-4 rounded-xl">
                    <Zap className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Automatización Inteligente</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Optimiza tus procesos empresariales con IA avanzada que aprende y se adapta a tu negocio, 
                      eliminando tareas repetitivas y maximizando la eficiencia operacional.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-purple-500/20 p-4 rounded-xl">
                    <Bot className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Integraciones GoHighLevel</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Conecta y sincroniza todas tus herramientas de marketing y ventas. 
                      Creamos flujos automatizados que potencian tu estrategia comercial.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-500/20 p-4 rounded-xl">
                    <BarChart3 className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Optimización de Ventas</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Incrementa tus conversiones automáticamente con análisis predictivo 
                      y optimización continua del embudo de ventas basado en datos reales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-red-500/20 p-4 rounded-xl">
                    <Shield className="h-8 w-8 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">Soluciones Seguras</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      Protección y confiabilidad garantizada con arquitectura empresarial, 
                      cifrado avanzado y monitoreo 24/7 de todos nuestros sistemas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-slate-800 w-full">
        <div className="w-full px-6 lg:px-8">
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Resultados que Hablan por Sí Solos</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Nuestros clientes experimentan transformaciones reales en sus negocios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-blue-500/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Users className="h-10 w-10 text-blue-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-300 font-medium text-lg">Clientes Satisfechos</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-500/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <Shield className="h-10 w-10 text-green-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-slate-300 font-medium text-lg">Uptime Garantizado</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-500/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                <TrendingUp className="h-10 w-10 text-purple-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10x</div>
              <div className="text-slate-300 font-medium text-lg">Incremento en Ventas</div>
            </div>
            
            <div className="text-center group">
              <div className="bg-orange-500/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-orange-500/30 transition-colors">
                <Headphones className="h-10 w-10 text-orange-400" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-300 font-medium text-lg">Soporte Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-linear-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="w-full px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-blue-100">
              Únete a cientos de empresas que ya están revolucionando sus procesos 
              con nuestras soluciones inteligentes de automatización e IA
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-blue-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-300" />
                </div>
                <div className="font-bold text-lg text-white mb-2">Implementación Rápida</div>
                <div className="text-blue-200 text-sm">En funcionamiento en 48 horas</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-green-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-green-300" />
                </div>
                <div className="font-bold text-lg text-white mb-2">Soporte 24/7</div>
                <div className="text-blue-200 text-sm">Atención especializada siempre</div>
              </div>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="bg-purple-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-300" />
                </div>
                <div className="font-bold text-lg text-white mb-2">ROI Garantizado</div>
                <div className="text-blue-200 text-sm">Resultados medibles desde el día 1</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Agendar Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
