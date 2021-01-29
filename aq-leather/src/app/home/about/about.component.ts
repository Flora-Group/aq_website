import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public showModalFounded: boolean = false;
  public showModalMission: boolean = false;
  public showModalVision: boolean = false;
  public showModalCustSat: boolean = false;
  public showModalAchiv: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
