import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { BaseComponent } from "@/types";

interface AlertProps extends BaseComponent {
  variant?: "default" | "success" | "warning" | "error" | "info";
  title?: string;
  description?: string;
}

export function Alert({ 
  variant = "default", 
  title, 
  description, 
  children, 
  className 
}: AlertProps) {
  const variants = {
    default: {
      container: "border-border bg-background text-foreground",
      icon: <Info className="w-4 h-4" />,
    },
    success: {
      container: "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900 dark:text-green-100",
      icon: <CheckCircle2 className="w-4 h-4 text-green-600" />,
    },
    warning: {
      container: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-600" />,
    },
    error: {
      container: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900 dark:text-red-100",
      icon: <AlertCircle className="w-4 h-4 text-red-600" />,
    },
    info: {
      container: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-100",
      icon: <Info className="w-4 h-4 text-blue-600" />,
    },
  };

  const { container, icon } = variants[variant];

  return (
    <div
      className={cn(
        "border rounded-lg p-4 flex gap-3",
        container,
        className
      )}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        {title && (
          <h4 className="font-medium mb-1">{title}</h4>
        )}
        {description && (
          <p className="text-sm opacity-90">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
}