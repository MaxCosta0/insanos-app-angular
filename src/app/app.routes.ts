import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { SalesComponent } from './components/sales/sales.component';
import { StockMovementsComponent } from './components/stock-movements/stock-movements.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'sessions',
        component: SessionsComponent
      },
      {
        path: 'sales',
        component: SalesComponent
      },
      {
        path: 'stock-movements',
        component: StockMovementsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
