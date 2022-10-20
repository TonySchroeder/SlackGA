import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-user-initialen',
  templateUrl: './user-initialen.component.html',
  styleUrls: ['./user-initialen.component.scss']
})
export class UserInitialenComponent implements OnInit {

  @Input() userId:string;

  constructor(public store: FirebaseService) { }

  ngOnInit(): void {
  }

}
