import { createReducer, on } from '@ngrx/store';
import { IFavoriteItem } from '../../models/favorites.model';
import { addFavorite, removeFavorite } from './favorites.actions';

export const initialState: IFavoriteItem[] = [];

export const favoritesReducer = createReducer(
   initialState,
   on(addFavorite, (state, { item }) => {
      if (state.find(fav => fav.url === item.url)) return state;
      return [...state, item];
   }),
   on(removeFavorite, (state, { itemUrl }) => state.filter(item => item.url !== itemUrl))
);
