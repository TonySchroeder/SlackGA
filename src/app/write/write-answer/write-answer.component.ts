import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { Message } from 'src/app/models/message.class';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-write-answer',
  templateUrl: './write-answer.component.html',
  styleUrls: ['./write-answer.component.scss']
})
export class WriteAnswerComponent implements OnInit {

  message: Message = new Message;
  messagetext: string = '';

  constructor(public store: FirebaseService, public firestore: Firestore) { }

  ngOnInit(): void {
  }




  async saveAnswerInFirestore() {
    this.message.messagetext = this.messagetext;
    this.messagetext = '';
    this.message.usersId = this.store.loggedInUserId;
    this.message.channelId = this.store.currentThread[0].cannelId;
    this.message.threadId = this.store.currentThreadId;

    let collAnswer = collection(this.firestore, `channel/${this.store.currentThread[0].cannelId}/thread/${this.store.currentThreadId}/answers`);
    let docRef = await addDoc(collAnswer, { answer: this.message.toJson() })
    console.log("Thread written with ID: ", docRef.id);
    await updateDoc(doc(collAnswer, docRef.id), { answerId: docRef.id });



  }







  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15)+"px";
  }
}
