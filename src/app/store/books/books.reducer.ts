import { createReducer, on } from '@ngrx/store';
import * as BooksActions from './books.actions';
import { IBooksState } from '../../models';

const initialBooksState: IBooksState = {
   books: [],
   loading: false,
   error: null,
};

export const booksReducer = createReducer(
   initialBooksState,
   on(BooksActions.loadBooks, (state) => ({ ...state, loading: true })),
   on(BooksActions.loadBooksSuccess, (state, { books }) => ({
      ...state,
      books,
      loading: false,
      error: null,
   })),
   on(BooksActions.loadBooksFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
   }))
);
