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


  deleteConfirm() {
    deleteDoc(doc(this.store.collThread, this.threadId));
    this.dialogRef.close();
  }
}
