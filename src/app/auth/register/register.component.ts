import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {} 

  onRegister() {
    this.authService.register(this.email, this.password).subscribe(
      response => {
        console.log('Registration successful', response);

      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
