import { createFeatureSelector } from '@ngrx/store';
import { IFavoriteItem } from '../../models';

export const selectFavorites = createFeatureSelector<IFavoriteItem[]>('favorites');
