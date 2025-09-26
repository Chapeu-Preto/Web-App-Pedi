import { LogIn, UserPlus, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function AuthButtons() {
  const handleLogin = () => {
    console.log("Abrir tela de login");
  };

  const handleRegister = () => {
    console.log("Abrir tela de cadastro");
  };

  const handleContinueWithoutLogin = () => {
    console.log("Continuar sem cadastro");
  };

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-gradient-card border-border shadow-card">
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-foreground">
              Acesse sua conta
            </h3>
            <p className="text-sm text-muted-foreground">
              Faça pedidos, acumule pontos e aproveite benefícios exclusivos
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={handleLogin}
              variant="default"
              size="lg"
              className="w-full"
            >
              <LogIn className="h-5 w-5" />
              Entrar
            </Button>
            
            <Button 
              onClick={handleRegister}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <UserPlus className="h-5 w-5" />
              Cadastrar-se
            </Button>
          </div>
        </div>
      </Card>
      
      <Button 
        onClick={handleContinueWithoutLogin}
        variant="ghost"
        size="lg"
        className="w-full text-muted-foreground"
      >
        <Globe className="h-5 w-5" />
        Continuar sem cadastro
      </Button>
    </div>
  );
}