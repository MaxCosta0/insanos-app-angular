export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  usuario: User;
}

export interface User {
  id: string;
  nome: string;
  email: string;
  perfil?: string;
  criadoEm?: string;
}
