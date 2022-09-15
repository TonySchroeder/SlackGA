import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { addDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { Channel } from 'src/app/models/channel.class';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dialog-add-channel',
  templateUrl: './dialog-add-channel.component.html',
  styleUrls: ['./dialog-add-channel.component.scss']
})
export class DialogAddChannelComponent implements OnInit {

  channel: Channel = new Channel;
  buttonActivat: boolean = false;
  channelName: string = '';
  ChannelDescription: string = '';
  displayProzessBar: boolean = false;


  constructor(
    public firebase: FirebaseService,
    public dialogRef: MatDialogRef<DialogAddChannelComponent>
  ) { }


  ngOnInit(): void {

  }


  async savechannel() {
    this.displayProzessBar = true;
    this.channel.channelName = '# ' + this.channelName;
    this.channel.ChannelDescription = this.ChannelDescription;
    this.channel.creatorUser = this.firebase.loggedInUserId;
    let docRef = await addDoc(this.firebase.collChannel, { channel: this.channel.toJson() })
    this.displayProzessBar = false;
    console.log("Document written with ID: ", docRef.id);
    await updateDoc(doc(this.firebase.collChannel, docRef.id), { channel: docRef.id });
    this.closeDialog();
  }


  closeDialog() {
    this.dialogRef.close();
  }


}
