export interface DashboardData {
  totalProducts: number;
  totalStockValue: number;
  totalSales: number;
  totalRevenue: number;
  lowStockProducts: Array<{
    id: string;
    name: string;
    currentStock: number;
    minStock: number;
  }>;
  recentMovements: Array<{
    id: string;
    productName: string;
    type: string;
    quantity: number;
    createdAt: Date;
  }>;
  activeSession?: {
    id: string;
    name: string;
    startedAt: Date;
    initialCash: number;
  };
}
