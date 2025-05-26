import { createFeatureSelector } from '@ngrx/store';

export const selectAllHouses = createFeatureSelector<any[]>('houses');
