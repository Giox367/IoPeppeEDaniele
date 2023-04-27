import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallCenterComponent } from './call-center.component';




const routes: Routes = [

    {path:'/callCenter' , pathMatch:"full", component: CallCenterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
