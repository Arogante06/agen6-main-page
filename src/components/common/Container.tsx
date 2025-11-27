import { cn } from "@/lib/utils";
import { BaseComponent } from "@/types/global";

interface ContainerProps extends BaseComponent {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
  center?: boolean;
}

export function Container({ 
  children, 
  className, 
  maxWidth = "lg", 
  center = true 
}: ContainerProps) {
  return (
    <div 
      className={cn(
        "w-full",
        maxWidth !== "none" && "px-4 sm:px-6 lg:px-8",
        center && maxWidth !== "none" && "mx-auto",
        {
          "max-w-sm": maxWidth === "sm",
          "max-w-md": maxWidth === "md", 
          "max-w-lg": maxWidth === "lg",
          "max-w-xl": maxWidth === "xl",
          "max-w-2xl": maxWidth === "2xl",
          "max-w-full": maxWidth === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}