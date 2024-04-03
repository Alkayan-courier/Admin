import { YesNoDialogComponent } from './shared-components/yes-no-dialog/yes-no-dialog.component';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { RouterModule } from '@angular/router';
import { AuthorizeInterceptor } from '../auth/authorize.interceptor';
import { RoleGuard } from '../auth/role.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { AuthorizeService } from '../auth/authorize.service';
import { DynamicFormComponent } from './shared-components/dynamic-form/dynamic-form.component';
import { DynamicListComponent } from './shared-components/dynamic-list/dynamic-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { LanguageService } from './services/language.service';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DynamicDetailsComponent } from './shared-components/dynamic-details/dynamic-details.component';
import { DynamicCardComponent } from './shared-components/dynamic-card/dynamic-card.component';
import { DashboardComponent } from './shared-components/dashboard/dashboard.component';
import { ColorFadePipe } from './pipes/color-fade.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { AreaGroupPricesComponent } from './shared-components/area-group-prices/area-group-prices.component';
import { MatCardModule } from '@angular/material/card';
import { IconPickerDialogComponent } from './shared-components/icon-picker-dialog/icon-picker-dialog.component';
import { FilterPipe } from './pipes/search.pipe';
import { AvailableDriversDialogComponent } from './shared-components/available-drivers-dialog/available-drivers-dialog.component';
import { ReportsGeneratorComponent } from '../reports-management/reports-generator/reports-generator.component';
import { MatRadioModule } from '@angular/material/radio';
import { OrderNotesComponent } from './shared-components/order-notes/order-notes.component';
import { ColorPickerModule } from 'ngx-color-picker';

import { FileSaverModule } from 'ngx-filesaver';
import { UserRolesComponent } from './shared-components/user-roles/user-roles.component';
import { ReportsResultModule } from './shared-components/reports-results/reports-result.module';
import { ReportsResultComponent } from './shared-components/reports-results/reports-result.component';
import { MatPaginationIntlService } from './services/mat-paginator-translate.service';
import { AddNoteDialogComponent } from './shared-components/add-note-dialog/add-note-dialog.component';
import { AddEndUserDialogComponent } from './shared-components/add-end-user-dialog/add-end-user-dialog.component.ts.component';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, MatCheckboxModule,
    MatTooltipModule,
    AdminLayoutModule,
    ReportsResultModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatIconModule,
    TranslateModule,
    FlexLayoutModule,
    MatTabsModule,
    MatCardModule,
    MatRadioModule,
    FileSaverModule
  ],
  declarations: [
    SharedComponent,
    YesNoDialogComponent,
    SidebarComponent,
    AdminLayoutComponent,
    ReportsResultComponent,
    FooterComponent,
    NavbarComponent,
    DynamicFormComponent,
    DynamicListComponent,
    DynamicDetailsComponent,
    DynamicCardComponent,
    DashboardComponent,
    ColorFadePipe,
    AreaGroupPricesComponent,
    OrderNotesComponent,
    IconPickerDialogComponent,
    FilterPipe,
    AvailableDriversDialogComponent,
    AddNoteDialogComponent,
    ReportsGeneratorComponent,
    UserRolesComponent,
    AddEndUserDialogComponent
  ],
  exports: [
    SharedComponent,
    YesNoDialogComponent,
    SidebarComponent,
    AdminLayoutComponent,
    FooterComponent,
    NavbarComponent,
    DynamicFormComponent,
    DynamicListComponent,
    DynamicDetailsComponent,
    DynamicCardComponent,
    DashboardComponent,
    ColorFadePipe,
    IconPickerDialogComponent,
    FilterPipe,
    AreaGroupPricesComponent,
    AvailableDriversDialogComponent,
    AddNoteDialogComponent,
    ReportsGeneratorComponent,
    OrderNotesComponent,
    UserRolesComponent,
    AddEndUserDialogComponent
  ],

  providers: [
    AuthorizeService,
    LanguageService,
    RoleGuard,
    MatPaginatorIntl,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    }
  ]
})
export class SharedModule { }

