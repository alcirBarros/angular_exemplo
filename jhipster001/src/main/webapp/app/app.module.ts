import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster001SharedModule } from 'app/shared/shared.module';
import { Jhipster001CoreModule } from 'app/core/core.module';
import { Jhipster001AppRoutingModule } from './app-routing.module';
import { Jhipster001HomeModule } from './home/home.module';
import { Jhipster001EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster001SharedModule,
    Jhipster001CoreModule,
    Jhipster001HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster001EntityModule,
    Jhipster001AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jhipster001AppModule {}
