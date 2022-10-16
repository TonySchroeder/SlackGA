import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { doc, updateDoc } from 'firebase/firestore';
import { DialogDeleteAnswerComponent } from 'src/app/dialog/dialog-delete-answer/dialog-delete-answer.component';
import { DialogDeleteThreadComponent } from 'src/app/dialog/dialog-delete-thread/dialog-delete-thread.component';
import { FirebaseService } from '../../service/firebase.service';
import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss']
})
export class ThreadContainerComponent implements OnInit {

  displayEditMenu;
  displayAnswerEditMenu;
  messageToEdit: any;
  answerToEdit: any;
  modules = {};

  constructor(
    public dialog: MatDialog,
    public store: FirebaseService,
    public firebase: Firestore) {
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


  editMessage(index) {
    this.messageToEdit = index;
    this.answerToEdit = '';
    if (!index) {
      this.store.loadThreads();
    }
  }


  editAnswerMessage(index) {
    this.answerToEdit = index;
    this.messageToEdit = '';
    if (!index) {
      this.store.loadAnswers();
    }
  }


  async saveEditMessage(currentThreadId: string) {

    const loadMessage = doc(
      this.firebase,
      `threads/${currentThreadId}`
    );
    let editMessage = this.transform(this.store.threads, currentThreadId)
    await updateDoc(loadMessage, { thread: editMessage });
    await this.store.loadThreads();
    this.messageToEdit = '';
  }



  transform(value: any, filterString: any): any {
    if (value && filterString) {
      let currentMessages;
      for (const thread of value) {
        if (thread['currentThreadId'] === filterString) {
          currentMessages = thread.thread
        }
      }
      return currentMessages;
    }
  }


  async saveEditAnswer(currentAnswerId: string) {

    const loadMessage = doc(
      this.firebase,
      `answers/${currentAnswerId}`
    );
    let editMessage = this.transformAnswer(this.store.answers, currentAnswerId)
    await updateDoc(loadMessage, { answer: editMessage });
    await this.store.loadAnswers();
    this.answerToEdit = '';
  }



  transformAnswer(value: any, filterString: any): any {
    if (value && filterString) {
      let currentMessages;
      for (const answer of value) {
        if (answer['currentAnswerId'] === filterString) {
          currentMessages = answer.answer
        }
      }
      return currentMessages;
    }
  }

  openThreadDialog(threadId: string): void {
    // event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteThreadComponent, {
      maxWidth: '520px',
      restoreFocus: false
    });
    dialogRef.componentInstance.threadId = threadId;
  }

  openAnswerDialog(answerId: string): void {
    // event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteAnswerComponent, {
      maxWidth: '520px',
      restoreFocus: false
    });
    dialogRef.componentInstance.answerId = answerId;
  }


}
