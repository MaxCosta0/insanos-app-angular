# 🏍️ Insanos Stock Control - Frontend

Sistema de gestão completo desenvolvido em Angular para o Insanos Motoclube.

## 📋 Sobre o Projeto

Frontend moderno e responsivo para o sistema de controle de estoque, vendas e sessões do Insanos Motoclube. Desenvolvido com Angular 21 e standalone components.

## 🚀 Tecnologias Utilizadas

- **Angular 21** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Estilização
- **RxJS** - Programação reativa
- **HttpClient** - Consumo de API REST

## 📦 Funcionalidades

### 🔐 Autenticação
- Login com JWT
- Proteção de rotas com guards
- Interceptor HTTP para adicionar token

### 📊 Dashboard
- Visão geral do sistema
- Estatísticas em tempo real
- Alertas de estoque baixo
- Ações rápidas

### 🎯 Gestão de Sessões
- Abrir/Fechar sessões de operação
- Controle de caixa inicial e final
- Histórico completo de sessões
- Relatórios por sessão

### 📦 Produtos
- CRUD completo de produtos
- Filtros por categoria e busca
- Controle de estoque
- Alertas de estoque mínimo

### 💰 PDV (Ponto de Venda)
- Interface otimizada para vendas
- Carrinho de compras
- Múltiplas formas de pagamento
- Cálculo automático de totais
- Registro instantâneo

### 📊 Movimentações de Estoque
- Entrada/Saída de produtos
- Histórico completo
- Rastreabilidade total

### 🏷️ Categorias
- Gerenciamento de categorias
- Ícones personalizados

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Angular CLI

### Passos de Instalação

1. **Instale as dependências**
```bash
npm install
```

2. **Configure a URL da API**

Edite o arquivo `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api'  // URL do backend
};
```

3. **Execute o projeto**
```bash
npm start
# ou
ng serve
```

4. **Acesse no navegador**
```
http://localhost:4200
```

## 🔑 Credenciais Padrão

**E-mail:** admin@insanos.com  
**Senha:** admin123

> ⚠️ **Nota:** A autenticação está configurada mas o backend pode estar sem autenticação ativa para desenvolvimento. Verifique a documentação do backend.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes da aplicação
│   │   ├── login/          # Tela de login
│   │   ├── layout/         # Layout principal com sidebar
│   │   ├── dashboard/      # Dashboard principal
│   │   ├── products/       # Gerenciamento de produtos
│   │   ├── sessions/       # Gestão de sessões
│   │   ├── sales/          # PDV (Ponto de Venda)
│   │   ├── categories/     # Categorias
│   │   └── stock-movements/ # Movimentações
│   ├── services/           # Serviços para consumir API
│   ├── models/             # Interfaces e modelos TypeScript
│   ├── guards/             # Guards de autenticação
│   ├── interceptors/       # HTTP Interceptors
│   └── environments/       # Configurações de ambiente
```

## 🎨 Características do Design

- **Design Moderno:** Gradientes e animações suaves
- **Responsivo:** Funciona em desktop, tablet e mobile
- **Tema Personalizado:** Cores do Insanos Motoclube
- **UX Otimizada:** Interface intuitiva e rápida

## 🔌 Integração com Backend

O frontend consome a API REST do backend Spring Boot. Certifique-se de que o backend está rodando em `http://localhost:8081`.

### Endpoints Principais Consumidos:

- `POST /api/auth/login` - Autenticação
- `GET /api/products` - Listar produtos
- `POST /api/sales` - Criar venda
- `GET /api/sessions/active` - Sessão ativa
- `POST /api/sessions` - Abrir sessão
- E muitos outros...

## 🚦 Scripts Disponíveis

```bash
# Desenvolvimento
npm start              # Inicia servidor de desenvolvimento
ng serve              # Mesma coisa

# Build
npm run build         # Build para produção
ng build --configuration production

# Testes
npm test              # Executa testes unitários
ng test
```

## 📱 Funcionalidades Detalhadas

### PDV (Ponto de Venda)
1. Busca rápida de produtos
2. Adição ao carrinho com um clique
3. Ajuste de quantidades
4. Aplicação de descontos
5. Seleção de forma de pagamento
6. Finalização instantânea

### Gestão de Sessões
1. Abrir sessão com nome e caixa inicial
2. Visualizar sessão ativa no sidebar
3. Fechar sessão com caixa final
4. Cálculo automático de diferença de caixa
5. Relatórios detalhados por sessão

### Dashboard
1. Cards com estatísticas gerais
2. Lista de produtos com estoque baixo
3. Status da sessão ativa
4. Ações rápidas para tarefas comuns

## 🔧 Configurações Avançadas

### Desabilitar Autenticação (Desenvolvimento)

Se o backend não exigir autenticação, você pode modificar o guard:

```typescript
// src/app/guards/auth.guard.ts
export const authGuard: CanActivateFn = () => {
  return true; // Sempre permite acesso
};
```

### Alterar URL da API

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://seu-servidor:porta/api'
};
```

## 🐛 Solução de Problemas

### Erro de CORS
Se encontrar erros de CORS, configure o backend para aceitar requisições do frontend:
```java
@CrossOrigin(origins = "http://localhost:4200")
```

### API não conecta
Verifique se:
1. O backend está rodando
2. A URL da API está correta no `environment.ts`
3. Não há firewall bloqueando

### Componentes não carregam
Execute:
```bash
npm install
ng serve --force
```

## 📞 Suporte

Sistema desenvolvido para o Insanos Motoclube 🏍️

---

**Desenvolvido com ❤️ e Angular**  
*Versão: 1.0.0*  
*Última atualização: Dezembro 2025*
