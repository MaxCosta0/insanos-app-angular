# 🎉 Sistema Insanos Stock Control - Frontend Angular

## ✅ PROJETO CRIADO COM SUCESSO!

### 📦 O que foi desenvolvido:

Um sistema frontend **completo e funcional** em Angular 21 para gerenciar o Insanos Motoclube, incluindo:

- 🔐 **Autenticação** com JWT
- 📊 **Dashboard** com estatísticas em tempo real
- 🎯 **Gestão de Sessões** (abrir/fechar caixa)
- 💰 **PDV (Ponto de Venda)** completo com carrinho
- 📦 **Gerenciamento de Produtos** (CRUD completo)
- 📊 **Movimentações de Estoque**
- 🏷️ **Categorias** personalizáveis

---

## 🚀 COMO INICIAR

### 1️⃣ Primeira vez (instalar dependências):
```bash
cd /home/max/Documentos/projetos/insanos-app-angular
npm install
```

### 2️⃣ Iniciar o servidor de desenvolvimento:
```bash
npm start
```

### 3️⃣ Abrir no navegador:
```
http://localhost:4200
```

### 4️⃣ Fazer login:
- **E-mail:** admin@insanos.com
- **Senha:** admin123

---

## ⚙️ CONFIGURAÇÃO

### Backend API
O sistema está configurado para conectar em:
```
http://localhost:8081/api
```

Se o backend estiver em outro endereço, edite:
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://SEU_SERVIDOR:PORTA/api'
};
```

---

## 📱 FUNCIONALIDADES

### 🏠 Dashboard
- Visão geral do sistema
- Total de produtos e valor do estoque
- Status da sessão ativa
- Alertas de estoque baixo
- Ações rápidas

### 🎯 Sessões
- Abrir nova sessão com caixa inicial
- Visualizar sessão ativa
- Fechar sessão com caixa final
- Histórico completo de sessões

### 💰 PDV (Ponto de Venda)
- Busca rápida de produtos
- Adicionar ao carrinho
- Ajustar quantidades
- Aplicar descontos
- Múltiplas formas de pagamento
- Finalização instantânea

### 📦 Produtos
- Criar, editar e excluir produtos
- Filtrar por categoria
- Buscar por nome
- Ver produtos com estoque baixo
- Controle de estoque mínimo

### 📊 Movimentações
- Registrar entradas e saídas
- Histórico completo
- Rastreabilidade

### 🏷️ Categorias
- Criar categorias personalizadas
- Usar emojis como ícones

---

## 🎯 FLUXO DE USO RECOMENDADO

### Primeiro dia:
1. ✅ Fazer login
2. ✅ Cadastrar categorias (Bebidas, Alimentos, etc)
3. ✅ Cadastrar produtos

### Operação diária:
1. ✅ Abrir sessão (definir caixa inicial)
2. ✅ Realizar vendas no PDV
3. ✅ Registrar entrada de produtos (se necessário)
4. ✅ Fechar sessão (contar caixa final)

---

## 📂 ESTRUTURA DO PROJETO

```
insanos-app-angular/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes visuais
│   │   │   ├── login/         # Tela de login
│   │   │   ├── layout/        # Layout com sidebar
│   │   │   ├── dashboard/     # Dashboard
│   │   │   ├── products/      # Produtos
│   │   │   ├── sessions/      # Sessões
│   │   │   ├── sales/         # PDV
│   │   │   ├── categories/    # Categorias
│   │   │   └── stock-movements/ # Movimentações
│   │   ├── services/          # Serviços de API
│   │   ├── models/            # Interfaces TypeScript
│   │   ├── guards/            # Proteção de rotas
│   │   └── interceptors/      # HTTP interceptors
│   └── environments/          # Configurações
├── README.md                  # Documentação completa
├── INICIAR.md                 # Guia rápido
├── RESUMO.md                  # Resumo técnico
└── SOBRE_O_SISTEMA.md        # Documentação do sistema
```

---

## 🛠️ COMANDOS ÚTEIS

```bash
# Desenvolvimento
npm start                    # Inicia servidor (porta 4200)
npm run build               # Build para produção

# Testes
npm test                    # Executa testes

# Outros
ng serve --port 4201       # Usar outra porta
ng serve --open            # Abrir navegador automaticamente
```

---

## 🐛 SOLUÇÃO DE PROBLEMAS

### Backend não conecta
1. Verifique se está rodando: `http://localhost:8081/api/health`
2. Verifique a URL em `src/environments/environment.ts`
3. Verifique CORS no backend

### Erro de autenticação
Se o backend não tem autenticação ativa, edite `src/app/guards/auth.guard.ts`:
```typescript
export const authGuard: CanActivateFn = () => {
  return true; // Desabilita autenticação
};
```

### Erro CORS
Configure o backend para aceitar requisições de `http://localhost:4200`

### Porta 4200 em uso
```bash
ng serve --port 4201
```

---

## 📚 DOCUMENTAÇÃO ADICIONAL

- **README.md** → Documentação técnica completa
- **INICIAR.md** → Guia de início rápido
- **RESUMO.md** → Resumo do projeto
- **SOBRE_O_SISTEMA.md** → Documentação do sistema backend

---

## 🎨 DESIGN

- ✅ Interface moderna com gradientes
- ✅ Totalmente responsivo
- ✅ Tema roxo/violeta (Insanos)
- ✅ Animações suaves
- ✅ Ícones emoji para melhor UX

---

## ✅ STATUS

```
✔ Projeto compilado com sucesso
✔ 8 componentes criados
✔ 7 serviços implementados
✔ 7 modelos TypeScript
✔ Roteamento configurado
✔ Autenticação implementada
✔ Pronto para uso!
```

---

## 🎉 PRONTO!

O sistema está **100% funcional** e pronto para uso!

**Próximo passo:** Inicie o backend e depois execute `npm start`

---

**Desenvolvido com ❤️ para Insanos Motoclube 🏍️**  
*Angular 21 + TypeScript + SCSS*  
*Dezembro 2025*
