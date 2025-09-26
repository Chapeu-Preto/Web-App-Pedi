import { Header } from "@/components/layout/Header";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { QRCodeScanner } from "@/components/ui/QRCodeScanner";
import { AuthButtons } from "@/components/auth/AuthButtons";
import heroFood from "@/assets/hero-food.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Pedi" showNotifications={true} />
      
      <div className="container px-4 py-6 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src={heroFood}
            alt="Deliciosa comida de restaurante"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-2xl font-bold mb-2">
              Bem-vindo ao Pedi! 🍽️
            </h1>
            <p className="text-sm opacity-90">
              Faça seus pedidos de forma rápida e prática
            </p>
          </div>
        </div>

        {/* Main Actions */}
        <div className="space-y-6">
          <QRCodeScanner />
          <AuthButtons />
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-card p-4 rounded-xl border border-border text-center space-y-2">
            <div className="text-2xl">📱</div>
            <h3 className="font-semibold text-sm">Pedidos Rápidos</h3>
            <p className="text-xs text-muted-foreground">Faça pedidos em segundos</p>
          </div>
          
          <div className="bg-gradient-card p-4 rounded-xl border border-border text-center space-y-2">
            <div className="text-2xl">🎁</div>
            <h3 className="font-semibold text-sm">Programa Fidelidade</h3>
            <p className="text-xs text-muted-foreground">Acumule pontos e ganhe prêmios</p>
          </div>
          
          <div className="bg-gradient-card p-4 rounded-xl border border-border text-center space-y-2">
            <div className="text-2xl">⭐</div>
            <h3 className="font-semibold text-sm">Avaliações</h3>
            <p className="text-xs text-muted-foreground">Compartilhe sua experiência</p>
          </div>
          
          <div className="bg-gradient-card p-4 rounded-xl border border-border text-center space-y-2">
            <div className="text-2xl">🌍</div>
            <h3 className="font-semibold text-sm">Multilíngue</h3>
            <p className="text-xs text-muted-foreground">PT, EN, ES</p>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Index;
