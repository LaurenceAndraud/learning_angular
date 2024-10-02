import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: Array<{ username: string, password: string }> = [];
  private currentUser: string | null = null;

  constructor() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(this.users)); 
      return true;
    }
    return false;  
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      this.currentUser = username;
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false; 
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
