import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../../services/session.service';
import { PubSession, OpenSessionDTO, CloseSessionDTO } from '../../models/session.model';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  sessions: PubSession[] = [];
  activeSession: PubSession | null = null;
  showOpenModal = false;
  showCloseModal = false;

  openForm: OpenSessionDTO = { nome: '', caixaInicial: 0, observacoes: '' };
  closeForm: CloseSessionDTO = { caixaFinal: 0, observacoes: '' };

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.loadSessions();
    this.loadActiveSession();
  }

  loadSessions(): void {
    this.sessionService.getAll().subscribe({
      next: (sessions) => {
        const sessionArray = Array.isArray(sessions) ? sessions : [];
        this.sessions = sessionArray.sort((a, b) => 
          new Date(b.iniciadaEm).getTime() - new Date(a.iniciadaEm).getTime()
        );
      },
      error: (err) => {
        console.error('Erro ao carregar sessões:', err);
        this.sessions = [];
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
      }
    });
  }

  openSession(): void {
    this.sessionService.open(this.openForm).subscribe({
      next: () => {
        this.showOpenModal = false;
        this.loadSessions();
        this.loadActiveSession();
        this.openForm = { nome: '', caixaInicial: 0, observacoes: '' };
      }
    });
  }

  closeSession(): void {
    if (this.activeSession) {
      this.sessionService.close(this.activeSession.id, this.closeForm).subscribe({
        next: () => {
          this.showCloseModal = false;
          this.loadSessions();
          this.loadActiveSession();
          this.closeForm = { caixaFinal: 0, observacoes: '' };
        }
      });
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  formatDate(date: Date | string): string {
    return new Date(date).toLocaleString('pt-BR');
  }
}
