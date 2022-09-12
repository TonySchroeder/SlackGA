import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servis/firebase.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  constructor(public store: FirebaseService) {
    store.loadUser();
  }

  ngOnInit(): void {
  }

}
