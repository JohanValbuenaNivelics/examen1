import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormNewUserRoutingModule } from './form-new-user-routing.module';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormNewUserRoutingModule
  ]
})
export class FormNewUserModule { }
