import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule { }