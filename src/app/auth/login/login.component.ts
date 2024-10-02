import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule] 
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  onLogin() {
    if (this.username && this.password) {
      this.successMessage = "Vous êtes connecté" + this.username + "!";
      this.errorMessage = '';
    } else {
      this.errorMessage = "Veuillez entrer un nom d’utilisateur et un mot de passe valides.";
      this.successMessage = '';
    }
  }
}