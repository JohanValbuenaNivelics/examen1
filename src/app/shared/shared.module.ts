import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// modulos
import { MaterialModule } from '@app/material/material.module';
//router
import { RouterModule } from '@angular/router';
import { ToArticlePymesPipe } from './pipes/to-articles-pymes/to-article-pymes.pipe';
import { ToCategoriesPipe } from './pipes/to-categories/to-categories.pipe';
import { ToTestimoniesPipe } from './pipes/to-testimonies/to-testimonies.pipe';
// forms
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ToArticlePymesPipe,
    ToCategoriesPipe,
    ToTestimoniesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    ToArticlePymesPipe,
    ToCategoriesPipe,
    ToTestimoniesPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
