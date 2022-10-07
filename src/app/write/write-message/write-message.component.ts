import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { Message } from 'src/app/models/message.class';
import { FirebaseService } from '../../service/firebase.service';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import 'quill-emoji/dist/quill-emoji.js'

import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {

  message: Message = new Message;
  messageText: string = '';
  // interlocutor: string[] = [this.store.currentUserMessageId, this.store.loggedInUserId];
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
          ['image', 'video'],                         // link and image, video
        ],
      },
      
    }
  }

  ngOnInit(): void {
  }

  async saveAnswerInFirestore() {
    this.message.messageText = this.messageText;
    this.messageText = '';

    let docRef = await addDoc(this.store.collMessages, { message: this.message.toJson() })
    // console.log("Answer written with ID: ", docRef.id);
    await updateDoc(doc(this.store.collMessages, docRef.id), { currentMessageId: docRef.id });
    await updateDoc(doc(this.store.collMessages, docRef.id), { autorUser: this.store.loggedInUserId });
    await updateDoc(doc(this.store.collMessages, docRef.id), { interlocutor: [this.store.currentUserMessageId, this.store.loggedInUserId]});
  }



  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15) + "px";
  }

}
