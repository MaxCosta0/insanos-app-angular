import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category, CreateCategoryDTO } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="categories-container">
      <div class="page-header">
        <h1>🏷️ Categorias</h1>
        <button class="btn-primary" (click)="showModal = true">+ Nova Categoria</button>
      </div>

      <div class="categories-grid">
        <div class="category-card" *ngFor="let category of categories">
          <div class="category-icon">{{ category.icon || '📦' }}</div>
          <h3>{{ category.name }}</h3>
          <button class="btn-delete" (click)="deleteCategory(category.id)">Excluir</button>
        </div>
      </div>
    </div>

    <div class="modal-overlay" *ngIf="showModal" (click)="showModal = false">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Nova Categoria</h2>
          <button class="close-btn" (click)="showModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Nome *</label>
            <input type="text" [(ngModel)]="categoryForm.name" />
          </div>
          <div class="form-group">
            <label>Ícone (emoji)</label>
            <input type="text" [(ngModel)]="categoryForm.icon" placeholder="📦" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" (click)="showModal = false">Cancelar</button>
          <button class="btn-primary" (click)="saveCategory()">Salvar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .categories-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 32px;
      color: #333;
    }
    .btn-primary {
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      cursor: pointer;
    }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
    .category-card {
      background: white;
      border-radius: 10px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .category-icon {
      font-size: 48px;
      margin-bottom: 15px;
    }
    h3 {
      margin: 0 0 15px 0;
      color: #333;
    }
    .btn-delete {
      padding: 8px 16px;
      background: #f44336;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal {
      background: white;
      border-radius: 10px;
      width: 90%;
      max-width: 500px;
    }
    .modal-header, .modal-body, .modal-footer {
      padding: 20px;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e0e0e0;
    }
    .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 5px;
    }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      border-top: 1px solid #e0e0e0;
    }
    .btn-secondary {
      padding: 12px 24px;
      background: #e0e0e0;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  showModal = false;
  categoryForm: CreateCategoryDTO = { name: '', icon: '' };

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
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

  saveCategory(): void {
    this.categoryService.create(this.categoryForm).subscribe({
      next: () => {
        this.loadCategories();
        this.showModal = false;
        this.categoryForm = { name: '', icon: '' };
      }
    });
  }

  deleteCategory(id: string): void {
    if (confirm('Deseja realmente excluir esta categoria?')) {
      this.categoryService.delete(id).subscribe({
        next: () => {
          this.loadCategories();
        }
      });
    }
  }
}
