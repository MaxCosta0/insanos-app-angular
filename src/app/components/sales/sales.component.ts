import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SaleService } from '../../services/sale.service';
import { ProductService } from '../../services/product.service';
import { SessionService } from '../../services/session.service';
import { Product } from '../../models/product.model';
import { CreateSaleDTO, PaymentMethod } from '../../models/sale.model';
import { PubSession } from '../../models/session.model';

interface CartItem {
  product: Product;
  quantity: number;
  subtotal: number;
}

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  cart: CartItem[] = [];
  activeSession: PubSession | null = null;
  searchTerm = '';
  customerName = '';
  paymentMethod: PaymentMethod = PaymentMethod.DINHEIRO;
  discount = 0;
  observations = '';
  paymentMethods = Object.values(PaymentMethod);

  constructor(
    private saleService: SaleService,
    private productService: ProductService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadActiveSession();
  }

  loadProducts(): void {
    this.productService.getAll({ lowStock: false }).subscribe({
      next: (products) => {
        const productArray = Array.isArray(products) ? products : [];
        this.products = productArray.filter(p => p.ativo);
        this.filteredProducts = this.products;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
        this.products = [];
        this.filteredProducts = [];
      }
    });
  }

  loadActiveSession(): void {
    this.sessionService.getActive().subscribe({
      next: (session) => {
        this.activeSession = session;
      },
      error: () => {
        this.activeSession = null;
        alert('Nenhuma sessão ativa! Abra uma sessão antes de realizar vendas.');
      }
    });
  }

  filterProducts(): void {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p =>
        p.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  addToCart(product: Product): void {
    const existing = this.cart.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity++;
      existing.subtotal = existing.quantity * product.precoVenda;
    } else {
      this.cart.push({
        product,
        quantity: 1,
        subtotal: product.precoVenda
      });
    }
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity > 0) {
      item.quantity = quantity;
      item.subtotal = item.quantity * item.product.precoVenda;
    }
  }

  get subtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.subtotal, 0);
  }

  get total(): number {
    return this.subtotal - this.discount;
  }

  finalizeSale(): void {
    if (!this.activeSession) {
      alert('Nenhuma sessão ativa!');
      return;
    }

    if (this.cart.length === 0) {
      alert('Adicione produtos ao carrinho!');
      return;
    }

    const sale: CreateSaleDTO = {
      sessaoId: this.activeSession.id,
      nomeCliente: this.customerName || undefined,
      metodoPagamento: this.paymentMethod,
      desconto: this.discount,
      observacoes: this.observations || undefined,
      itens: this.cart.map(item => ({
        produtoId: item.product.id,
        quantidade: item.quantity
      }))
    };

    this.saleService.create(sale).subscribe({
      next: () => {
        alert('Venda realizada com sucesso!');
        this.clearCart();
      },
      error: (err) => {
        alert('Erro ao realizar venda: ' + (err.error?.message || 'Erro desconhecido'));
      }
    });
  }

  clearCart(): void {
    this.cart = [];
    this.customerName = '';
    this.discount = 0;
    this.observations = '';
    this.searchTerm = '';
    this.filterProducts();
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }
}
