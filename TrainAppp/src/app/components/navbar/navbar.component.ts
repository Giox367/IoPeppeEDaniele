import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit{
  name ?: string
  constructor(private route : Router){}
  ngOnInit(): void {

  }
  logout()
  {
    localStorage.clear();
    this.route.navigate([''])
  }

}
