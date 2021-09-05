import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  @Input("header-list") headerList : string[] = [];
  @Input("field-list") fieldList : string[] = [];
  @Input("data-list") dataList : any[] = [];

  @Input("bg-color") bgColor : string = 'dark';
  @Input("text-color") textColor : string = 'info';

  constructor() { }

  ngOnInit(): void {
  }

  selectedRow(id : number) : void{
    alert(id);
  }

}
