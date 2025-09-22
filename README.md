# 📱 Pedi – Web & Mobile App

O **Pedi** é um aplicativo **Web + Mobile** projetado para modernizar a experiência em restaurantes, permitindo que clientes **façam pedidos, acompanhem em tempo real, paguem pelo app, reservem mesas e aproveitem benefícios de fidelidade**.  

## ✨ Funcionalidades

- 🔑 **Login e Cadastro** (e-mail/senha + login social Google/Apple)  
- 📷 **Leitura de QR Code** → acesso direto ao cardápio  
- 🌍 **Cardápio Multilíngue** (Português, Inglês, Espanhol)  
- 🍽️ **Realizar Pedidos** sem precisar do garçom  
- 👀 **Acompanhamento de Pedido** em tempo real (cozinha → preparo → pronto)  
- 💳 **Pagamento pelo app** (PIX, cartão, carteira digital)  
- 📅 **Reserva de Mesas** direto no aplicativo  
- ⏳ **Fila de Espera** com posição em tempo real  
- ⭐ **Avaliações** (estrelas + comentários)  
- 🎟️ **Cartão Fidelidade** automático para descontos e benefícios  
- 🔔 **Promoções e Cupons** via notificações push/pop-ups  

---

## 🧭 Fluxo do Usuário

1. Cliente lê o **QR Code** do restaurante.  
2. Escolhe o idioma (PT, EN, ES).  
3. **Versão Web**:  
   - Sem cadastro → apenas cardápio.  
   - Com cadastro → pedidos, pagamentos, fidelidade e mais.  
4. **Versão Mobile (App)**:  
   - Todas as funcionalidades habilitadas, incluindo lista de restaurantes, reservas, fidelidade e promoções.  

---

## 🛠️ Tecnologias (Sugestão)

- **Frontend**: React / React Native (com suporte responsivo)  
- **Backend**: Node.js + Express  
- **Banco de Dados**: PostgreSQL ou MongoDB  
- **Autenticação**: JWT (JSON Web Tokens)  
- **Pagamentos**: Integração com APIs (PIX, Stripe, PayPal)  
- **Push Notifications**: Firebase Cloud Messaging  
- **Multilíngue**: i18n  

---

## 📂 Estrutura do Repositório

Pedi/
├── backend/ # API, banco de dados, autenticação

├── frontend/ # App Web (React)

├── mobile/ # App Mobile (React Native)

├── docs/ # Documentação (PRD, Wireframes, Fluxogramas)

│ ├── Pedi_PRD.pdf

│ ├── Pedi_Wireframes.pdf

│ └── Pedi_Fluxograma.pdf

├── README.md # Documentação principal

└── package.json # Dependências do projeto


---

## 📖 Documentação

- 📑 [PRD – Product Requirements Document](./docs/Pedi_PRD.pdf)  
- 🖼️ [Wireframes](./docs/Pedi_Wireframes.pdf)  
- 🔀 [Fluxograma de Navegação](./docs/Pedi_Fluxograma.pdf)  

---

## 🚀 Como Rodar o Projeto (Sugestão)

### Pré-requisitos
- Node.js >= 18  
- npm ou yarn  
- Banco de dados PostgreSQL/MongoDB  
- Conta no Firebase (para push notifications)  

### Passos
```bash
# Clonar o repositório
git clone https://github.com/seuusuario/pedi.git
cd pedi

# Instalar dependências
cd backend && npm install
cd ../frontend && npm install
cd ../mobile && npm install

# Rodar backend
cd backend && npm run dev

# Rodar frontend
cd ../frontend && npm start

# Rodar mobile
cd ../mobile && npm start
