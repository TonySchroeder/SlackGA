import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { doc, updateDoc } from 'firebase/firestore';
import { DialogDeleteAnswerComponent } from 'src/app/dialog/dialog-delete-answer/dialog-delete-answer.component';
import { DialogDeleteThreadComponent } from 'src/app/dialog/dialog-delete-thread/dialog-delete-thread.component';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss']
})
export class ThreadContainerComponent implements OnInit {

  public displayEditMenu;
  messageToEdit: any;

  constructor(
    public dialog: MatDialog,
    public store: FirebaseService,
    public firebase: Firestore) {
  }

  ngOnInit(): void {
  }


  editMessage(index) {
    this.messageToEdit = index;
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
