import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Book = new Book();

  constructor(private bookService: BookService) {}

  addBook(): void {
    this.newBook.id = Math.floor(Math.random() * 1000); // Génère un ID aléatoire
    this.bookService.addBook(this.newBook);
    this.newBook = new Book(); // Réinitialiser le formulaire
  }
}

