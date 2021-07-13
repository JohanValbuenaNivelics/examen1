import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
// modulos
import { MaterialModule } from '@app/material/material.module';
//router
import { RouterModule } from '@angular/router';
import { ToArticlePymesPipe } from './pipes/to-articles-pymes/to-article-pymes.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    ToArticlePymesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    ToArticlePymesPipe
  ]
})
export class SharedModule { }
