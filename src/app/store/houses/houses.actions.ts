import { createAction, props } from '@ngrx/store';
import { IHouse } from '../../models';

export const loadHouses = createAction('[Houses] Load Houses');
export const loadHousesSuccess = createAction('[Houses] Load Houses Success', props<{ houses: IHouse[] }>());
