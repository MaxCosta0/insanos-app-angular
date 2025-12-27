# Sistema de Temas - Modo Diurno e Noturno

## 🌓 Visão Geral

O sistema Insanos agora possui alternância entre modo diurno (light) e modo noturno (dark), permitindo aos usuários escolher o tema que melhor se adapta às suas preferências e condições de iluminação.

## 📋 Funcionalidades

### Alternância de Tema
- **Botão de Toggle**: Localizado no cabeçalho da sidebar
- **Ícones Visuais**: ☀️ (modo diurno) / 🌙 (modo noturno)
- **Transição Suave**: Animações de 0.3s entre os modos
- **Persistência**: Preferência salva no localStorage do navegador

### Detecção Automática
- Detecta automaticamente a preferência do sistema operacional
- Usa `prefers-color-scheme: dark` quando não há preferência salva

## 🎨 Paleta de Cores

### Modo Diurno (Light)
```scss
--color-primary: #1a1a1a       // Preto principal
--color-secondary: #404040     // Cinza escuro
--color-accent: #666666        // Cinza médio
--color-bg-main: #f5f5f5       // Fundo principal (cinza claro)
--color-bg-card: #ffffff       // Fundo de cartões (branco)
--color-bg-secondary: #e0e0e0  // Fundo secundário
--color-text-primary: #1a1a1a  // Texto principal (preto)
--color-text-secondary: #666666 // Texto secundário
--color-text-muted: #999999    // Texto esmaecido
```

### Modo Noturno (Dark)
```scss
--color-primary: #e0e0e0       // Branco/cinza claro
--color-secondary: #b0b0b0     // Cinza claro
--color-accent: #999999        // Cinza médio-claro
--color-bg-main: #0f0f0f       // Fundo principal (preto profundo)
--color-bg-card: #1a1a1a       // Fundo de cartões (preto)
--color-bg-secondary: #2a2a2a  // Fundo secundário (cinza escuro)
--color-text-primary: #e0e0e0  // Texto principal (branco)
--color-text-secondary: #b0b0b0 // Texto secundário
--color-text-muted: #808080    // Texto esmaecido
```

## 🛠️ Arquitetura Técnica

### Serviço de Tema (`theme.service.ts`)
```typescript
export type Theme = 'light' | 'dark';

class ThemeService {
  - theme$: Observable<Theme>      // Stream reativo do tema atual
  - currentTheme: Theme             // Getter do tema atual
  - toggleTheme(): void             // Alterna entre temas
  - setTheme(theme: Theme): void    // Define tema específico
}
```

**Responsabilidades:**
- Gerenciar estado do tema atual
- Persistir preferência no localStorage
- Aplicar classe CSS ao `<html>`
- Detectar preferência do sistema

### Integração no Layout

O componente `LayoutComponent` consome o serviço:
```typescript
constructor(private themeService: ThemeService) {}

ngOnInit() {
  this.themeService.theme$.subscribe(theme => {
    this.isDarkTheme = theme === 'dark';
  });
}

toggleTheme() {
  this.themeService.toggleTheme();
}
```

### Sistema de Variáveis CSS

Todas as cores são definidas como CSS Custom Properties em `styles.scss`:
```scss
:root { /* Modo Diurno */ }
html.dark-theme { /* Modo Noturno */ }
```

A classe `dark-theme` é adicionada ao `<html>` quando o modo noturno está ativo.

## 🎯 Uso das Variáveis

### Em Componentes SCSS
```scss
.my-component {
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 8px var(--color-shadow);
}
```

### Mixins Auxiliares (`styles/_mixins.scss`)
```scss
@mixin card-style { ... }
@mixin button-primary { ... }
@mixin button-secondary { ... }
@mixin input-style { ... }
```

## 📦 Arquivos Modificados

### Novos Arquivos
- `src/app/services/theme.service.ts` - Serviço de gerenciamento de tema
- `src/styles/_mixins.scss` - Mixins reutilizáveis com variáveis CSS
- `TEMA.md` - Esta documentação

### Arquivos Atualizados
- `src/styles.scss` - Variáveis CSS para ambos os temas
- `src/app/components/layout/` - Integração do toggle de tema
- `src/app/components/login/` - Estilos adaptados
- `src/app/components/dashboard/` - Estilos adaptados
- `src/app/components/products/` - Estilos adaptados
- `src/app/components/sessions/` - Estilos adaptados
- `src/app/components/sales/` - Estilos adaptados

## 🚀 Como Usar

### Para Usuários
1. Faça login no sistema
2. Na sidebar, clique no botão com ícone ☀️ ou 🌙
3. O tema mudará instantaneamente
4. Sua preferência será salva automaticamente

### Para Desenvolvedores

#### Adicionar Suporte a Tema em Novo Componente
```scss
// NÃO faça isso:
.component {
  background: #ffffff;
  color: #333333;
}

// FAÇA isso:
.component {
  background: var(--color-bg-card);
  color: var(--color-text-primary);
}
```

#### Verificar Tema Atual em TypeScript
```typescript
constructor(private themeService: ThemeService) {}

checkTheme() {
  const current = this.themeService.currentTheme;
  // 'light' ou 'dark'
}

// Ou observar mudanças
this.themeService.theme$.subscribe(theme => {
  console.log('Tema mudou para:', theme);
});
```

## ✨ Benefícios

### Para Usuários
- ✅ **Conforto Visual**: Menos fadiga ocular em ambientes escuros
- ✅ **Economia de Energia**: Modo escuro consome menos bateria em telas OLED
- ✅ **Acessibilidade**: Melhor contraste para diferentes condições
- ✅ **Personalização**: Escolha o tema que prefere

### Para Desenvolvedores
- ✅ **Manutenibilidade**: Cores centralizadas em variáveis
- ✅ **Consistência**: Paleta uniforme em todo o sistema
- ✅ **Escalabilidade**: Fácil adicionar novos temas
- ✅ **Performance**: Usa CSS nativo, sem JavaScript desnecessário

## 🔮 Possíveis Extensões Futuras

1. **Mais Temas**: Adicionar variantes como "alto contraste", "azul", etc.
2. **Auto-Switch**: Alternar automaticamente baseado no horário
3. **Customização**: Permitir usuários criarem paletas personalizadas
4. **Preferências por Usuário**: Salvar no backend vinculado ao login

## 📝 Notas Técnicas

- **Compatibilidade**: CSS Custom Properties suportadas em todos navegadores modernos
- **Performance**: Transições CSS são renderizadas pela GPU
- **SEO**: Não afeta indexação ou performance de carregamento
- **Testes**: Testar ambos os temas ao desenvolver novas features

---

**Desenvolvido para Insanos Stock Control System**
*Sistema de controle de estoque com interface adaptativa*
