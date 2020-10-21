import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './@components/navbar/navbar.module';
import { AboutModule } from './@components/about/about.module';
import { ContactModule } from './@components/contact/contact.module';
import { CopyrightModule } from './@components/copyright/copyright.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { NavbarComponent } from './@components/navbar/navbar.component';
import { PortfolioModule } from './@components/portfolio/portfolio.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    HeaderModule,
    PortfolioModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
