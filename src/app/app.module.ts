import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// http for services
import {HttpClientModule} from '@angular/common/http'
//core
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

// modulos
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
