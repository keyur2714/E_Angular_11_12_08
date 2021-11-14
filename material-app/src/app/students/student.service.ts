import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  appUrl : string = 'http://localhost:3000/students';

  constructor(private http : HttpClient) { }

  getAllStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(this.appUrl);
  }

  saveStudent(student : Student) : Observable<Student> {
    return this.http.post(this.appUrl,student);
  }

}
