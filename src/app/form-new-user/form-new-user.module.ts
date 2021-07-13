import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormNewUserRoutingModule } from './form-new-user-routing.module';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '@app/shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormNewUserRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class FormNewUserModule { }
