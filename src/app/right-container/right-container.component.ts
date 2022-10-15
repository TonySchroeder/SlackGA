import { Component, OnInit } from '@angular/core';
import { Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, doc } from 'firebase/firestore';
import { Message } from '../models/message.class';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnInit {

  message: Message = new Message;
  messageText: string = '';

  constructor(public store: FirebaseService, public firebase: Firestore) { }

  ngOnInit(): void {
  }


  closeSideBar() {

    const loadUserSideBar = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUserSideBar, { openSideBar: false });
    this.store.loggedUserLoadSideBar();

  }

  addItem(newItem: string) {
    this.messageText = newItem;
    this.saveAnswerInFirestore();
  }



  async saveAnswerInFirestore() {
    this.message.messageText = this.messageText;
    this.messageText = '';
    this.message.usersId = this.store.loggedInUserId;
    // this.message.channelId = this.store.currentChannelIdForThread;
    // this.message.threadId = this.store.currentThreadId;

    let docRef = await addDoc(this.store.collAnswers, { answer: this.message.toJson() })
    // console.log("Answer written with ID: ", docRef.id);
    await updateDoc(doc(this.store.collAnswers, docRef.id), { threadId: this.store.currentThreadId });
    await updateDoc(doc(this.store.collAnswers, docRef.id), { currentAnswerId: docRef.id });

  }

}
