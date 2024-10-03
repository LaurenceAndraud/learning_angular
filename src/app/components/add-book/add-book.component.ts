import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Book = new Book();
  successMessage: string = ''; 
  errorMessage: string = '';    

  constructor(private bookService: BookService) {}

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.bookService.addBook(this.newBook).subscribe({
        next: () => {
          this.successMessage = 'Livre ajouté avec succès.';
          this.errorMessage = '';
          this.newBook = new Book(); 
        },
        error: () => {
          this.errorMessage = 'Une erreur s\'est produite lors de l\'ajout du livre.';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Veuillez entrer un titre et un auteur valides.';
      this.successMessage = '';
    }
  }
}