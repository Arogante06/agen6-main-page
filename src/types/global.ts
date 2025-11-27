// Tipos base para componentes
export interface BaseComponent {
  children?: React.ReactNode;
  className?: string;
}

// Tipos para navegación
export interface NavItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

// Tipos para formularios
export interface FormFieldProps extends BaseComponent {
  label?: string;
  error?: string;
  required?: boolean;
}

// Tipos para API responses
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Tipos para autenticación
export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

// Tipos para configuración
export interface AppConfig {
  app: {
    name: string;
    version: string;
    description: string;
    url: string;
  };
  api: {
    baseUrl: string;
    timeout: number;
  };
  auth: {
    sessionTimeout: number;
  };
  ui: {
    theme: {
      defaultMode: "light" | "dark" | "system";
      storageKey: string;
    };
    animation: {
      duration: number;
    };
  };
}