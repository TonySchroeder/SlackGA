import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {

messageValue = '';

  constructor() {
    console.log(this.messageValue);

  }

  ngOnInit(): void {

  }

}
