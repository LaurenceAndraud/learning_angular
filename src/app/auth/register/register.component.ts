import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true, 
  templateUrl: './register.component.html',
  imports: [FormsModule, CommonModule] 
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  onRegister() {
    if (this.username && this.password) {
      this.successMessage = "Inscription réussie. Bienvenue " + this.username + "!";
      this.errorMessage = ''
    } else {
      this.errorMessage = "Veuillez entrer un nom d’utilisateur et un mot de passe valides.";
      this.successMessage = '';
    }
  }
}