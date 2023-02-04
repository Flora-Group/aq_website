import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  dataArray = [{
    src: 'assets/images/accessories/5530.jpg',
    name: '5530'
  },
  {
    src: 'assets/images/accessories/12206 (1).jpg',
    name: '12206'
  },
  {
    src: 'assets/images/accessories/59380.jpg',
    name: '59380'
  },
  {
    src: 'assets/images/accessories/81506 (3).jpg',
    name: '81506'
  },
  {
    src: 'assets/images/accessories/IMG_8431.JPG',
    name: '8431'
  },
  {
    src: 'assets/images/accessories/IMG_9254.JPG',
    name: '9254'
  },
  {
    src: 'assets/images/accessories/424 Pouch.JPG',
    name: '424 Pouch'
  },
  {
    src: 'assets/images/accessories/59378 (990).jpg',
    name: '59378'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
