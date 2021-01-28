import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }
}
