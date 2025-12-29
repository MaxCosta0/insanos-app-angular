import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockMovementService } from '../../services/stock-movement.service';
import { ProductService } from '../../services/product.service';
import { StockMovement, CreateStockMovementDTO, MovementType } from '../../models/stock-movement.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-stock-movements',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="movements-container">
      <div class="page-header">
        <h1>📊 Movimentações de Estoque</h1>
        <button class="btn-primary" (click)="showModal = true">+ Nova Movimentação</button>
      </div>

      <div class="movements-list">
        <div class="movement-card" *ngFor="let movement of movements">
          <div class="movement-header">
            <h3>{{ movement.nomeProduto || 'Produto' }}</h3>
            <span class="type-badge" [class]="movement.tipo">{{ movement.tipo }}</span>
          </div>
          <div class="movement-details">
            <p><strong>Quantidade:</strong> {{ movement.quantidade }}</p>
            <p><strong>Data:</strong> {{ formatDate(movement.criadoEm) }}</p>
            <p *ngIf="movement.motivo"><strong>Motivo:</strong> {{ movement.motivo }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-overlay" *ngIf="showModal" (click)="showModal = false">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Nova Movimentação</h2>
          <button class="close-btn" (click)="showModal = false">✕</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Produto *</label>
            <select [(ngModel)]="movementForm.produtoId">
              <option value="">Selecione...</option>
              <option *ngFor="let product of products" [value]="product.id">
                {{ product.nome }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Tipo *</label>
            <select [(ngModel)]="movementForm.tipo">
              <option value="ENTRADA">Entrada</option>
              <option value="SAIDA">Saída</option>
              <option value="AJUSTE">Ajuste</option>
            </select>
          </div>
          <div class="form-group">
            <label>Quantidade *</label>
            <input type="number" [(ngModel)]="movementForm.quantidade" min="1" />
          </div>
          <div class="form-group">
            <label>Motivo</label>
            <input type="text" [(ngModel)]="movementForm.motivo" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-secondary" (click)="showModal = false">Cancelar</button>
          <button class="btn-primary" (click)="saveMovement()">Salvar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .movements-container {
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
    .movements-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .movement-card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .movement-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    h3 {
      margin: 0;
      color: #333;
    }
    .type-badge {
      padding: 6px 12px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
    }
    .type-badge.ENTRADA {
      background: #e8f5e9;
      color: #4caf50;
    }
    .type-badge.SAIDA {
      background: #ffebee;
      color: #f44336;
    }
    .type-badge.AJUSTE {
      background: #e3f2fd;
      color: #2196f3;
    }
    .movement-details p {
      margin: 5px 0;
      color: #666;
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
    input, select {
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
export class StockMovementsComponent implements OnInit {
  movements: StockMovement[] = [];
  products: Product[] = [];
  showModal = false;
  movementForm: CreateStockMovementDTO = {
    produtoId: '',
    tipo: MovementType.ENTRADA,
    quantidade: 1,
    motivo: ''
  };

  constructor(
    private movementService: StockMovementService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadMovements();
    this.loadProducts();
  }

  loadMovements(): void {
    this.movementService.getAll().subscribe({
      next: (movements) => {
        const movementArray = Array.isArray(movements) ? movements : [];
        this.movements = movementArray.sort((a, b) => 
          new Date(b.criadoEm).getTime() - new Date(a.criadoEm).getTime()
        );
      },
      error: (err) => {
        console.error('Erro ao carregar movimentações:', err);
        this.movements = [];
      }
    });
  }

  loadProducts(): void {
    this.productService.getAll().subscribe({
      next: (products) => {
        this.products = Array.isArray(products) ? products : [];
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.products = [];
      }
    });
  }

  saveMovement(): void {
    this.movementService.create(this.movementForm).subscribe({
      next: () => {
        this.loadMovements();
        this.showModal = false;
        this.movementForm = {
          produtoId: '',
          tipo: MovementType.ENTRADA,
          quantidade: 1,
          motivo: ''
        };
      }
    });
  }

  formatDate(date: Date | string): string {
    return new Date(date).toLocaleString('pt-BR');
  }
}
