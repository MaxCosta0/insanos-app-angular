export interface DashboardData {
  totalProdutos: number;
  valorEstoqueTotal: number;
  totalVendas: number;
  receitaTotal: number;
  produtosEstoqueBaixo: Array<{
    id: string;
    nome: string;
    estoqueAtual: number;
    estoqueMinimo: number;
  }>;
  movimentacoesRecentes: Array<{
    id: string;
    nomeProduto: string;
    tipo: string;
    quantidade: number;
    criadoEm: string;
  }>;
  sessaoAtiva?: {
    id: string;
    nome: string;
    iniciadaEm: string;
    caixaInicial: number;
  };
}
