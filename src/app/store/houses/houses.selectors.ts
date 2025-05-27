import { createFeatureSelector } from '@ngrx/store';
import { IHouse } from '../../models';

export const selectAllHouses = createFeatureSelector<IHouse[]>('houses');
