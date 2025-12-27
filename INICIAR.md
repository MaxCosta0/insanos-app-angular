# 🚀 Guia Rápido de Inicialização

## ⚡ Start Rápido

```bash
cd /home/max/Documentos/projetos/insanos-frontend
npm start
```

Acesse: http://localhost:4200

## 🔑 Login Padrão

- **E-mail:** admin@insanos.com
- **Senha:** admin123

## 📋 Checklist de Configuração

### 1. Backend deve estar rodando
```bash
# Verifique se o backend está ativo em:
http://localhost:8081/api/health
```

### 2. Configurar URL da API (se necessário)
Edite: `src/environments/environment.ts`
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8081/api'  // ← Alterar se necessário
};
```

### 3. Instalar dependências (primeira vez)
```bash
npm install
```

## 🎯 Fluxo de Uso Recomendado

### 1️⃣ Primeiro Acesso
1. Faça login
2. Cadastre categorias (🏷️ Categorias)
3. Cadastre produtos (📦 Produtos)

### 2️⃣ Operação Diária
1. Abra uma sessão (🎯 Sessões → Abrir Nova Sessão)
2. Realize vendas (💰 Vendas/PDV)
3. Feche a sessão ao final do dia

### 3️⃣ Gestão de Estoque
1. Registre entradas/saídas (📊 Movimentações)
2. Monitore estoque baixo (Dashboard)

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm start                    # Inicia servidor
ng serve --open             # Inicia e abre navegador

# Build
npm run build               # Build produção
ng build --configuration production

# Verificar erros
ng lint                     # Lint do código

# Limpar e reinstalar
rm -rf node_modules
npm install
```

## 🔧 Troubleshooting

### Erro: "Cannot find module..."
```bash
npm install
```

### Erro: CORS
Configure o backend para aceitar `http://localhost:4200`

### Erro: API não responde
Verifique se o backend está rodando em `http://localhost:8081`

### Porta 4200 em uso
```bash
ng serve --port 4201
```

## 📦 Estrutura de Módulos

```
🏠 Dashboard          → Visão geral
🎯 Sessões           → Abrir/Fechar períodos
💰 Vendas (PDV)      → Ponto de venda
📦 Produtos          → Gerenciar produtos
📊 Movimentações     → Entrada/Saída
🏷️ Categorias        → Categorizar produtos
```

## 💡 Dicas

1. **Sempre abra uma sessão antes de vender**
2. **Use a busca rápida no PDV para agilizar**
3. **Configure estoque mínimo para receber alertas**
4. **Feche a sessão ao final do dia para gerar relatório**

## 🎨 Personalização

### Cores do tema
Edite: `src/styles.scss` para alterar cores principais

### Logo
Substitua: `public/favicon.ico`

## 📞 Informações Técnicas

- **Framework:** Angular 21
- **Linguagem:** TypeScript
- **Estilo:** SCSS
- **API:** REST (Spring Boot)
- **Arquitetura:** Standalone Components

---

**Pronto para usar! 🚀**
