import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { deleteDoc, doc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dialog-delete-message',
  templateUrl: './dialog-delete-message.component.html',
  styleUrls: ['./dialog-delete-message.component.scss']
})
export class DialogDeleteMessageComponent implements OnInit {

  messageId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogDeleteMessageComponent>,
    public store: FirebaseService,
    public firebase: Firestore) { }

  ngOnInit(): void {
    console.log(this.messageId);

  }


  deleteConfirm() {
        this.dialogRef.close();
    deleteDoc(doc(this.store.collMessages, this.messageId));
  }
}
