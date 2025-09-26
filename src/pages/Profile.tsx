import { User, Settings, HelpCircle, LogOut, Bell } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Perfil" />
      
      <div className="container px-4 py-6 space-y-6">
        {/* Guest User Card */}
        <Card className="p-6 bg-gradient-card text-center space-y-4">
          <Avatar className="h-20 w-20 mx-auto">
            <AvatarImage src="" />
            <AvatarFallback className="text-2xl bg-primary/10 text-primary">
              <User className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Usuário Visitante</h3>
            <p className="text-muted-foreground text-sm">
              Faça login para acessar todas as funcionalidades
            </p>
          </div>
          
          <Button variant="hero" size="lg" className="w-full">
            Fazer Login
          </Button>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2">
          <Card className="p-4 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Configurações</span>
            </div>
          </Card>
          
          <Card className="p-4 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Notificações</span>
            </div>
          </Card>
          
          <Card className="p-4 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Ajuda e Suporte</span>
            </div>
          </Card>
        </div>

        {/* App Info */}
        <Card className="p-4 bg-gradient-card">
          <div className="text-center space-y-2">
            <h4 className="font-semibold text-primary">Pedi App</h4>
            <p className="text-xs text-muted-foreground">Versão 1.0.0</p>
          </div>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
}