import { Routes } from '@angular/router';
import { EnumRouteLv0 } from './models';
import { charactersRoutes, housesRoutes } from './modules'
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
   { path: '', redirectTo: EnumRouteLv0.HOUSES, pathMatch: 'full' },
   { path: EnumRouteLv0.HOUSES, loadChildren: () => housesRoutes },
   { path: EnumRouteLv0.CHARACTERS, loadChildren: () => charactersRoutes },
   { path: EnumRouteLv0.BOOKS, loadChildren: () => housesRoutes },
];

