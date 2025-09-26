import { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  "Todos", "Entradas", "Pratos Principais", "Bebidas", "Sobremesas"
];

const menuItems = [
  {
    id: 1,
    name: "Hambúrguer Artesanal",
    description: "Pão brioche, carne 180g, queijo, alface, tomate e molho especial",
    price: 32.90,
    category: "Pratos Principais",
    image: "🍔"
  },
  {
    id: 2,
    name: "Salmão Grelhado",
    description: "Filé de salmão grelhado com legumes e arroz de quinoa",
    price: 45.90,
    category: "Pratos Principais", 
    image: "🐟"
  },
  {
    id: 3,
    name: "Bruschetta Tradicional",
    description: "Pão italiano tostado com tomate, manjericão e azeite",
    price: 18.90,
    category: "Entradas",
    image: "🥖"
  },
  {
    id: 4,
    name: "Refrigerante 350ml",
    description: "Coca-Cola, Guaraná ou Fanta",
    price: 6.90,
    category: "Bebidas",
    image: "🥤"
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header 
        title="Cardápio" 
        showSearch={true}
        showNotifications={true}
      />
      
      <div className="container px-4 py-6 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar pratos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className={`cursor-pointer whitespace-nowrap px-4 py-2 transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-primary text-primary-foreground shadow-glow" 
                  : "hover:bg-secondary/80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="p-4 hover:shadow-card transition-all duration-300 bg-gradient-card">
              <div className="flex gap-4">
                <div className="text-4xl">{item.image}</div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    
                    <Button variant="success" size="sm">
                      <Plus className="h-4 w-4" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nenhum item encontrado para "{searchTerm}"
            </p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}