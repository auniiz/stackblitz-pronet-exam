import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as BooksActions from './books.actions';
import { IBook } from '../../models';

@Injectable()
export class BooksEffects {
   constructor(private actions$: Actions, private http: HttpClient) { }

   loadBooks$ = createEffect(() =>
      this.actions$.pipe(
         ofType(BooksActions.loadBooks),
         mergeMap(() =>
            this.http.get<IBook[]>('https://anapioficeandfire.com/api/books').pipe(
               map((books) => BooksActions.loadBooksSuccess({ books })),
               catchError((error) => of(BooksActions.loadBooksFailure({ error: error.message })))
            )
         )
      )
   );
}
