export interface Product {
  id: string;
  nome: string;
  codigoBarras?: string;
  categoria: string;
  precoCusto: number;
  precoVenda: number;
  estoqueAtual: number;
  estoqueMinimo: number;
  ativo: boolean;
  criadoEm?: string;
  atualizadoEm?: string;
}

export interface CreateProductDTO {
  nome: string;
  codigoBarras?: string;
  categoria: string;
  precoCusto: number;
  precoVenda: number;
  estoqueMinimo: number;
}

export interface UpdateProductDTO extends CreateProductDTO {
  ativo?: boolean;
}
