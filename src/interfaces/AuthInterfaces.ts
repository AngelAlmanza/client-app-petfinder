export interface RegisterResponse {
  user: User;
  profile: Profile;
  token: string;
}

export interface User {
  email:      string;
  updated_at: string;
  created_at: string;
  id:         number;
}

export interface Profile {
  name:       string;
  lastname:   string;
  user_id:    number;
  created_at: string;
  updated_at: string;
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