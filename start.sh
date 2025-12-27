#!/bin/bash
# 🚀 Script de Inicialização Rápida - Insanos Stock Control

echo "🏍️  Insanos Stock Control - Iniciando..."
echo ""

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: Execute este script no diretório do projeto!"
    exit 1
fi

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

# Iniciar servidor
echo "🚀 Iniciando servidor de desenvolvimento..."
echo ""
echo "✅ Backend deve estar rodando em: http://localhost:8081"
echo "✅ Frontend será iniciado em: http://localhost:4200"
echo ""
echo "🔑 Login:"
echo "   E-mail: admin@insanos.com"
echo "   Senha: admin123"
echo ""
echo "Pressione Ctrl+C para parar o servidor"
echo "────────────────────────────────────────"
echo ""

npm start
