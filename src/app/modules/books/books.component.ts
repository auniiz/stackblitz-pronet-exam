import { Component, effect, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadBooks } from '../../store/books/books.actions';
import {
  selectAllBooks,
  selectBooksLoading,
} from '../../store/books/books.selectors';
import { IBook, IFavoriteItem } from '../../models';
import { map } from 'rxjs';
import { removeFavorite, addFavorite, selectFavorites } from '../../store';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent {
  books = signal<IBook[]>([]);
  favorites = signal<IFavoriteItem[]>([]);

  searchTerm = signal('');

  constructor(private store: Store) {
    this.store.dispatch(loadBooks());
    this.store.select(selectAllBooks).subscribe(books => this.books.set(books));
    this.store.select(selectFavorites).subscribe(favorites => this.favorites.set(favorites));
  }
  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value.toLowerCase());
  }
  filteredBooks() {
    if (this.searchTerm() === '') return this.books()
    return this.books().filter(book => book.name.toLowerCase().includes(this.searchTerm()))
  }

  toggleFavorite(item: IFavoriteItem): void {
    if (this.isFavorite(item)) {
      this.store.dispatch(removeFavorite({ itemUrl: item.url }));
    } else {
      this.store.dispatch(addFavorite({ item }));
    }
  }

  isFavorite(item: IFavoriteItem): boolean {
    return this.favorites().some(fav => fav.url === item.url);
  }

}
