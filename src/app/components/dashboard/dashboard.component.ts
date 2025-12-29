import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { SessionService } from '../../services/session.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalProducts = 0;
  totalStockValue = 0;
  lowStockProducts: Product[] = [];
  activeSession: any = null;
  loading = true;

  constructor(
    private productService: ProductService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.loading = true;

    // Load products
    this.productService.getAll().subscribe({
      next: (products) => {
        // Garantir que products é um array
        const productArray = Array.isArray(products) ? products : [];
        this.totalProducts = productArray.length;
        this.totalStockValue = productArray.reduce((sum, p) => sum + (p.estoqueAtual * p.precoCusto), 0);
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.totalProducts = 0;
        this.totalStockValue = 0;
      }
    });

    // Load low stock products
    this.productService.getAll({ lowStock: true }).subscribe({
      next: (products) => {
        // Garantir que products é um array
        this.lowStockProducts = Array.isArray(products) ? products : [];
      },
      error: (err) => {
        console.error('Erro ao carregar produtos com estoque baixo:', err);
        this.lowStockProducts = [];
      }
    });

    // Load active session
    this.sessionService.getActive().subscribe({
      next: (session) => {
        this.activeSession = session;
        this.loading = false;
      },
      error: () => {
        this.activeSession = null;
        this.loading = false;
      }
    });
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  }
}
