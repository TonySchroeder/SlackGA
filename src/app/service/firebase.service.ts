import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
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
  currentChannelName: string = '';


  currentUserMessageId: string = '';

  currentChannel: any;

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
      // console.log(this.users);
    });
  }


  loadChannels() {
    this.channel$.subscribe((newChannel) => {
      this.channels = newChannel;
      // console.log(this.channels);
    });
  }


  async loadCurrentChannel() {


    if (this.currentChannelId) {

      let collChannel = collection(this.firestore, `channel/${this.currentChannelId}/thread`);
      let channel$ = collectionData(collChannel);

      channel$.subscribe((newChannel) => {
        this.currentChannel = newChannel;
        console.log(this.currentChannel);
      });
    }

  }

}
