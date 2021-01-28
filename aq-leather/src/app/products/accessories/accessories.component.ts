import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {
  dataArray = [{
    src: 'https://source.unsplash.com/random',
    color: 'primary'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'danger'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'info'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'success'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'warning'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'danger'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'info'
  },
  {
    src: 'https://source.unsplash.com/random',
    color: 'success'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
