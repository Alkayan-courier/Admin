import { Routes } from '@angular/router';
import { AreaCreateComponent } from './create/area-create/area-create.component';
import { CityCreateComponent } from './create/city-create/city-create.component';
import { AreaListComponent } from './list/area-list/area-list.component';
import { CityListComponent } from './list/city-list/city-list.component';
import { AreaUpdateComponent } from './update/area-update/area-update.component';
import { AreaDetailsComponent } from './view/area-details/area-details.component';
import { CityUpdateComponent } from './update/city-update/city-update.component';
import { CityDetailsComponent } from './view/city-details/city-details.component';
import { OrderStatusCreateComponent } from './create/order-status-create/order-status-create.component';
import { OrderStatusListComponent } from './list/order-status-list/order-status-list.component';
import { OrderStatusUpdateComponent } from './update/order-status-update/order-status-update.component';
import { OrderStatusDetailsComponent } from './view/order-status-details/order-status-details.component';
import { AreaGroupCreateComponent } from './create/areagroup-create/areagroup-create.component';
import { AreaGroupListComponent } from './list/areagroup-list/areagroup-list.component';
import { AreaGroupUpdateComponent } from './update/areagroup-update/areagroup-update.component';
import { AreaGroupDetailsComponent } from './view/areagroup-details/areagroup-details.component';
import { ClientListComponent } from './list/client-list/client-list.component';
import { ClientCreateComponent } from './create/client-create/client-create.component';
import { ClientUpdateComponent } from './update/client-update/client-update.component';
import { ClientDetailsComponent } from './view/client-details/client-details.component';
import { DriverListComponent } from './list/driver-list/driver-list.component';
import { DriverCreateComponent } from './create/driver-create/driver-create.component';
import { DriverUpdateComponent } from './update/driver-update/driver-update.component';
import { DriverDetailsComponent } from './view/driver-details/driver-details.component';
import { EmployeeCreateComponent } from './create/employee-create/employee-create.component';
import { EmployeeListComponent } from './list/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './update/employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './view/employee-details/employee-details.component';
import { RecordListComponent } from './list/record-list/record-list.component';
import { RecordDetailsComponent } from './view/record-details/record-details.component';
import { PromoCodeCreateComponent } from './create/promo-code-create/promo-code-create.component';
import { PromoCodeListComponent } from './list/promo-code-list/promo-code-list.component';
import { OrderUpdateComponent } from './update/order-update/order-update.component';
import { OrderListComponent } from './list/order-list/order-list.component';
import { OrderCreateComponent } from './create/order-create/order-create.component';
import { OrderDetailsComponent } from './view/order-details/order-details.component';
import { PromoCodeDetailsComponent } from './view/promo-code-details/promo-code-details.component';
import { PromoCodeUpdateComponent } from './update/promo-code-update/promo-code-update.component';
import { OrderListAdminComponent } from './list/order-list-admin/order-list-admin.component';
import { ReportsSearchComponent } from './reports-search/reports-search.component';
import { CompanyRevenueComponent } from './company-revenue/company-revenue.component';
import { MessageCreateComponent } from './create/message-create/message-create.component';
import { RoundListComponent } from './list/rounds-list/rounds-list.component';
import { RoundDetailsComponent } from './view/round-details/round-details.component';
import { PostponedOrdersComponent } from './list/postponed-orders/postponed-orders.component';
import { ClientBrandCreateComponent } from './create/client-brand-create/client-brand-create.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { EndUserCreateComponent } from './create/enduser-create/enduser-create.component';
import { EndUsersListComponent } from './list/endusers-list/endusers-list.component';
import { EndUserUpdateComponent } from './update/enduser-update/enduser-update.component';
import { EndUserDetailsComponent } from './view/enduser-details/enduser-details.component';
import { RoleGuard } from '../auth/role.guard';
import { MessagesListComponent } from './list/messages-list/messages-list.component';
import { PostponedOrderUpdateComponent } from './update/postponed-order-update/postponed-order-update.component';

export const FormsRoutes: Routes = [
    { component: AreaCreateComponent, path: 'area-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant'] } },
    { component: AreaListComponent, path: 'area-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: AreaUpdateComponent, path: 'area-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: AreaDetailsComponent, path: 'area-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: CityDetailsComponent, path: 'city-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: CityCreateComponent, path: 'city-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: CityListComponent, path: 'city-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: CityUpdateComponent, path: 'city-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderStatusCreateComponent, path: 'order-status-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderStatusListComponent, path: 'order-status-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderStatusUpdateComponent, path: 'order-status-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderStatusDetailsComponent, path: 'order-status-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderCreateComponent, path: 'order-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: EndUserCreateComponent, path: 'enduser-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EndUserUpdateComponent, path: 'enduser-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EndUserDetailsComponent, path: 'enduser-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EndUsersListComponent, path: 'endusers-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: OrderListComponent, path: 'order-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: PostponedOrdersComponent, path: 'postponed-orders', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: PostponedOrderUpdateComponent, path: 'postponed-order-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderListAdminComponent, path: 'order-list-admin', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant'] } },
    { component: OrderUpdateComponent, path: 'order-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: OrderDetailsComponent, path: 'order-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: AreaGroupCreateComponent, path: 'areagroup-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: AreaGroupListComponent, path: 'areagroup-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: MessageCreateComponent, path: 'message-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: AreaGroupUpdateComponent, path: 'areagroup-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: AreaGroupDetailsComponent, path: 'areagroup-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: ClientListComponent, path: 'client-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: CompanyRevenueComponent, path: 'company-revenue', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant'] } },
    { component: ReportsSearchComponent, path: 'reports-search', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: ReportsSearchComponent, path: 'reports-search/:userType/:roundId', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: ClientCreateComponent, path: 'client-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: ClientUpdateComponent, path: 'client-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: ClientDetailsComponent, path: 'client-details/:id/:activeTab', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: DriverCreateComponent, path: 'driver-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: DriverUpdateComponent, path: 'driver-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: DriverDetailsComponent, path: 'driver-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: DriverListComponent, path: 'driver-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EmployeeCreateComponent, path: 'employee-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EmployeeListComponent, path: 'employees-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EmployeeUpdateComponent, path: 'employee-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: EmployeeDetailsComponent, path: 'employee-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: RecordListComponent, path: 'records-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: RoundListComponent, path: 'rounds-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: RecordDetailsComponent, path: 'record-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: RoundDetailsComponent, path: 'round-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant'] } },
    { component: PromoCodeCreateComponent, path: 'promo-code-create', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: ClientBrandCreateComponent, path: 'client-brand-create/:clientId', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: PromoCodeListComponent, path: 'promo-code-list', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: PromoCodeDetailsComponent, path: 'promo-code-details/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: PromoCodeUpdateComponent, path: 'promo-code-update/:id', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: PushNotificationsComponent, path: 'push-notifications', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
    { component: MessagesListComponent, path: 'messages', canActivate: [RoleGuard], data: { expectedRole: ['Admin', 'Accountant', 'Assistant', 'DataEntry'] } },
];
