import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBooksState } from '../../models';

export const selectBooksState = createFeatureSelector<IBooksState>('books');

export const selectAllBooks = createSelector(selectBooksState, (state) => state.books);
export const selectBooksLoading = createSelector(selectBooksState, (state) => state.loading);
export const selectBooksError = createSelector(selectBooksState, (state) => state.error);
