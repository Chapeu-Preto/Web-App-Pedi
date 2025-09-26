import { QrCode, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function QRCodeScanner() {
  const handleScanQR = () => {
    // TODO: Implementar scanner de QR Code real
    console.log("Abrir scanner de QR Code");
  };

  return (
    <Card className="p-6 bg-gradient-card border-border shadow-card hover:shadow-floating transition-all duration-300">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
          <QrCode className="h-10 w-10 text-primary-foreground" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            Escanear QR Code
          </h3>
          <p className="text-sm text-muted-foreground">
            Aponte a câmera para o QR Code da mesa
          </p>
        </div>
        
        <Button 
          onClick={handleScanQR}
          variant="hero"
          size="lg"
          className="w-full"
        >
          <Scan className="h-5 w-5" />
          Escanear Mesa
        </Button>
      </div>
    </Card>
  );
}