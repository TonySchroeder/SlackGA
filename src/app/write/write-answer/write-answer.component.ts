import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { Answer } from 'src/app/models/answer.class';
import { FirebaseService } from 'src/app/service/firebase.service';
import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-write-answer',
  templateUrl: './write-answer.component.html',
  styleUrls: ['./write-answer.component.scss']
})
export class WriteAnswerComponent implements OnInit {

  message: Answer = new Answer;
  messageText: string = '';
  modules = {};

  constructor(public store: FirebaseService, public firestore: Firestore) {
      
    this.modules = {
      blotFormatter: {
        // empty object for default behaviour.
      },
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          ['image'],                         // link and image, video
        ],
      },
      
    }
   }

  ngOnInit(): void {
  }


  async saveAnswerInFirestore() {
    this.message.messageText = this.messageText;
    this.messageText = '';
    this.message.usersId = this.store.loggedInUserId;
    this.message.channelId = this.store.currentChannelIdForThread;
    this.message.threadId = this.store.currentThreadId;

    let docRef = await addDoc(this.store.collAnswers, { answer: this.message.toJson() })
    // console.log("Answer written with ID: ", docRef.id);
    await updateDoc(doc(this.store.collAnswers, docRef.id), { threadId: this.store.currentThreadId });
    await updateDoc(doc(this.store.collAnswers, docRef.id), { currentAnswerId: docRef.id });
  }



  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15) + "px";
  }
}
