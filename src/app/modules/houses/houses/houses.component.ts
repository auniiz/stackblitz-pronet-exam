import { Component, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadHouses, selectAllHouses } from '../../../store';

@Component({
  selector: 'app-houses',
  imports: [],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent {
  houses = signal([]);
  searchTerm = signal('');

  constructor(private store: Store) {
    this.store.dispatch(loadHouses());
    this.store.select(selectAllHouses).subscribe(houses => this.houses.set(<any>houses));
  }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value.toLowerCase());
  }

  filteredHouses() {
    return this.houses().filter(house => house.name.toLowerCase().includes(this.searchTerm()));
  }
}

