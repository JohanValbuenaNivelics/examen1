import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTestService } from './services/api-test.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ApiTestService]
})
export class CoreModule { }
