import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoApiRoutingModule } from './resultado-api-routing.module';
import { ShowResultComponent } from './components/show-result/show-result.component';
// material
import { MaterialModule } from '@app/material/material.module';
import { CardsArticlePymesComponent } from './components/cards-article-pymes/cards-article-pymes.component';
//shared
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [
    ShowResultComponent,
    CardsArticlePymesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ResultadoApiRoutingModule,
    SharedModule
  ]
})
export class ResultadoApiModule { }
