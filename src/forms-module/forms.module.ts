import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AreaCreateComponent } from './create/area-create/area-create.component';
import { FormsRoutes } from './forms.routing';
import { SharedModule } from '../shared/shared.module';
import { AreaListComponent } from './list/area-list/area-list.component';
import { DynamicDataService } from '../shared/services/dynamic-form.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AreaUpdateComponent } from './update/area-update/area-update.component';
import { AreaDetailsComponent } from './view/area-details/area-details.component';
import { CityCreateComponent } from './create/city-create/city-create.component';
import { CityListComponent } from './list/city-list/city-list.component';
import { CityUpdateComponent } from './update/city-update/city-update.component';
import { CityDetailsComponent } from './view/city-details/city-details.component';
import { OrderStatusCreateComponent } from './create/order-status-create/order-status-create.component';
import { OrderStatusListComponent } from './list/order-status-list/order-status-list.component';
import { OrderStatusUpdateComponent } from './update/order-status-update/order-status-update.component';
import { OrderStatusDetailsComponent } from './view/order-status-details/order-status-details.component';
import { AreaGroupCreateComponent } from './create/areagroup-create/areagroup-create.component';
import { AreaGroupListComponent } from './list/areagroup-list/areagroup-list.component';
import { AreaGroupDetailsComponent } from './view/areagroup-details/areagroup-details.component';
import { AreaGroupUpdateComponent } from './update/areagroup-update/areagroup-update.component';
import { ClientListComponent } from './list/client-list/client-list.component';
import { ClientCreateComponent } from './create/client-create/client-create.component';
import { ClientUpdateComponent } from './update/client-update/client-update.component';
import { ClientDetailsComponent } from './view/client-details/client-details.component';
import { DriverListComponent } from './list/driver-list/driver-list.component';
import { DriverCreateComponent } from './create/driver-create/driver-create.component';
import { DriverUpdateComponent } from './update/driver-update/driver-update.component';
import { DriverDetailsComponent } from './view/driver-details/driver-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EmployeeCreateComponent } from './create/employee-create/employee-create.component';
import { EmployeeListComponent } from './list/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './update/employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './view/employee-details/employee-details.component';
import { RecordListComponent } from './list/record-list/record-list.component';
import { RecordDetailsComponent } from './view/record-details/record-details.component';
import { PromoCodeCreateComponent } from './create/promo-code-create/promo-code-create.component';
import { PromoCodeListComponent } from './list/promo-code-list/promo-code-list.component';
import { OrderCreateComponent } from './create/order-create/order-create.component';
import { OrderListComponent } from './list/order-list/order-list.component';
import { OrderUpdateComponent } from './update/order-update/order-update.component';
import { OrderDetailsComponent } from './view/order-details/order-details.component';
import { OrderListAdminComponent } from './list/order-list-admin/order-list-admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MoveOrdersDialogComponent } from './move-orders-dialog/move-orders-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { ReportsSearchComponent } from './reports-search/reports-search.component';
import { CompanyRevenueComponent } from './company-revenue/company-revenue.component';
import { MessageCreateComponent } from './create/message-create/message-create.component';
import { PromoCodeUpdateComponent } from './update/promo-code-update/promo-code-update.component';
import { PromoCodeDetailsComponent } from './view/promo-code-details/promo-code-details.component';
import { RoundListComponent } from './list/rounds-list/rounds-list.component';
import { RoundDetailsComponent } from './view/round-details/round-details.component';
import { PostponedOrdersComponent } from './list/postponed-orders/postponed-orders.component';
import { AgmCoreModule } from '@agm/core';
import { ClientBrandListComponent } from './list/client-brand-list/client-brand-list.component';
import { ClientBrandCreateComponent } from './create/client-brand-create/client-brand-create.component';
import { PushNotificationsComponent } from './push-notifications/push-notifications.component';
import { MatCardModule } from '@angular/material/card';
import { NgSelectModule } from '@ng-select/ng-select';
import { EndUserCreateComponent } from './create/enduser-create/enduser-create.component';
import { EndUsersListComponent } from './list/endusers-list/endusers-list.component';
import { EndUserUpdateComponent } from './update/enduser-update/enduser-update.component';
import { EndUserDetailsComponent } from './view/enduser-details/enduser-details.component';
import { MessagesListComponent } from './list/messages-list/messages-list.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginationIntlService } from '../shared/services/mat-paginator-translate.service';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from '../shared/models/date-picker-adapter';
import { PostponedOrderUpdateComponent } from './update/postponed-order-update/postponed-order-update.component';



@NgModule({
  declarations: [
    AreaCreateComponent,
    AreaListComponent,
    AreaDetailsComponent,
    AreaUpdateComponent,
    AreaGroupCreateComponent,
    AreaGroupListComponent,
    AreaGroupDetailsComponent,
    AreaGroupUpdateComponent,
    CityCreateComponent,
    CityListComponent,
    CityUpdateComponent,
    CityDetailsComponent,
    OrderStatusCreateComponent,
    OrderStatusListComponent,
    OrderStatusUpdateComponent,
    OrderStatusDetailsComponent,
    OrderListAdminComponent,
    OrderCreateComponent,
    OrderListComponent,
    OrderUpdateComponent,
    OrderDetailsComponent,
    PostponedOrdersComponent,
    PostponedOrderUpdateComponent,
    CompanyRevenueComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDetailsComponent,
    DriverListComponent,
    DriverCreateComponent,
    DriverUpdateComponent,
    DriverDetailsComponent,
    EndUserCreateComponent,
    EndUsersListComponent,
    EndUserUpdateComponent,
    EndUserDetailsComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent,
    RecordListComponent,
    RecordDetailsComponent,
    PromoCodeCreateComponent,
    PromoCodeListComponent,
    ReportsSearchComponent,
    MessageCreateComponent,
    MoveOrdersDialogComponent,
    PromoCodeUpdateComponent,
    PromoCodeDetailsComponent,
    RoundListComponent,
    RoundDetailsComponent,
    ClientBrandListComponent,
    ClientBrandCreateComponent,
    PushNotificationsComponent,
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    SharedModule, FormsModule, MatSelectModule, MatFormFieldModule, MatAutocompleteModule,
    MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatNativeDateModule,
    MatDatepickerModule, MatRadioModule, MatDialogModule,
    MatTabsModule, SharedModule,
    RouterModule.forChild(FormsRoutes),
    TranslateModule, MatTableModule, MatCheckboxModule, MatIconModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, MatCheckboxModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    NgSelectModule,
    MatPaginatorModule
  ],
  exports: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    DynamicDataService, DatePipe,
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ]
})
export class DynamicFormsModule { }
