import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ROUTES } from "@/constants";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Información de la Empresa */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">A GEN</h3>
              <p className="text-gray-400 text-sm">
                Soluciones de Nueva Generación para automatización empresarial, 
                integraciones inteligentes y tecnología de IA.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Servicios</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Automatización Inteligente
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integraciones GHL
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chatbots y Agentes de Voz
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Call Center con IA
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Optimización de Ventas
                  </a>
                </li>
              </ul>
            </div>

            {/* Enlaces Rápidos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href={ROUTES.HOME} className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.ABOUT} className="hover:text-white transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href={ROUTES.CONTACT} className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contacto</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>info@agen.com</div>
                    <div>support@agen.com</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <div>+1 (555) 123-4567</div>
                    <div>+1 (555) 765-4321</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    123 Innovation Drive<br />
                    Tech Valley, TV 12345<br />
                    Estados Unidos
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-6xl mx-auto">
            <div className="text-gray-400 text-sm">
              © 2025 A GEN - Soluciones de Nueva Generación. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Términos
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}