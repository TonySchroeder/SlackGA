import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // logged in user variable
  loggedInUserId: string = 'e1ryqoWxpbFiYNHAyvZ9';
  loggedInUser: any;
  openRightNav: boolean = false;
  currentChannelId: string = '';
  currentChannelIdForThread: string = '';
  currentThreadId: string = '';


  // users variable
  collUser: any;
  user$: Observable<any>;
  users: any;

  // channels variable
  collChannel: any;
  channel$: Observable<any>;
  channels: any;

  // threads variable
  collThread: any;
  thread$: Observable<any>;
  threads: any;

  // answers variable
  collAnswers: any;
  answer$: Observable<any>;
  answers: any;


  // // selected channel variable
  // currentChannelName: string = '';

  // // selected thread variable
  // currentThreadName: string = '';
  // currentThreadFirstMessage: any;

  // user id for message container
  currentUserMessageId: string = '';

  // // threads for main component
  // currentChannel: any;

  // // answers for right component
  // currentThread: any;



  messageValue = '';



  /**
   * load channels and users from firebase
   *
   * @param firebase import from firebase
   */
  constructor(public firebase: Firestore) {


    this.collUser = collection(firebase, 'users');
    this.user$ = collectionData(this.collUser);

    this.collChannel = collection(firebase, 'channel');
    this.channel$ = collectionData(this.collChannel);

    this.collThread = collection(firebase, 'threads');
    this.thread$ = collectionData(this.collThread);

    this.collAnswers = collection(firebase, 'answers');
    this.answer$ = collectionData(this.collAnswers);
  }


  /**
   * load all users
   */
  loadUser() {
    this.user$.subscribe((loadUser) => {
      this.users = loadUser;
      // console.log('users: ', this.users);
    });
  }


  /**
   * load all channels
   */
  loadChannels() {
    this.channel$.subscribe((loadChannel) => {
      this.channels = loadChannel;
      // console.log('channels: ', this.channels);
    });
  }


  /**
   * load all threads
   */
  loadThreads() {
    this.thread$.subscribe((loadThread) => {
      this.threads = loadThread;
      // console.log('threads: ', this.threads);
    });
  }


  /**
   * load all answers
   */
   loadAnswers() {
    this.answer$.subscribe((loadAnswer) => {
      this.answers = loadAnswer;
      // console.log('answers: ', this.answers);
    });
  }


  /**
   * load the logged in user
   */
  async loadloggedInUser() {

    const docRef = doc(this.firebase, `users/${this.loggedInUserId}`);
    const docSnap = await getDoc(docRef);
    this.loggedInUser = docSnap.data();

    // console.log('user: ', this.loggedInUser);
  }


  /**
   * check is right sidebar open or not
   */
  async loggedUserLoadSideBar() {
    await this.loadloggedInUser();
    this.openRightNav = this.loggedInUser.openSideBar;

  }


  /**
   * check the channel to load
   */
  async loggedUserLoadChannelId() {
    await this.loadloggedInUser();
    this.currentChannelId = this.loggedInUser.currentChannelId;
    this.currentChannelIdForThread = this.loggedInUser.currentChannelIdForThread;
    this.currentThreadId = this.loggedInUser.currentThreadId;
    }


}
