import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-channel-container',
  templateUrl: './channel-container.component.html',
  styleUrls: ['./channel-container.component.scss']
})
export class ChannelContainerComponent implements OnInit {

  constructor(public firestore: FirebaseService,) { }

  ngOnInit(): void {
  }

}
