import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
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
