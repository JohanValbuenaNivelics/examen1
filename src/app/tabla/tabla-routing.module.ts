import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTableComponent } from './components/show-table/show-table.component';

const routes: Routes = [{
  path: '',
  component: ShowTableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaRoutingModule { }
