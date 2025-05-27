import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICharacter, IFavoriteItem } from '../../models';
import { addFavorite, loadCharacters, removeFavorite, selectAllCharacters, selectFavorites } from '../../store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {
  characters = signal<ICharacter[]>([]);
  favorites = signal<IFavoriteItem[]>([]);

  searchTerm = signal('');

  constructor(private store: Store) {
    this.store.dispatch(loadCharacters());
    this.store.select(selectAllCharacters).subscribe(characters => this.characters.set(characters));
    this.store.select(selectFavorites).subscribe(favorites => this.favorites.set(favorites));
  }
  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value.toLowerCase());
  }
  filteredCharacters() {
    if (this.searchTerm() === '') return this.characters()
    return this.characters().filter(character => character.name.toLowerCase().includes(this.searchTerm()))
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