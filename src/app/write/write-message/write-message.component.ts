import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { Message } from 'src/app/models/message.class';
import { FirebaseService } from '../../service/firebase.service';
import { Output, EventEmitter } from '@angular/core';
import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
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
          ['image'],                         // link and image, video
        ],
      },

    }
}

  ngOnInit(): void {
  
  }

  async saveAnswerInFirestore() {
    this.newItemEvent.emit(this.messageText);
    this.messageText = '';
  }



  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15) + "px";
  }

}
