export interface StockMovement {
  id: string;
  productId: string;
  productName?: string;
  type: MovementType;
  quantity: number;
  reason?: string;
  sessionId?: string;
  performedBy: string;
  createdAt: Date;
}

export interface CreateStockMovementDTO {
  productId: string;
  type: MovementType;
  quantity: number;
  reason?: string;
  sessionId?: string;
}

export enum MovementType {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
  AJUSTE = 'AJUSTE',
  VENDA = 'VENDA'
}
