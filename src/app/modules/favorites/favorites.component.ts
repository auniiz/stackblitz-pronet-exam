import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFavoriteItem, } from '../../models';
import { selectFavorites, removeFavorite } from '../../store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {
  favorites = signal<IFavoriteItem[]>([]);

  constructor(private store: Store) {
    this.store.select(selectFavorites).subscribe(items => this.favorites.set(items));
  }

  remove(itemUrl: string) {
    this.store.dispatch(removeFavorite({ itemUrl }));
  }

}

