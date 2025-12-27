# 📖 ÍNDICE - Insanos Stock Control Frontend

## 🎯 Início Rápido

**Quer começar agora?** Execute:
```bash
./start.sh
```
Ou leia: [INICIAR.md](INICIAR.md)

---

## 📚 Documentação Disponível

### 1. 🚀 [INICIAR.md](INICIAR.md)
**Guia de início rápido**
- Comandos para iniciar
- Configuração básica
- Troubleshooting rápido
- Comandos úteis

### 2. 📖 [README.md](README.md)
**Documentação técnica completa**
- Sobre o projeto
- Tecnologias utilizadas
- Funcionalidades detalhadas
- Configurações avançadas
- Integração com backend
- Scripts disponíveis

### 3. 🎯 [COMO_USAR.md](COMO_USAR.md)
**Manual do usuário**
- Como fazer login
- Fluxo de uso recomendado
- Operação diária
- Funcionalidades explicadas
- Solução de problemas comuns

### 4. 📊 [RESUMO.md](RESUMO.md)
**Resumo técnico do projeto**
- O que foi desenvolvido
- Estrutura de arquivos
- Endpoints consumidos
- Status da compilação
- Próximos passos

### 5. 📋 [ARQUIVOS_CRIADOS.md](ARQUIVOS_CRIADOS.md)
**Lista completa de arquivos**
- Todos os 42 arquivos criados
- Modelos TypeScript
- Serviços
- Componentes
- Estatísticas do código
- Design system

### 6. 📘 [SOBRE_O_SISTEMA.md](SOBRE_O_SISTEMA.md)
**Documentação do backend**
- Arquitetura do sistema
- Casos de uso
- Fluxos de trabalho
- Tecnologias do backend

---

## 🚀 Atalhos Rápidos

### Iniciar o projeto:
```bash
./start.sh
# ou
npm start
```

### Primeira instalação:
```bash
npm install
npm start
```

### Login padrão:
- **E-mail:** admin@insanos.com
- **Senha:** admin123

### URLs:
- **Frontend:** http://localhost:4200
- **Backend:** http://localhost:8081/api

---

## 📂 Estrutura do Projeto

```
insanos-app-angular/
│
├── 📚 Documentação
│   ├── INDEX.md              ← Você está aqui
│   ├── INICIAR.md            ← Guia rápido
│   ├── README.md             ← Documentação completa
│   ├── COMO_USAR.md          ← Manual do usuário
│   ├── RESUMO.md             ← Resumo técnico
│   ├── ARQUIVOS_CRIADOS.md   ← Lista de arquivos
│   └── SOBRE_O_SISTEMA.md    ← Info do backend
│
├── 🔧 Scripts
│   └── start.sh              ← Iniciar rápido
│
├── 📦 Código Fonte
│   └── src/
│       └── app/
│           ├── components/    ← 8 componentes
│           ├── services/      ← 7 serviços
│           ├── models/        ← 7 modelos
│           ├── guards/        ← Autenticação
│           └── interceptors/  ← HTTP
│
└── ⚙️ Configuração
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

---

## 🎯 Funcionalidades Principais

### ✅ Implementado:
- [x] Sistema de autenticação
- [x] Dashboard com estatísticas
- [x] Gestão de produtos (CRUD)
- [x] Gestão de categorias
- [x] Gestão de sessões (abrir/fechar)
- [x] PDV (Ponto de Venda)
- [x] Movimentações de estoque
- [x] Alertas de estoque baixo
- [x] Interface responsiva
- [x] Design moderno

---

## 💡 Como Navegar na Documentação

### Se você é...

**🆕 Novo no projeto?**
1. Comece com [INICIAR.md](INICIAR.md)
2. Depois leia [COMO_USAR.md](COMO_USAR.md)

**👨‍💻 Desenvolvedor?**
1. Leia [README.md](README.md)
2. Consulte [ARQUIVOS_CRIADOS.md](ARQUIVOS_CRIADOS.md)
3. Veja [RESUMO.md](RESUMO.md)

**👤 Usuário final?**
1. Use [COMO_USAR.md](COMO_USAR.md)
2. Execute `./start.sh`

**🔧 Administrador?**
1. Leia [SOBRE_O_SISTEMA.md](SOBRE_O_SISTEMA.md)
2. Configure seguindo [README.md](README.md)

---

## 🎨 Telas Disponíveis

1. **🔐 Login** - Autenticação
2. **📊 Dashboard** - Visão geral
3. **🎯 Sessões** - Abrir/fechar caixa
4. **💰 PDV** - Ponto de venda
5. **📦 Produtos** - Gerenciar produtos
6. **📊 Movimentações** - Estoque
7. **🏷️ Categorias** - Categorizar

---

## ⚡ Comandos Mais Usados

```bash
# Iniciar (recomendado)
./start.sh

# Iniciar (alternativo)
npm start

# Build
npm run build

# Instalar dependências
npm install

# Usar porta diferente
ng serve --port 4201
```

---

## 🐛 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Backend não conecta | Verifique se está em http://localhost:8081 |
| Erro CORS | Configure backend para aceitar localhost:4200 |
| Porta 4200 em uso | Use `ng serve --port 4201` |
| Componentes não carregam | Execute `npm install` |

Mais em: [COMO_USAR.md - Troubleshooting](COMO_USAR.md#-solução-de-problemas)

---

## 📞 Informações do Sistema

**Nome:** Insanos Stock Control  
**Versão:** 1.0.0  
**Framework:** Angular 21  
**Linguagem:** TypeScript  
**Arquitetura:** Standalone Components  
**Cliente:** Insanos Motoclube 🏍️

---

## ✅ Status do Projeto

```
✔ Código: COMPLETO
✔ Documentação: COMPLETA
✔ Testes: PREPARADO
✔ Build: FUNCIONANDO
✔ Status: PRONTO PARA PRODUÇÃO
```

---

## 🎉 Pronto para Usar!

Execute `./start.sh` e comece a usar o sistema!

**Dúvidas?** Consulte os arquivos de documentação listados acima.

---

*Desenvolvido com ❤️ para Insanos Motoclube*  
*Dezembro 2025*
