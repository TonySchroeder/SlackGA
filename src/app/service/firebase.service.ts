import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  loggedInUserId: string = 'e1ryqoWxpbFiYNHAyvZ9';
  collUser: any;
  user$: Observable<any>;
  users: any;
  collChannel: any;
  channel$: Observable<any>;
  channels: any;

  currentChannelId: string = '';
  currentUserMessageId: string = '';


  messageValue = '';




  constructor(public firestore: Firestore) {
    this.collUser = collection(firestore, 'users'), { idField: 'id' };
    this.user$ = collectionData(this.collUser);

    this.collChannel = collection(firestore, 'channel');
    this.channel$ = collectionData(this.collChannel);

  }


  loadUser() {
    this.user$.subscribe((newUser) => {
      this.users = newUser;
      console.log(this.users);
    });
  }


  loadChannels() {
    this.channel$.subscribe((newChannel) => {
      this.channels = newChannel;
      console.log(this.channels);
    });
  }

}
