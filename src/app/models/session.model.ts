export interface PubSession {
  id: string;
  nome: string;
  iniciadaEm: string;
  fechadaEm?: string;
  caixaInicial: number;
  caixaFinal?: number;
  ativa: boolean;
  abertaPor: string;
  fechadaPor?: string;
  observacoes?: string;
  criadoEm?: string;
  atualizadoEm?: string;
}

export interface OpenSessionDTO {
  nome: string;
  caixaInicial: number;
  observacoes?: string;
}

export interface CloseSessionDTO {
  caixaFinal: number;
  observacoes?: string;
}

export interface SessionReport {
  sessao: PubSession;
  totalVendas: number;
  receitaTotal: number;
  custoTotal: number;
  lucroTotal: number;
  vendasPorMetodoPagamento: { [key: string]: number };
  produtosMaisVendidos: Array<{
    nomeProduto: string;
    quantidade: number;
    receita: number;
  }>;
  diferencaCaixa?: number;
}
