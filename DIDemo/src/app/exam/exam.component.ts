import { Component, OnInit } from '@angular/core';
import { AngularQuestion } from '../services/angular-question';
import { IQuestion } from '../services/IQuestion';
import { JavaQuestion } from '../services/java-question';
import { SpringQuestion } from '../services/spring-question';
const provideString  = {provide : IQuestion , useClass : JavaQuestion};

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [
    provideString
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private iQuestion : IQuestion) { }

  ngOnInit(): void {
    this.question = this.iQuestion.askQuestion();
  }



}
