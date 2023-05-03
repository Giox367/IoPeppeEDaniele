import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisabledComponent } from './disabled.component';





const routes: Routes = [

    {path:'/disabled' , pathMatch:"full", component: DisabledComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
