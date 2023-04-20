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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderPromoComponent,
    FooterComponent,
    TicketCardComponent,
    TicketContainerComponent,


  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
