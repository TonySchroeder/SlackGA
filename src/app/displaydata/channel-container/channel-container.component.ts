import { Component, OnInit } from '@angular/core';
import { Firestore, updateDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { doc } from 'firebase/firestore';
import { DialogDeleteThreadComponent } from 'src/app/dialog/dialog-delete-thread/dialog-delete-thread.component';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-channel-container',
  templateUrl: './channel-container.component.html',
  styleUrls: ['./channel-container.component.scss']
})
export class ChannelContainerComponent implements OnInit {

  public displayEditMenu;
  messageToEdit: any;

  constructor(
    public dialog: MatDialog,
    public store: FirebaseService,
    public firebase: Firestore) {
  }

  ngOnInit(): void {
  }



  async setThreadId(threadId: string, channelId: string) {
    const loadUser = doc(
      this.firebase,
      `users/${this.store.loggedInUserId}`
    );
    updateDoc(loadUser, { currentChannelIdForThread: channelId });
    updateDoc(loadUser, { currentThreadId: threadId });
    await this.store.loggedUserLoadChannelId();

    this.openSideBar();
  }


  openSideBar() {
    if (!this.store.openRightNav) {
      const loadUserSideBar = doc(
        this.firebase,
        `users/${this.store.loggedInUserId}`
      );
      updateDoc(loadUserSideBar, { openSideBar: true });
      this.store.loggedUserLoadSideBar();
    }
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


  openDialog(threadId: string): void {
    // event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteThreadComponent, {
      maxWidth: '520px',
      restoreFocus: false
    });
    dialogRef.componentInstance.threadId = threadId;
  }
}
