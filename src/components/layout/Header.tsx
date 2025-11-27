import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { ROUTES } from "@/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="w-full px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <Link href={ROUTES.HOME} className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <span className="font-bold text-2xl">A GEN</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href={ROUTES.HOME} 
                className="text-sm font-medium transition-colors hover:text-blue-400 text-white"
              >
                Inicio
              </Link>
              <Link 
                href={ROUTES.ABOUT} 
                className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
              >
                Acerca de
              </Link>
              <Link 
                href={ROUTES.CONTACT} 
                className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
              >
                Contacto
              </Link>
              <Link 
                href="/privacy" 
                className="text-sm font-medium text-slate-300 transition-colors hover:text-blue-400"
              >
                Privacidad
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Iniciar Sesión
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}