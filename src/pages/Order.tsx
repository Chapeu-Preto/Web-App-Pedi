import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Order() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Meu Pedido" />
      
      <div className="container px-4 py-6 space-y-6">
        <Card className="p-6 text-center space-y-4 bg-gradient-card">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground" />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Sua comanda está vazia</h3>
            <p className="text-muted-foreground">
              Adicione itens do cardápio para começar seu pedido
            </p>
          </div>
          <Button variant="hero" size="lg" className="w-full">
            Ver Cardápio
          </Button>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
}