import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { ShowTableComponent } from './components/show-table/show-table.component';
// material
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  declarations: [
    ShowTableComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule,
    MaterialModule
  ]
})
export class TablaModule { }
