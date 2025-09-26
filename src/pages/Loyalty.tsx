import { Gift, Star, Award } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Loyalty() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Fidelidade" />
      
      <div className="container px-4 py-6 space-y-6">
        {/* Loyalty Card */}
        <Card className="p-6 bg-gradient-primary text-primary-foreground shadow-glow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Cartão Fidelidade</h3>
              <Gift className="h-6 w-6" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Pontos atuais</span>
                <span className="font-semibold">850 pontos</span>
              </div>
              <Progress value={85} className="h-2" />
              <p className="text-xs opacity-90">
                Faltam 150 pontos para o próximo desconto
              </p>
            </div>
          </div>
        </Card>

        {/* Rewards */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recompensas Disponíveis</h3>
          
          <Card className="p-4 bg-gradient-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold">10% de Desconto</h4>
                  <p className="text-sm text-muted-foreground">500 pontos</p>
                </div>
              </div>
              <Badge>Disponível</Badge>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card opacity-60">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">Bebida Grátis</h4>
                  <p className="text-sm text-muted-foreground">1000 pontos</p>
                </div>
              </div>
              <Badge variant="secondary">Em breve</Badge>
            </div>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}