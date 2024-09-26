import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  editBook(book: Book): void {
    console.log('Edition du livre :', book);
  }

  deleteBook(id: number): Observable<void> {
    this.books = this.books.filter(book => book.id !== id);
    return of();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  ngOnInit() {
    this.loadBooks();
  }
}



