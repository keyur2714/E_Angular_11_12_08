import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../students/student.model';
import { StudentService } from '../students/student.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  studentForm = this.fb.group({
    id : [null, Validators.required],
    name: [null, Validators.required],
    mobileNo: [null, Validators.required],
    email: [null, Validators.required],
    city: [null, Validators.required],    
  });

    
  constructor(private fb: FormBuilder,private studentService : StudentService,private router : Router) {}

  onSubmit(): void {
    if(this.studentForm.valid){
      let student : Student = this.studentForm.value;
      this.studentService.saveStudent(student).subscribe(
        (data : Student)=>{
          alert("Student Saved Successfully.!");
          this.router.navigate(['students']);
        }
      )
    }
  }
}
