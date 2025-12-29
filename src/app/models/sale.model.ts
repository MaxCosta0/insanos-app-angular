export interface Sale {
  id: string;
  sessaoId: string;
  nomeCliente?: string;
  metodoPagamento: PaymentMethod;
  subtotal: number;
  desconto: number;
  total: number;
  itens: SaleItem[];
  vendidoPor: string;
  observacoes?: string;
  criadoEm: string;
}

export interface SaleItem {
  id: string;
  produtoId: string;
  nomeProduto?: string;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
}

export interface CreateSaleDTO {
  sessaoId: string;
  nomeCliente?: string;
  metodoPagamento: PaymentMethod;
  desconto?: number;
  observacoes?: string;
  itens: CreateSaleItemDTO[];
}

export interface CreateSaleItemDTO {
  produtoId: string;
  quantidade: number;
}

export enum PaymentMethod {
  DINHEIRO = 'DINHEIRO',
  PIX = 'PIX',
  CARTAO_CREDITO = 'CARTAO_CREDITO',
  CARTAO_DEBITO = 'CARTAO_DEBITO'
}
