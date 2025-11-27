# A GEN - Soluciones de Nueva Generación

## Descripción del Proyecto

Este proyecto es un sitio web corporativo para A GEN, una empresa especializada en soluciones de automatización empresarial, inteligencia artificial e integraciones avanzadas. El sitio está diseñado específicamente para cumplir con los requisitos de verificación de Google Cloud OAuth.

## Tecnologías Utilizadas

- **Framework**: Next.js 14 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Herramientas de Desarrollo**: ESLint, Prettier
- **Deploy**: Optimizado para Vercel

## Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── page.tsx           # Página principal
│   ├── contact/           # Página de contacto
│   ├── privacy/           # Política de privacidad
│   ├── terms/             # Términos y condiciones
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── common/            # Componentes reutilizables
│   └── layout/            # Componentes de layout
├── lib/                   # Utilidades y configuraciones
├── hooks/                 # Custom hooks de React
├── types/                 # Definiciones de TypeScript
├── constants/             # Constantes de la aplicación
├── config/                # Configuraciones
├── services/              # Servicios de API
└── context/               # React Context providers
```

## Características Principales

### 1. Página Principal (Home)
- Hero section con propuesta de valor clara
- Servicios principales de A GEN
- Estadísticas de resultados
- Call-to-action optimizado

### 2. Política de Privacidad (/privacy)
- Cumple con requisitos de Google Cloud OAuth
- Detalla el uso de Google APIs
- Explica la recopilación y uso de datos
- Incluye información sobre derechos del usuario

### 3. Términos y Condiciones (/terms)
- Define el uso aceptable de servicios
- Políticas de facturación y pagos
- Propiedad intelectual
- Limitaciones de responsabilidad

### 4. Página de Contacto (/contact)
- Formulario de contacto completo
- Información de contacto empresarial
- Mapa de servicios
- Información de soporte

### 5. Layout Responsivo
- Header con navegación principal
- Footer con enlaces importantes
- Diseño mobile-first
- Optimización para SEO

## Servicios de A GEN

### Automatización Inteligente
- Optimización de procesos con IA avanzada
- Automatización de workflows empresariales
- Integración con sistemas existentes

### Integraciones GoHighLevel (GHL)
- Conecta y sincroniza herramientas
- Automatización de marketing
- Gestión de leads optimizada

### Chatbots y Agentes de Voz
- Desarrollo de chatbots inteligentes
- Agentes de voz automatizados
- Procesamiento de lenguaje natural

### Call Center con IA
- Automatización de atención al cliente
- Análisis de conversaciones
- Optimización de recursos humanos

### Optimización de Ventas
- Incremento de conversiones automático
- Análisis predictivo de ventas
- Automatización del embudo de ventas

## Configuración para Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Linting y Formateo
```bash
npm run lint          # Ejecutar ESLint
npm run lint:fix      # Corregir errores de ESLint automáticamente
npm run format        # Formatear código con Prettier
npm run format:check  # Verificar formato
```

### Type Checking
```bash
npm run type-check    # Verificar tipos de TypeScript
```

## Configuraciones Importantes

### ESLint
- Configuración personalizada para Next.js y TypeScript
- Reglas estrictas para calidad de código
- Integración con Prettier

### Prettier
- Formateo consistente de código
- Configuración para proyectos React/Next.js
- Integración con VS Code

### TypeScript
- Tipado estricto habilitado
- Interfaces definidas para todos los componentes
- Type safety en toda la aplicación

### Tailwind CSS
- Configuración v4 optimizada
- Componentes shadcn/ui preconfigurados
- Sistema de colores consistente

## Cumplimiento con Google Cloud OAuth

Este sitio web cumple con todos los requisitos para la verificación de OAuth de Google Cloud:

1. **Política de Privacidad Completa**: Detalla cómo se utilizan los datos de Google APIs
2. **Términos de Servicio Claros**: Define el uso aceptable y limitaciones
3. **Información de Contacto Verificable**: Datos empresariales completos
4. **Contenido Profesional**: Representa fielmente los servicios de la empresa
5. **Estructura Legal**: Páginas requeridas accesibles desde el footer

## Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Build de producción
- `npm run start`: Servidor de producción
- `npm run lint`: Análisis de código con ESLint
- `npm run lint:fix`: Corrección automática de ESLint
- `npm run format`: Formateo con Prettier
- `npm run format:check`: Verificación de formato
- `npm run type-check`: Verificación de tipos TypeScript
- `npm run clean`: Limpiar archivos de build

## Contacto de A GEN

- **Website**: https://agen.com
- **Email**: info@agen.com
- **Soporte**: support@agen.com
- **Teléfono**: +1 (555) 123-4567

## Notas Importantes

- Este proyecto está configurado para deployment en Vercel
- Todas las imágenes y recursos deben ser optimizados para web
- El sitio está optimizado para SEO y performance
- Se incluyen meta tags para redes sociales (Open Graph, Twitter Cards)

## Próximos Pasos

1. Configurar dominio personalizado
2. Implementar analytics (Google Analytics, etc.)
3. Configurar formulario de contacto funcional
4. Añadir contenido real de la empresa
5. Optimizar imágenes y recursos estáticos