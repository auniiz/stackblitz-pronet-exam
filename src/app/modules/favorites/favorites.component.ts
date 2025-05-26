import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICharacter, IFavoriteItem, IHouse } from '../../models';
import { selectFavorites, removeFavorite } from '../../store';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
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

export function isHouse(item: IFavoriteItem): item is IHouse {
  return item.type === 'house';
}

export function isCharacter(item: IFavoriteItem): item is ICharacter {
  return item.type === 'character';
}