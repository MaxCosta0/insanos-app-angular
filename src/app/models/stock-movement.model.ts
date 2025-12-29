export interface StockMovement {
  id: string;
  produtoId: string;
  nomeProduto?: string;
  tipo: MovementType;
  quantidade: number;
  motivo?: string;
  sessaoId?: string;
  realizadoPor: string;
  observacoes?: string;
  criadoEm: string;
}

export interface CreateStockMovementDTO {
  produtoId: string;
  tipo: MovementType;
  quantidade: number;
  motivo?: string;
  sessaoId?: string;
  observacoes?: string;
}

export enum MovementType {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
  AJUSTE = 'AJUSTE',
  VENDA = 'VENDA'
}
