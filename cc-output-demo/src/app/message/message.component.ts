import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message") msg : string = 'Hello Radhe Krishna...!';
  @Input("message-type") msgType : string = 'info';

  @Output("getFormattedMessage") formattedMessage : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //alert(1);
    this.formattedMessage.emit("Hello..."+this.msg);
  }

}
