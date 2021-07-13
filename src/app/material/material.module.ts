import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
