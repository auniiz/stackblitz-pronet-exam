import { createAction, props } from '@ngrx/store';
import { IBook } from '../../models';

export const loadBooks = createAction('[Books] Load Books');
export const loadBooksSuccess = createAction('[Books] Load Books Success', props<{ books: IBook[] }>());
export const loadBooksFailure = createAction('[Books] Load Books Failure', props<{ error: string }>());
