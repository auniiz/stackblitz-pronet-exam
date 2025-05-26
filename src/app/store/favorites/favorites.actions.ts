import { createAction, props } from '@ngrx/store';
import { IFavoriteItem } from '../../models/favorites.model';

export const addFavorite = createAction(
   '[Favorites] Add Favorite',
   props<{ item: IFavoriteItem }>()
);

export const removeFavorite = createAction(
   '[Favorites] Remove Favorite',
   props<{ itemUrl: string }>()
);
