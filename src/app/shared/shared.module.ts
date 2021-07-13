import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// modulos
import { MaterialModule } from '@app/material/material.module';
//router
import { RouterModule } from '@angular/router';
import { ToArticlePymesPipe } from './pipes/to-articles-pymes/to-article-pymes.pipe';
import { ToCategoriesPipe } from './pipes/to-categories/to-categories.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ToArticlePymesPipe,
    ToCategoriesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    ToArticlePymesPipe,
    ToCategoriesPipe
  ]
})
export class SharedModule { }
