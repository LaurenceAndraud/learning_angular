import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs' ;
import { Book } from '../models/book'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Stupeurs et tremblement', author: 'Amélie Nothomb' },
    { id: 2, title: 'Guerre et Paix', author: 'Tolstoï' }
  ];

  constructor() {}

  // Lire les livres
  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  // Ajouter un livre
  addBook(book: Book): Observable<Book> {
    this.books.push(book);
    return of(book);
  }

  // Mettre à jour un livre
  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  // Supprimer un livre
  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}