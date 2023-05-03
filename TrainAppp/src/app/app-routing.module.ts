import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CallCenterComponent } from './components/call-center/call-center.component';
import { StrikeComponent } from './components/strike/strike.component';
import { DisabledComponent } from './components/disabled/disabled.component';
import { SecurityComponent } from './components/security/security.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: 'registration', pathMatch: 'full', component: RegistrationComponent },
  { path: 'callCenter', pathMatch: 'full', component: CallCenterComponent },
  { path: 'strike', pathMatch: 'full', component: StrikeComponent },
  {path:'disabled' , pathMatch:"full", component: DisabledComponent},
  {path:'security' , pathMatch:"full", component: SecurityComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
