import { Routes } from '@angular/router';
import { RoleGuard } from '../../../../src/auth/role.guard';

import { ReportsResultComponent } from './reports-result.component';


export const ReportsRoutes: Routes = [

    { path: 'reports-result', component: ReportsResultComponent, canActivate: [RoleGuard], data: { expectedRole: [ 'Admin', 'DataEntry'] } },
    { path: 'reports-result/:roundId', component: ReportsResultComponent }
   
];
