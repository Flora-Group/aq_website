import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public showMap: boolean = false;

  public socialList: Array<any> = [
    {
      src: 'gmail',
      name: 'Gmail',
      value: 'aqleather1112@gmail.com',
      button: 'Mail Now',
      link: 'mailto:aqleather1112@gmail.com'
    },
    {
      src: 'instagram',
      name: 'Instragram',
      value: '@aqleather',
      button: 'Follow Now',
      link: 'https://www.instagram.com/aqleather'
    },
    {
      src: 'map',
      name: 'Address',
      value: '22, 1, Chandra Nath Roy Rd, Panchanna Pally, Topsia, Kolkata, West Bengal 700039',
      button: 'Show Map',
      toggle: 'showMap'
    },
    {
      src: 'whatsapp',
      name: 'Whatsapp',
      value: '+91 7003702947',
      button: 'Message Now',
      link: 'https://api.whatsapp.com/send?phone=7003702947'
    },
    {
      src: 'whatsapp',
      name: 'Whatsapp',
      value: '+91 9903321265',
      button: 'Message Now',
      link: 'https://api.whatsapp.com/send?phone=9903321265'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
