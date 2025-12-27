# 🍺 Insanos Stock Control - Sistema de Gestão

## 📋 Sobre o Sistema

O **Insanos Stock Control** é um sistema de gestão completo desenvolvido especificamente para o **Insanos Motoclube**, com o objetivo de automatizar e controlar toda a operação comercial do estabelecimento.

## 🎯 Propósito

Este sistema foi criado para resolver os desafios de gestão de um motoclube que opera como bar/lanchonete, fornecendo:

### 🎪 Controle de Sessões de Pub
- Abertura e fechamento de sessões de operação (por exemplo: "Sessão Sexta-feira")
- Registro de caixa inicial e final de cada sessão
- Histórico completo de todas as sessões realizadas
- Controle de sessão ativa para garantir que apenas uma esteja aberta por vez

### 📦 Gestão de Estoque
- Cadastro completo de produtos com:
  - Nome, descrição e categoria
  - Preço de custo e preço de venda
  - Controle de quantidade em estoque
  - Status (ativo/inativo)
  - Alertas de estoque baixo
- Organização por categorias (Bebidas 🍺, Alimentos 🍔, Higiene 🧼, Limpeza 🧹, Outros 📦)
- Rastreamento de todas as movimentações de estoque (entrada/saída)

### 💰 Controle de Vendas (PDV)
- Registro de vendas vinculadas a sessões específicas
- Suporte a múltiplos itens por venda
- Cálculo automático de totais
- Métodos de pagamento variados (Dinheiro, PIX, Cartão)
- Histórico completo de vendas por sessão

### 📊 Relatórios Gerenciais
- **Dashboard Completo:**
  - Total de produtos cadastrados
  - Valor total do estoque
  - Total de vendas realizadas
  - Receita total gerada
  - Produtos com estoque baixo
  - Movimentações recentes
  
- **Relatório de Sessão:**
  - Vendas realizadas na sessão
  - Produtos mais vendidos
  - Receita por forma de pagamento
  - Lucro estimado
  - Diferença entre caixa esperado e real

### 🔄 Rastreabilidade Total
- Registro de quem realizou cada operação (vendas, movimentações)
- Timestamps automáticos em todas as operações
- Histórico completo de movimentações de estoque
- Auditoria de sessões (quem abriu, quem fechou)

## 🏗️ Arquitetura Técnica

### Backend (API REST)
- **Framework:** Spring Boot 3.1.5
- **Linguagem:** Java 17
- **Banco de Dados:** PostgreSQL 15
- **Arquitetura:** RESTful API com padrão MVC
- **Documentação:** OpenAPI/Swagger

### Principais Tecnologias
- **Spring Data JPA** - Persistência de dados
- **Hibernate** - ORM
- **Lombok** - Redução de boilerplate
- **ModelMapper** - Mapeamento de DTOs
- **Apache PDFBox** - Geração de relatórios PDF
- **PostgreSQL JSONB** - Armazenamento de metadados flexíveis

### Estrutura de Dados
```
📊 Schema Principal (public)
├── products          - Produtos cadastrados
├── categories        - Categorias de produtos
├── pub_sessions      - Sessões de operação
├── sales             - Vendas realizadas
├── sale_items        - Itens de cada venda
└── stock_movements   - Movimentações de estoque

👤 Schema de Autenticação (auth)
├── users            - Usuários do sistema
└── profiles         - Perfis e permissões
```

## 💼 Casos de Uso Principais

### 1️⃣ Abertura de Sessão
```
🕐 Operador abre o pub
   ↓
💰 Registra dinheiro inicial no caixa (ex: R$ 100,00)
   ↓
📝 Adiciona observações (opcional)
   ↓
✅ Sistema cria sessão ativa
```

### 2️⃣ Venda de Produtos
```
🍺 Cliente pede produtos
   ↓
🛒 Operador adiciona itens ao carrinho
   ↓
💳 Define forma de pagamento
   ↓
✅ Sistema registra venda e atualiza estoque automaticamente
```

### 3️⃣ Controle de Estoque
```
📦 Chegam novos produtos
   ↓
➕ Operador registra entrada no estoque
   ↓
📊 Sistema atualiza quantidades e calcula valor total
```

