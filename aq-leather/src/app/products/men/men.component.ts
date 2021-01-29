import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

  dataArray = [{
    src: 'assets/images/men/1556.JPG',
    name: '1556'
  },
  {
    src: 'assets/images/men/6560 (1).JPG',
    name: '6560'
  },
  {
    src: 'assets/images/men/1560 (1).JPG',
    name: '1560'
  },
  {
    src: 'assets/images/men/1568 (1).JPG',
    name: '1568'
  },
  {
    src: 'assets/images/men/9818 (1).JPG',
    name: '9818'
  },
  {
    src: 'assets/images/men/45002 MW (3).JPG',
    name: '45002'
  },
  {
    src: 'assets/images/men/792322.20_2-1.jpg',
    name: '792322.20_2-1'
  },
  {
    src: 'assets/images/men/9178 Front.JPG',
    name: '9178'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
