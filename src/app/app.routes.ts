import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { ListComponent } from './modules/list/list.component';
import { DetailComponent } from './modules/detail/detail.component';
import { FavoritesComponent } from './modules/favorites/favorites.component';

export const appRoutes: Routes = [
   { path: '', component: LandingComponent },
   { path: 'list', component: ListComponent },
   { path: 'detail/:id', component: DetailComponent },
   { path: 'favorites', component: FavoritesComponent },
];