### 4️⃣ Fechamento de Sessão
```
🕐 Fim do expediente
   ↓
💰 Operador conta o dinheiro no caixa
   ↓
📊 Sistema gera relatório com:
   - Total de vendas
   - Lucro obtido
   - Diferença de caixa
   - Produtos mais vendidos
   ↓
📄 Relatório pode ser exportado em PDF
```

## 🎨 Funcionalidades Detalhadas

### Gestão de Produtos
- ✅ Cadastro completo (CRUD)
- ✅ Categorização
- ✅ Controle de estoque mínimo
- ✅ Ativação/Desativação
- ✅ Imagens (opcional)
- ✅ Histórico de movimentações

### Sessões de Pub
- ✅ Abertura com caixa inicial
- ✅ Apenas uma sessão ativa por vez
- ✅ Vinculação de todas as vendas à sessão ativa
- ✅ Fechamento com caixa final
- ✅ Cálculo automático de diferenças
- ✅ Relatórios detalhados

### Ponto de Venda (PDV)
- ✅ Interface rápida para vendas
- ✅ Busca de produtos
- ✅ Carrinho de compras
- ✅ Múltiplas formas de pagamento
- ✅ Atualização automática de estoque
- ✅ Histórico de vendas

### Relatórios
- ✅ Dashboard em tempo real
- ✅ Relatórios por sessão
- ✅ Exportação para PDF
- ✅ Análise de lucros
- ✅ Produtos mais vendidos
- ✅ Alertas de estoque baixo

## 🔐 Segurança (Opcional - Atualmente Desabilitada)

> ⚠️ **Nota:** Na versão atual de desenvolvimento, a autenticação está **desabilitada** para facilitar testes e integração com o frontend. Todos os endpoints são públicos.

Para produção, o sistema suporta:
- 🔑 Autenticação JWT
- 👤 Controle de usuários
- 🛡️ Perfis e permissões
- 📝 Auditoria de ações

## 📱 Integração com Frontend

O sistema fornece uma API REST completa que pode ser consumida por:
- 💻 Aplicação Web (React, Vue, Angular)
- 📱 Aplicativo Mobile (React Native, Flutter)
- 🖥️ Sistema Desktop (Electron)

### Exemplo de Integração
```javascript
// Buscar produtos
GET http://localhost:8081/api/products

// Criar venda
POST http://localhost:8081/api/sales
{
  "sessionId": "uuid-da-sessao",
  "items": [
    { "productId": "uuid-produto", "quantity": 2 }
  ],
  "paymentMethod": "PIX"
}
```

## 🚀 Benefícios para o Negócio

### 📊 Controle Financeiro
- Saber exatamente quanto foi vendido em cada sessão
- Calcular lucro real vs. lucro esperado
- Identificar divergências de caixa
- Controlar entrada e saída de dinheiro

### 📦 Gestão de Estoque Eficiente
- Evitar falta de produtos
- Reduzir desperdício
- Controlar validade e reposição
- Otimizar investimento em estoque

### 📈 Análise de Desempenho
- Identificar produtos mais vendidos
- Analisar melhores horários/dias
- Comparar performance entre sessões
- Tomar decisões baseadas em dados

### ⚡ Agilidade Operacional
- Vendas mais rápidas
- Menos erros manuais
- Relatórios automáticos
- Processos padronizados

## 🎯 Público-Alvo

- 🏍️ Motoclubes
- 🍺 Bares e pubs
- 🍔 Lanchonetes
- ☕ Cafeterias
- 🎪 Estabelecimentos que operam por sessões/eventos

## 🔮 Roadmap Futuro

- [ ] App Mobile para PDV
- [ ] Integração com impressoras térmicas
- [ ] Sistema de comanda eletrônica
- [ ] Módulo de delivery
- [ ] Gestão de fornecedores
- [ ] Controle de validade de produtos
- [ ] Dashboard de métricas avançadas
- [ ] Integração com contabilidade
- [ ] Sistema de fidelidade/pontos

## 📞 Suporte

Este é um sistema customizado desenvolvido especificamente para o Insanos Motoclube, mas pode ser adaptado para outros estabelecimentos similares.

---

**Desenvolvido com ❤️ para a comunidade motociclista 🏍️**

*Versão: 1.0.0*  
*Última atualização: Dezembro 2025*

