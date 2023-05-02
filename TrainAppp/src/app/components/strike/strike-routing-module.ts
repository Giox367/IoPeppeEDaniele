import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrikeComponent } from './strike.component';




const routes: Routes = [
  {path:'/strike' , pathMatch:"full", component: StrikeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
