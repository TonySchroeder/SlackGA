import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-all-channel-container',
  templateUrl: './all-channel-container.component.html',
  styleUrls: ['./all-channel-container.component.scss']
})
export class AllChannelContainerComponent implements OnInit {

  constructor(public firebase: FirebaseService) { }

  ngOnInit(): void {
  }

}
