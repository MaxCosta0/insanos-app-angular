export interface Sale {
  id: string;
  sessionId: string;
  customerName?: string;
  paymentMethod: PaymentMethod;
  subtotal: number;
  discount: number;
  total: number;
  items: SaleItem[];
  soldBy: string;
  observations?: string;
  createdAt: Date;
}

export interface SaleItem {
  id: string;
  productId: string;
  productName?: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface CreateSaleDTO {
  sessionId: string;
  customerName?: string;
  paymentMethod: PaymentMethod;
  discount?: number;
  observations?: string;
  items: CreateSaleItemDTO[];
}

export interface CreateSaleItemDTO {
  productId: string;
  quantity: number;
}

export enum PaymentMethod {
  DINHEIRO = 'DINHEIRO',
  PIX = 'PIX',
  CARTAO_CREDITO = 'CARTAO_CREDITO',
  CARTAO_DEBITO = 'CARTAO_DEBITO'
}
