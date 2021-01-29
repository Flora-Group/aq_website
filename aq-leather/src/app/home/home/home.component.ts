import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menArray = [{
    src: 'assets/images/men/1556.JPG',
    link: 'products/men',
    name: '1556'
  },
  {
    src: 'assets/images/men/6560 (1).JPG',
    link: 'products/men',
    name: '6560'
  },
  {
    src: 'assets/images/men/792322.20_2-1.jpg',
    link: 'products/men',
    name: '792322.20_2-1'
  }]

  womenArray = [{
    src: 'assets/images/women/1210.JPG',
    link: 'products/women',
    name: '1210'
  },
  {
    src: 'assets/images/women/64509 (1).jpg',
    link: 'products/women',
    name: '64509'
  },
  {
    src: 'assets/images/women/9913.JPG',
    link: 'products/women',
    name: '9913'
  }]

  accessoriesArray = [{
    src: 'assets/images/accessories/424 Pouch.JPG',
    link: 'products/accessories',
    name: '424 Pouch'
  },
  {
    src: 'assets/images/accessories/12206 (1).jpg',
    link: 'products/accessories',
    name: '12206'
  },
  {
    src: 'assets/images/accessories/ATW1 (2).jpg',
    link: 'products/accessories',
    name: 'ATW1'
  }]
  constructor() { }

  ngOnInit() { }
}
