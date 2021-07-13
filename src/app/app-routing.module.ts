import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path:'home',
        loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'api',
        loadChildren: () =>
          import('./resultado-api/resultado-api.module').then(
            (m) => m.ResultadoApiModule
          ),
      },
      {
        path:'table',
        loadChildren: ()=> import('./tabla/tabla.module').then((m)=>m.TablaModule)

      },
      {
        path:'form',
        loadChildren: ()=> import('./form-new-user/form-new-user.module').then((m)=>m.FormNewUserModule)
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
