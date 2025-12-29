import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../models/category.model';
import { CreateProductDTO, Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

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
    nome: '',
    codigoBarras: '',
    categoria: '',
    precoCusto: 0,
    precoVenda: 0,
    estoqueMinimo: 0
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    console.log('🚀 ProductsComponent inicializado');
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    console.log('📦 Carregando produtos...');
    this.productService.getAll().subscribe({
      next: (products) => {
        console.log('✅ Produtos carregados:', products);
        this.products = Array.isArray(products) ? products : [];
        this.applyFilters();
      },
      error: (err) => {
        console.error('❌ Erro ao carregar produtos:', err);
        this.products = [];
        this.applyFilters();
      }
    });
  }

  loadCategories(): void {
    console.log('🏷️ Carregando categorias...');
    console.log('📡 URL da API:', 'http://localhost:8081/api/categories');

    this.categoryService.getAll().subscribe({
      next: (categories) => {
        console.log('✅ Categorias recebidas do backend:', categories);
        console.log('📊 Tipo dos dados:', typeof categories, 'É array?', Array.isArray(categories));

        // Verificar se a resposta está dentro de um wrapper
        let categoryArray: Category[] = [];

        categoryArray = categories;

        this.categories = categoryArray;
        console.log('🎯 Categorias armazenadas no componente:', this.categories);
        console.log('📏 Total de categorias:', this.categories.length);
      },
      error: (err) => {
        console.error('❌ Erro ao carregar categorias:', err);
        console.error('📄 Detalhes do erro:', {
          status: err.status,
          message: err.message,
          url: err.url
        });
        this.categories = [];
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.products];

    if (this.searchTerm) {
      filtered = filtered.filter(p =>
        p.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedCategory) {
      filtered = filtered.filter(p => p.categoria === this.selectedCategory);
    }

    if (this.showLowStock) {
      filtered = filtered.filter(p => p.estoqueAtual <= p.estoqueMinimo);
    }

    this.filteredProducts = filtered;
  }

  openModal(product?: Product): void {
    console.log('🔓 Abrindo modal. Categorias disponíveis:', this.categories);
    console.log('📏 Número de categorias:', this.categories.length);

    if (product) {
      this.editingProduct = product;
      this.productForm = {
        nome: product.nome,
        codigoBarras: product.codigoBarras,
        categoria: product.categoria,
        precoCusto: product.precoCusto,
        precoVenda: product.precoVenda,
        estoqueMinimo: product.estoqueMinimo
      };
    } else {
      this.editingProduct = null;
      this.productForm = {
        nome: '',
        codigoBarras: '',
        categoria: '',
        precoCusto: 0,
        precoVenda: 0,
        estoqueMinimo: 0
      };
    }

    // Se não houver categorias, tentar recarregar
    if (this.categories.length === 0) {
      console.warn('⚠️ Nenhuma categoria carregada! Recarregando...');
      this.loadCategories();
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
        },
        error: (err) => {
          console.error('❌ Erro ao atualizar produto:', err);
          alert('Erro ao atualizar produto!');
        }
      });
    } else {
      this.productService.create(this.productForm).subscribe({
        next: () => {
          this.loadProducts();
          this.closeModal();
        },
        error: (err) => {
          console.error('❌ Erro ao criar produto:', err);
          alert('Erro ao criar produto!');
        }
      });
    }
  }

  deleteProduct(id: string): void {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.productService.delete(id).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (err) => {
          console.error('❌ Erro ao excluir produto:', err);
          alert('Erro ao excluir produto!');
        }
      });
    }
  }

  trackByCategory(index: number, category: Category): string {
    return category.id;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}