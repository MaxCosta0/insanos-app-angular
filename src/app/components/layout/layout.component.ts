import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { ThemeService } from '../../services/theme.service';
import { User } from '../../models/auth.model';
import { PubSession } from '../../models/session.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: User | null = null;
  activeSession: PubSession | null = null;
  sidebarOpen = true;
  isDarkTheme = false;

  constructor(
    private authService: AuthService,
    private sessionService: SessionService,
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });

    this.themeService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });

    this.loadActiveSession();
  }

  loadActiveSession(): void {
    this.sessionService.getActive().subscribe({
      next: (session) => {
        this.activeSession = session;
      },
      error: () => {
        this.activeSession = null;
      }
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
