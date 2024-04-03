import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: [
  ],
  providers: []
})

export class AdminLayoutModule { }
