import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  // logged in user variable
  loggedInUserId: string = 'a1qZMELqRqFh1YsVoIgN';
  loggedInUser: any;
  openRightNav: boolean = false;
  currentChannelId: string = '';
  currentChannelIdForThread: string = '';
  currentThreadId: string = '';
  currentUserMessageId: string = '';

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

  // messages variable
  collMessages: any;
  message$: Observable<any>;
  messages: any;


  messageText:string;


  /**
   * load users, channels, threads, answers and messages from firebase
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

    this.collMessages = collection(firebase, 'messages');
    this.message$ = collectionData(this.collMessages);
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
      this.threads.sort(this.sortFuncThread);
    });
  }


  /**
   * sort the threads by timestamp
   *
   * @param a - first timestamp of the array
   * @param b - next timestamp of the array
   * @returns - sorted thread
   */
  sortFuncThread(a: any, b: any) {
    return a.thread.timestamp - b.thread.timestamp;
    // return (a < b ? -1 : 1);
  }


  /**
   * load all answers
   */
  loadAnswers() {
    this.answer$.subscribe((loadAnswer) => {
      this.answers = loadAnswer;
      // console.log('answers: ', this.answers);
      this.answers.sort(this.sortFuncAnswer);
    });
  }


  /**
   * sort the answers by timestamp
   *
   * @param a - first timestamp of the array
   * @param b - next timestamp of the array
   * @returns - sorted answers
   */
  sortFuncAnswer(a: any, b: any) {
    return a.answer.timestamp - b.answer.timestamp;
  }


  /**
    * load all channels
    */
  loadMessages() {
    this.message$.subscribe((loadMessage) => {
      this.messages = loadMessage;
      // console.log('messages: ', this.messages);
      this.messages.sort(this.sortFuncMessage);
    });
  }


  /**
   * sort the messages by timestamp
   *
   * @param a - first timestamp of the array
   * @param b - next timestamp of the array
   * @returns - sorted messages
   */
  sortFuncMessage(a: any, b: any) {
    return a.message.timestamp - b.message.timestamp;
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
   * check the channel and thread or message to load
   */
  async loggedUserLoadChannelId() {
    await this.loadloggedInUser();
    this.currentChannelId = this.loggedInUser.currentChannelId;
    this.currentChannelIdForThread = this.loggedInUser.currentChannelIdForThread;
    this.currentThreadId = this.loggedInUser.currentThreadId;
    this.currentUserMessageId = this.loggedInUser.currentUserMessageId;
  }


  /**
   *prevents reloading of all threads already loaded
   *
   * @param threads - all threads array
   * @returns - new threads
   */
  trackByThread(threads) {
    return threads.currentThreadId;
  }


  /**
   *prevents reloading of all answers already loaded
   *
   * @param answers - all answers array
   * @returns - new answers
   */
  trackByAnswer(answers) {
    return answers.currentAnswerId;
  }


  /**
   *prevents reloading of all messages already loaded
   *
   * @param messages - all messages array
   * @returns - new messages
   */
  trackByMessage(messages) {
    return messages.currentAnswerId;
  }

}
