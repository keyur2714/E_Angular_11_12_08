import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lookup } from '../lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() name : string = '';
  @Input() label : string = '';
  @Input("data-list") dataList : Lookup[] = [];
  @Input("selected-item") selectedItem : Lookup = new Lookup();

  @Output() getSelectedItem : EventEmitter<Lookup> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  returnSelectedItem() : void{
    this.getSelectedItem.emit(this.selectedItem);
  }
}
