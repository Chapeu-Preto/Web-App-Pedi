import { Home, Menu, ShoppingBag, Gift, User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Início", path: "/" },
  { icon: Menu, label: "Cardápio", path: "/menu" },
  { icon: ShoppingBag, label: "Pedido", path: "/order" },
  { icon: Gift, label: "Fidelidade", path: "/loyalty" },
  { icon: User, label: "Perfil", path: "/profile" },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-300",
                "min-w-[60px] text-xs font-medium",
                isActive 
                  ? "text-primary bg-primary/10 scale-105" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <Icon 
                className={cn(
                  "h-5 w-5 mb-1 transition-all duration-300",
                  isActive && "scale-110"
                )} 
              />
              <span className={cn(
                "transition-all duration-300",
                isActive && "font-semibold"
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}