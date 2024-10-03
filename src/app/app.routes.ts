import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

