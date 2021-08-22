import { Component, OnInit } from '@angular/core';
import { Education } from './education.model';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {

  educationList : Education[] = []; //instance variable

  constructor() { }

  ngOnInit(): void {
    let education1 = new Education();
    education1.degree = 'S.S.C';
    education1.per = 72.14;
    education1.university = 'GSEB';
    education1.year = 2002;

    let education2 = new Education();
    education2.degree = 'H.S.C';
    education2.per = 66.50;
    education2.university = 'GHSEB';
    education2.year = 2004;

    let education3 = new Education();
    education3.degree = 'B-Tech';
    education3.per = 65.00;
    education3.university = 'SP University';
    education3.year = 2008;

    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);

  }

}
