import { createReducer, on } from '@ngrx/store';
import { loadHousesSuccess } from './houses.actions';

export const initialState: any[] = [];

export const housesReducer = createReducer(
   initialState,
   on(loadHousesSuccess, (state, { houses }) => houses)
);
