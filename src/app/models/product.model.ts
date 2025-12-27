export interface Product {
  id: string;
  name: string;
  barcode?: string;
  category: string;
  costPrice: number;
  salePrice: number;
  currentStock: number;
  minStock: number;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateProductDTO {
  name: string;
  barcode?: string;
  category: string;
  costPrice: number;
  salePrice: number;
  minStock: number;
}

export interface UpdateProductDTO extends CreateProductDTO {
  isActive?: boolean;
}
