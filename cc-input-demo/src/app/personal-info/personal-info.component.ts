import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input("first-name") firstName : string = 'Keyur';
  @Input("last-name") lastName : string = 'Thakor';
  @Input() age : number = 34;
  @Input() city : string = 'Surat';
  @Input("mobile-no")mobileNo : string = '7387029671';
  @Input() email : string = 'keyurjava27@gmail.com';

  @Input("bg-color") bgColor : string = 'dark';
  @Input("text-color") textColor : string = 'info';

  constructor() { }

  ngOnInit(): void {
  }

}
