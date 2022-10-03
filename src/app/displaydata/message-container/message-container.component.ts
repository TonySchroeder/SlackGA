import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
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
  messageToEdit:number;

  constructor(public store: FirebaseService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }


editMessage(index){
  this.messageToEdit = index;

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
