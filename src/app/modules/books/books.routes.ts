import { Routes } from '@angular/router';
import { EnumRouteLv0, EnumRouteLv1 } from '../../models';
import { BooksComponent } from './books.component';

export const booksRoutes: Routes = [
   {
      path: '',
      redirectTo: EnumRouteLv1.LIST,
      pathMatch: 'full',
   },
   {
      path: '',
      redirectTo: `${EnumRouteLv1.LIST}/1`,
      pathMatch: 'full',
   },
   {
      path: `${EnumRouteLv1.LIST}/:pageIndex`,
      component: BooksComponent,
   },

];

