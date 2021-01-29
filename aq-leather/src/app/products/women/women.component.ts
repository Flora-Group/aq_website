import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
  dataArray = [{
    src: 'assets/images/women/1221.JPG',
    name: '1211'
  },
  {
    src: 'assets/images/women/1241 (2).JPG',
    name: '1241'
  },
  {
    src: 'assets/images/women/3265 (1).JPG',
    name: '3265'
  },
  {
    src: 'assets/images/women/1210.JPG',
    name: '1210'
  },
  {
    src: 'assets/images/women/64509 (1).jpg',
    name: '64509'
  },
  {
    src: 'assets/images/women/9913.JPG',
    name: '9913'
  },
  {
    src: 'assets/images/women/64902 (1).jpg',
    name: '64902'
  },
  {
    src: 'assets/images/women/536856.20-1024x1024.jpg',
    name: '536856.20'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
