import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FirebaseService } from '../service/firebase.service';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Message } from '../models/message.class';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})

export class MainContainerComponent implements OnInit  {

  message: Message = new Message;
  messageText: string = '';
  writeContainerHeight: number;
  channelName: any;





  constructor(public store: FirebaseService, public firebase: Firestore) { }


  async ngOnInit() {

  }


  loadChannelName(channelId: string) {
    if (this.store.channels) {
      this.channelName = this.filterData(channelId);
      return this.channelName = this.channelName[0].channel.channelName;
    }
  }


  filterData(channelId: string) {
    return this.store.channels.filter(object => {
      return object['channelId'] == channelId;
    });
  }


  addItem(newItem: string) {
    this.messageText = newItem;
    if (this.store.currentChannelId) {
      this.saveThreadInFirestore();
    } else if (this.store.currentUserMessageId) {
      this.saveMessageInFirestore();
    }
  }



  async saveThreadInFirestore() {
    this.message.messageText = this.messageText;
    this.messageText = '';
    this.message.usersId = this.store.loggedInUserId;
    let docRef = await addDoc(this.store.collThread, { thread: this.message.toJson() })
    await updateDoc(doc(this.store.collThread, docRef.id), { channelId: this.store.currentChannelId });
    await updateDoc(doc(this.store.collThread, docRef.id), { currentThreadId: docRef.id });
  }


  async saveMessageInFirestore() {
    this.message.messageText = this.messageText;
    this.messageText = '';
    this.message.usersId = this.store.loggedInUserId;
    let docRef = await addDoc(this.store.collMessages, { message: this.message.toJson() })
    await updateDoc(doc(this.store.collMessages, docRef.id), { currentMessageId: docRef.id });
    await updateDoc(doc(this.store.collMessages, docRef.id), { autorUser: this.store.loggedInUserId });
    await updateDoc(doc(this.store.collMessages, docRef.id), { interlocutor: [this.store.currentUserMessageId, this.store.loggedInUserId]});
  }

  // ngAfterViewInit() {
  //   this.writeContainerHeight = this.myIdentifier.nativeElement.offsetHeight;
  //   console.log('Height: ' + this.writeContainerHeight);
  // }


  // setHeight() {
  //   let heightStyle = { 'height': `calc(100vh - (64px + 48px + ${this.writeContainerHeight}px))` };
  //   return heightStyle;
  // }


  // @ViewChild('myIdentifier')
  // myIdentifier: ElementRef;

  // ngAfterViewInit() {
  //   let width = this.myIdentifier.nativeElement.offsetWidth;
  //   let height = this.myIdentifier.nativeElement.offsetHeight;

  //   console.log('Width:' + width);
  //   console.log('Height: ' + height);
  // }

  // @ViewChild('myIdentifier')
  // myIdentifier: ElementRef;

}
