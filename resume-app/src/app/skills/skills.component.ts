import { Component, OnInit } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills : Skill[] = []; //instance variable
  

  constructor() { }

  ngOnInit(): void {
    //local variable
    let skill1 = new Skill("Languages",["C","C++","Java","Type Script","Java Script"]);
    let skill2 = new Skill();
    skill2.skillType = "Databases";
    skill2.skillSets = ["MySql","Postgres","Oracle","Sql Server"];
    let skill3 = new Skill("Operating System",["Linux","Windows"]);
    let skill4= new Skill("Toos",["VS Code","Eclipse","TOAD","NPM","MAVEN"]);
    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
  }



}
