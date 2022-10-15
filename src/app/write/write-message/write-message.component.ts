import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import { Message } from 'src/app/models/message.class';
import { FirebaseService } from '../../service/firebase.service';
//import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
// import 'quill-emoji/dist/quill-emoji.js'
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

  //editor: Quill = new Quill('#editor');

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
    /*
    let toolbarOptions = [
      ['bold', 'italic'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'underline', 'blockquote', 'code-block'],
      ['image', 'video'],
    ];

    // Quill configuration
    let options = {
      modules: {
        blotFormatter: {
          // empty object for default behaviour.
        },
        toolbar: toolbarOptions
      },
      placeholder: "Insert your message here...",
      readOnly: false,
      theme: 'snow'
    };

    // The quill instance
    let editor = new Quill('#editor', options);

    $(document).on('click', '#submit', function() {
      $(this.message.messageText).html(editor.root.innerHTML);
    });*/
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
