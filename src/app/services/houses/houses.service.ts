import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHouse } from '../../models';

@Injectable({ providedIn: 'root' })
export class HousesService {
   private http = inject(HttpClient);
   private url = 'https://anapioficeandfire.com/api/houses';

   getAll(): Observable<any[]> {
      return this.http.get<IHouse[]>(this.url);
   }
}
