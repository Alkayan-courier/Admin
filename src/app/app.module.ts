import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthorizeService } from '../auth/authorize.service';
import localeEn from '@angular/common/locales/en';
import localeAr from '@angular/common/locales/ar';
import localeArExtra from '@angular/common/locales/extra/ar';
import { registerLocaleData } from '@angular/common';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomDatePickerAdapter } from '../shared/models/date-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PublicOrderDetailsComponent } from './public-order-details/public-order-details.component';
import { AgmCoreModule } from '@agm/core';
import { MatPaginationIntlService } from '../shared/services/mat-paginator-translate.service';

registerLocaleData(localeEn, 'en');
registerLocaleData(localeAr, 'ar', localeArExtra);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, MatAutocompleteModule,
    RouterModule,
    AppRoutingModule,
    NgxSpinnerModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(environment.token);
        },
        allowedDomains: [environment.apiPreLink],
        disallowedRoutes: [],
      },
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [
    AppComponent,
    PublicOrderDetailsComponent
  ],
  providers: [AuthorizeService,
    { provide: DateAdapter, useClass: CustomDatePickerAdapter },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
