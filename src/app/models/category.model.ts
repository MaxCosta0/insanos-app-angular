export interface Category {
  id: string;
  name: string;
  icon?: string;
  createdAt?: Date;
}

export interface CreateCategoryDTO {
  name: string;
  icon?: string;
}
