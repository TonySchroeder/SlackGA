import { Component, OnInit, ViewChild } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { doc, updateDoc } from 'firebase/firestore';
import { delay, timeout } from 'rxjs';
import { DialogDeleteMessageComponent } from 'src/app/dialog/dialog-delete-message/dialog-delete-message.component';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  public displayEditMenu;
  messageToEdit: any;

  constructor(public store: FirebaseService,
    public dialog: MatDialog,
    public firebase: Firestore
  ) {
  }

  ngOnInit(): void {

  }


  editMessage(index) {
    this.messageToEdit = index;
  }


  async saveEditMessage(currentMessageId: string) {
    const loadMessage = doc(
      this.firebase,
      `messages/${currentMessageId}`
    );
    let editMessage = this.transform(this.store.messages, currentMessageId)
    await updateDoc(loadMessage, { message: editMessage });
    await this.store.loadMessages();
    this.messageToEdit = '';
  }



  transform(value: any, filterString: any): any {
    if (value && filterString) {
      if (filterString.lenght === 0 || filterString === '') {
        return undefined;
      }
      let currentMessages;
      for (const message of value) {
        if (message['currentMessageId'] === filterString) {
          currentMessages = message.message
        }
      }
      return currentMessages;
    }
  }


  openDialog(messageId): void {
    // event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteMessageComponent, {
      maxWidth: '520px',
      restoreFocus: false
    });
    dialogRef.componentInstance.messageId = messageId;
  }

}
