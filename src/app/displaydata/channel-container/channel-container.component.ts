import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc } from 'firebase/firestore';
import { filter } from 'rxjs';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-channel-container',
  templateUrl: './channel-container.component.html',
  styleUrls: ['./channel-container.component.scss']
})
export class ChannelContainerComponent implements OnInit {

  threadUser: string;
  users = this.firestore.users
  thisUser: any;


  constructor(public firestore: FirebaseService, public firebase: Firestore) {

  }

  ngOnInit(): void {

    // this.loadUser('e1ryqoWxpbFiYNHAyvZ9')
    // console.log(this.thisUser);
  }


  loadUser(UserId: string) {
    this.thisUser = this.filterData(UserId);
    return this.thisUser = this.thisUser[0].userName;
  }


  filterData(userId: string) {
    return this.users.filter(object => {
      return object['userId'] == userId;
    });
  }


}
