import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  save() : void {
    alert("Employee Saved Successfully...!");
    this.router.navigate(['admin/manage-employee']);
  }
}
