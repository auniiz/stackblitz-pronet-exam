import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as BooksActions from './books.actions';
import { IBook } from '../../models';
import { BooksService } from '../../services';

@Injectable()
export class BooksEffects {
   constructor(private actions$: Actions, private service: BooksService) { }

   loadBooks$ = createEffect(() =>
      this.actions$.pipe(
         ofType(BooksActions.loadBooks),
         mergeMap(() =>
            this.service.getAll().pipe(
               map((books) => BooksActions.loadBooksSuccess({ books })),
               catchError((error) => of(BooksActions.loadBooksFailure({ error: error.message })))
            )
         )
      )
   );
}
