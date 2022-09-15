import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  loggedInUserId: string = 'e1ryqoWxpbFiYNHAyvZ9';
  collUser: any;
  user$: Observable<any>;
  channel$: Observable<any>;
  collChannel: any;
  message: any;
  messageValue = '';
  threadValue = '';
  channels: any;


  constructor(firestore: Firestore) {
    this.collUser = collection(firestore, 'user'), { idField: 'id' };
    this.user$ = collectionData(this.collUser);

    this.collChannel = collection(firestore, 'channel');
    this.channel$ = collectionData(this.collChannel);
  }

  loadUser() {
    this.user$.subscribe((newMessage) => {
      this.message = newMessage;
      console.log(this.message);
    });
  }

  loadChannels() {
    this.channel$.subscribe((newChannel) => {
      this.channels = newChannel;
      console.log(this.channels);
    });
  }

}