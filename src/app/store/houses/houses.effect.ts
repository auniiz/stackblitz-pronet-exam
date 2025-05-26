import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadHouses, loadHousesSuccess } from './houses.actions';
import { map, mergeMap } from 'rxjs';
import { HousesService } from '../../services';

@Injectable()
export class HousesEffects {
   constructor(private actions$: Actions, private service: HousesService) { }

   loadHouses$ = createEffect(() =>
      this.actions$.pipe(
         ofType(loadHouses),
         mergeMap(() => this.service.getAll().pipe(
            map(houses => loadHousesSuccess({ houses }))
         ))
      )
   );
}
