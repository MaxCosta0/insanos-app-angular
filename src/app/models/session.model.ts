export interface PubSession {
  id: string;
  name: string;
  startedAt: Date;
  closedAt?: Date;
  initialCash: number;
  finalCash?: number;
  isActive: boolean;
  openedBy: string;
  closedBy?: string;
  observations?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OpenSessionDTO {
  name: string;
  initialCash: number;
  observations?: string;
}

export interface CloseSessionDTO {
  finalCash: number;
  observations?: string;
}

export interface SessionReport {
  session: PubSession;
  totalSales: number;
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  salesByPaymentMethod: { [key: string]: number };
  topProducts: Array<{
    productName: string;
    quantity: number;
    revenue: number;
  }>;
  cashDifference?: number;
}
