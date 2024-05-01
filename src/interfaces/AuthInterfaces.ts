export interface RegisterResponse {
  user: User;
}

export interface User {
  name:       string;
  email:      string;
  updated_at: string;
  created_at: string;
  id:         number;
}

export interface RegisterRequest {
  name:                  string;
  email:                 string;
  password:              string;
  password_confirmation: string;
}

export interface LoginRequest {
  email:    string;
  password: string;
}

export interface LoginResponse {
  token: string;
}