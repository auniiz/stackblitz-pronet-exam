import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFavoriteItem, IHouse } from '../../models';
import { addFavorite, loadHouses, removeFavorite, selectAllHouses, selectFavorites } from '../../store';

@Component({
  selector: 'app-houses',
  imports: [],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent {
  houses = signal<IHouse[]>([]);
  favorites = signal<IFavoriteItem[]>([]);

  searchTerm = signal('');

  constructor(private store: Store) {
    this.store.dispatch(loadHouses());
    this.store.select(selectAllHouses).subscribe(houses => this.houses.set(houses));
    this.store.select(selectFavorites).subscribe(favs => this.favorites.set(favs));
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value.toLowerCase());
  }

  filteredHouses() {
    return this.houses().filter(house => house.name.toLowerCase().includes(this.searchTerm()));
  }



  isFavorite(item: IFavoriteItem): boolean {
    return this.favorites().some(fav => fav.url === item.url);
  }

  toggleFavorite(item: IFavoriteItem): void {
    if (this.isFavorite(item)) {
      this.store.dispatch(removeFavorite({ itemUrl: item.url }));
    } else {
      this.store.dispatch(addFavorite({ item }));
    }
  }
}

