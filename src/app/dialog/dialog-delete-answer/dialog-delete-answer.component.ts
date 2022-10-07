import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { deleteDoc, doc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dialog-delete-answer',
  templateUrl: './dialog-delete-answer.component.html',
  styleUrls: ['./dialog-delete-answer.component.scss']
})
export class DialogDeleteAnswerComponent implements OnInit {

  answerId: string = '';



  constructor(public dialogRef: MatDialogRef<DialogDeleteAnswerComponent>,
    public store: FirebaseService,
    public firebase: Firestore) { }


  ngOnInit(): void {

  }


  async deleteConfirm() {
    await deleteDoc(doc(this.store.collAnswers, this.answerId));
    this.dialogRef.close();
  }


}
