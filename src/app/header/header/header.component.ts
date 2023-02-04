import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    //@ts-ignore
    document.getElementById("mySidenav").style.width = "250px";
    //@ts-ignore
    document.getElementById("main").style.opacity = "1";
  }
  
  closeNav() {
    //@ts-ignore
    document.getElementById("mySidenav").style.width = "0px";
  }
}
