import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  loggedInUserId: string = 'e1ryqoWxpbFiYNHAyvZ9';
  loggedInUser:any;

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




  constructor(public firebase: Firestore) {
    this.collUser = collection(firebase, 'users'), { idField: 'id' };
    this.user$ = collectionData(this.collUser);

    this.collChannel = collection(firebase, 'channel');
    this.channel$ = collectionData(this.collChannel);

  }


  loadUser() {
    this.user$.subscribe((loadUser) => {
      this.users = loadUser;
      // console.log(this.users);
    });
  }


  loadChannels() {
    this.channel$.subscribe((loadChannel) => {
      this.channels = loadChannel;
      // console.log(this.channels);
    });
  }


  async loadCurrentChannel() {


    if (this.currentChannelId) {

      let collChannel = collection(this.firebase, `channel/${this.currentChannelId}/thread`);
      let channel$ = collectionData(collChannel);

      channel$.subscribe((loadChannel) => {
        this.currentChannel = loadChannel;
        // console.log(this.currentChannel);
      });
    }

  }

  async loadloggedInUser() {

    const docRef = doc(this.firebase, `users/${this.loggedInUserId}`);
    const docSnap = await getDoc(docRef);
    this.loggedInUser = docSnap.data();

    // console.log(this.loggedInUser);
  }

  async loadFirebaseUser(userId) {
    let userName: any;
    const docRef = doc(this.firebase, `users/${userId}`);
    const docSnap = await getDoc(docRef);
    userName = docSnap.data();

    console.log(userName);

  }

}
