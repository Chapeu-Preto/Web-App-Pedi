import { QrCode, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  showQR?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
}

export function Header({ 
  title, 
  showQR = false, 
  showSearch = false, 
  showNotifications = false 
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold text-foreground">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          {showSearch && (
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          {showQR && (
            <Button variant="outline" size="icon">
              <QrCode className="h-5 w-5" />
            </Button>
          )}
          
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full border-2 border-background" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}