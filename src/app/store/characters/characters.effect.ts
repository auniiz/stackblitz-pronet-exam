import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as CharactersActions from './characters.actions';
import { CharactersService } from '../../services';

@Injectable()
export class CharactersEffects {
   constructor(private actions$: Actions, private service: CharactersService) { }

   loadCharacters$ = createEffect(() =>
      this.actions$.pipe(
         ofType(CharactersActions.loadCharacters),
         mergeMap(() =>
            this.service.getAll().pipe(
               map(characters => CharactersActions.loadCharactersSuccess({ characters: characters }))
            )
         )
      )
   );
}
