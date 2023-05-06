import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   tabs:any = document.querySelectorAll('[data-tab]');
 tabContents:any = document.querySelectorAll('[data-tab-content]');
}
