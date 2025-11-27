// Configuración base del proyecto
export const config = {
  app: {
    name: "Agen Page",
    version: "1.0.0",
    description: "Aplicación moderna con Next.js y shadcn/ui",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
    timeout: 10000,
  },
  auth: {
    sessionTimeout: 24 * 60 * 60 * 1000, // 24 horas
  },
  ui: {
    theme: {
      defaultMode: "system" as const,
      storageKey: "theme-preference",
    },
    animation: {
      duration: 200,
    },
  },
} as const;