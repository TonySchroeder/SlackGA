import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteMessageComponent } from 'src/app/dialog/dialog-delete-message/dialog-delete-message.component';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  constructor(public store: FirebaseService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  openDialog(messageId): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogDeleteMessageComponent, {
      maxWidth: '520px',
    });
    dialogRef.componentInstance.messageId = messageId;
  }

}
