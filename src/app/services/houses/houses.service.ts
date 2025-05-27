import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHouse } from '../../models';

@Injectable({ providedIn: 'root' })
export class HousesService {
   url = 'https://anapioficeandfire.com/api/houses';
   constructor(private http: HttpClient) { }

   getAll(): Observable<IHouse[]> {
      return this.http.get<IHouse[]>(this.url);
   }
}
