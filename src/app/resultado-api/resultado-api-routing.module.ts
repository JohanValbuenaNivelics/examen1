import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowResultComponent } from './components/show-result/show-result.component';

const routes: Routes = [{
  path: '',
  component: ShowResultComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadoApiRoutingModule { }
