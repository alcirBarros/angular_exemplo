import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialBarModule, LoadingPageModule } from 'angular-loading-page';
import { LayoutModule } from 'library/angular-admin-lte/src/lib/layout/layout.module';
//import { LayoutModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule,
    MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
