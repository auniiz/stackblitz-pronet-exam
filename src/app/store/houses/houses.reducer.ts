import { createReducer, on } from '@ngrx/store';
import { loadHouses, loadHousesSuccess } from './houses.actions';
import { state } from '@angular/animations';
import { IHouse } from '../../models';

const initialState: IHouse[] = [];

export const housesReducer = createReducer(
   initialState,
   on(loadHousesSuccess, (state, { houses }) => houses)
);
