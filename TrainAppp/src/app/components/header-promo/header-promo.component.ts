import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-promo',
  templateUrl: './header-promo.component.html',
  styleUrls: ['./header-promo.component.css']
})
export class HeaderPromoComponent {
  constructor(){}
  value1!: string;
  value2!: string;
  switched: boolean = false;


  switchValues() {
    const temp = this.value1;
    this.value1 = this.value2;
    this.value2 = temp;
    this.switched=true;
  }
}

