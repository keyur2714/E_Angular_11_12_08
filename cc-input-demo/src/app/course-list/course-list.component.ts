import { Component, OnInit } from '@angular/core';
//import { Course } from './course.model';

class CourseDTO {
  constructor(public id ?: number,public courseCode ?: string,public courseName ?: string,public fees ?: number){}
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  headerList : string[] = ["Id","Course Name","Fees"];
  fieldList : string[] = ["id","courseName","fees"];
  //courseList : Course[] = [];
  courseList : CourseDTO[] = [];

  constructor() { }

  ngOnInit(): void {
    let course1 = new CourseDTO(1,"ANG","Angular",13800);
    let course2 = new CourseDTO(2,"REACT","React JS",12800);
    let course3 = new CourseDTO(3,"JAVA","Core & Advance JAVA",14800);
    let course4 = new CourseDTO(4,"BIGDATA","Bigdata Hadoop",15800);
    let course5 = new CourseDTO(5,"FLUTTER","Flutter Mobile Apps",11800);
    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);
    this.courseList.push(course4);
    this.courseList.push(course5);
  }

}
