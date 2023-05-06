import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderPromoComponent } from './components/header-promo/header-promo.component';
import { FooterComponent } from './components/footer/footer.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { TicketContainerComponent } from './components/ticket-container/ticket-container.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CallCenterComponent } from './components/call-center/call-center.component';
import { StrikeComponent } from './components/strike/strike.component';
import { DisabledComponent } from './components/disabled/disabled.component';
import { SecurityComponent } from './components/security/security.component';
import { TabComponent } from './components/tab/tab.component';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderPromoComponent,
    FooterComponent,
    TicketCardComponent,
    TicketContainerComponent,
    ServicesComponent,
    LoginComponent,
    AboutComponent,
    RegistrationComponent,
    CallCenterComponent,
    StrikeComponent,
    DisabledComponent,
    SecurityComponent,
    TabComponent,





  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
