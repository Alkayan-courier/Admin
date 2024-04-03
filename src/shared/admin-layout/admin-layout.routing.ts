import { Routes } from '@angular/router';
import { ReportsGeneratorComponent } from '../../reports-management/reports-generator/reports-generator.component';
import { RoleGuard } from '../../auth/role.guard';
import { DashboardComponent } from '../shared-components/dashboard/dashboard.component';


export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: { expectedRole: [ 'Admin', 'DataEntry','Accountant','Assistant'] } },
    { path: 'reports-generator', component: ReportsGeneratorComponent, canActivate: [RoleGuard], data: { expectedRole: [ 'Admin', 'Accountant'] } },
    {
        path: 'forms',
        loadChildren: '../../forms-module/forms.module#DynamicFormsModule'
    },
];
