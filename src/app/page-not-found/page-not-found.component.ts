import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
    setTimeout(() => {
      //@ts-ignore
      document.getElementById('pnf').classList.remove('loading');
    }, 1000);
  }

  ngOnInit(): void {
  }

}
