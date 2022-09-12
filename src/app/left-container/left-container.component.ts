import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddChannelComponent } from '../dialog/dialog-add-channel/dialog-add-channel.component';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {

  displayAddPanle1 = false;
  displayAddPanle2 = false;
  displayAddPanle3 = false;


  animal: string;
  name: string;

  constructor(public dialog: MatDialog, public firebase : FirebaseService) { }

  ngOnInit(): void {
  this.firebase.loadChannels();
  }

  openDialog(): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DialogAddChannelComponent, {
      maxWidth: '520px',

      // data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

