import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  imports: [RouterOutlet, BookListComponent] 
})
export class AppComponent {
  title = 'gestion-book';
}


