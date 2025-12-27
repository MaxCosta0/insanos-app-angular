import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Product, CreateProductDTO } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: Product[] = [];
  searchTerm = '';
  selectedCategory = '';
  showLowStock = false;
  showModal = false;
  editingProduct: Product | null = null;
  
  productForm: CreateProductDTO = {
    name: '',
    barcode: '',
    category: '',
    costPrice: 0,
    salePrice: 0,
    minStock: 0
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe({
      next: (products) => {
        this.products = Array.isArray(products) ? products : [];
        this.applyFilters();
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.products = [];
        this.applyFilters();
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories = Array.isArray(categories) ? categories : [];
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
        this.categories = [];
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.products];

    if (this.searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.showLowStock) {
      filtered = filtered.filter(p => p.currentStock <= p.minStock);
    }

    this.filteredProducts = filtered;
  }

  openModal(product?: Product): void {
    if (product) {
      this.editingProduct = product;
      this.productForm = {
        name: product.name,
        barcode: product.barcode,
        category: product.category,
        costPrice: product.costPrice,
        salePrice: product.salePrice,
        minStock: product.minStock
      };
    } else {
      this.editingProduct = null;
      this.productForm = {
        name: '',
        barcode: '',
        category: '',
        costPrice: 0,
        salePrice: 0,
        minStock: 0
      };
    }
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingProduct = null;
  }

  saveProduct(): void {
    if (this.editingProduct) {
      this.productService.update(this.editingProduct.id, this.productForm).subscribe({
        next: () => {
          this.loadProducts();
          this.closeModal();
        }
      });
    } else {
      this.productService.create(this.productForm).subscribe({
        next: () => {
          this.loadProducts();
          this.closeModal();
        }
      });
    }
  }

  deleteProduct(id: string): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.productService.delete(id).subscribe({
        next: () => {
          this.loadProducts();
        }
      });
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}
