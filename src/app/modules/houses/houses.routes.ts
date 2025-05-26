import { Routes } from '@angular/router';
import { EnumRouteLv1 } from '../../models';
import { HousesComponent } from './houses.component';

export const housesRoutes: Routes = [
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
      component: HousesComponent,
   },
];

