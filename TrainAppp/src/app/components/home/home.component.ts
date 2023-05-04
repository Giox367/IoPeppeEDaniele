import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   tabs:any = document.querySelectorAll('[data-tab]');
 tabContents:any = document.querySelectorAll('[data-tab-content]');

}
