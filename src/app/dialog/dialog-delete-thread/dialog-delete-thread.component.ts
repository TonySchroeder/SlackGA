import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { deleteDoc, doc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dialog-delete-thread',
  templateUrl: './dialog-delete-thread.component.html',
  styleUrls: ['./dialog-delete-thread.component.scss']
})
export class DialogDeleteThreadComponent implements OnInit {

  threadId: string = '';



  constructor(public dialogRef: MatDialogRef<DialogDeleteThreadComponent>,
    public store: FirebaseService,
    public firebase: Firestore) { }

  ngOnInit(): void {

  }


  async deleteConfirm() {
    // await deleteDoc(doc(this.store.collThread, this.threadId));
    // await this.deleteThreadAnswers()
    // this.dialogRef.close();
  }

  async deleteThreadAnswers() {
    for (const answer of await this.getAllThreadAnswers()) {
      await deleteDoc(doc(this.store.collAnswers, answer['currentAnswerId']));
    }
  }


  getAllThreadAnswers() {
    const answers = [];
    for (const answer of this.store.answers) {
      if (answer['threadId'] === this.threadId) {
        answers.push(answer)
      }
    }
    return answers;
  }


}
