import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataArray = [{
    src: 'https://source.unsplash.com/random',
    link: 'products/men'
  },
  {
    src: 'https://source.unsplash.com/random',
    link: 'products/women'
  },
  {
    src: 'https://source.unsplash.com/random',
    link: 'products/accessories'
  }]
  constructor() { }

  ngOnInit() { }
}
