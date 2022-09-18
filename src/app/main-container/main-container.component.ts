import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { FirebaseService } from '../service/firebase.service';
import { collection, doc, getDoc } from 'firebase/firestore';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  writeContainerHeight: number;
  collChannel: any;
  channel$: Observable<any>;
  channels: any;





  constructor(public firestore: FirebaseService, public firebase: Firestore) { }


  ngOnInit(): void {
    // this.collChannel = collection(this.firebase, `channel`, `${this.firestore.currentChannelId}`);
    // this.channel$ = collectionData(this.collChannel);
    // this.loadChannels();

    // console.log('id', this.firestore.currentChannelId);

  }


  async loadChannels() {
    // this.channel$.subscribe((newChannel) => {
    //   this.channels = newChannel;
    // });


    // if (this.firestore.currentChannelId) {

    //   const docRef = doc(this.firebase, `channel/${this.firestore.currentChannelId}`);
    //   const querySnapshot = await getDoc(docRef);
    //   this.channels = querySnapshot.data();

    //   console.log(this.channels);
    // }

  }


  // ngAfterViewInit() {
  //   this.writeContainerHeight = this.myIdentifier.nativeElement.offsetHeight;
  //   console.log('Height: ' + this.writeContainerHeight);
  // }


  // setHeight() {
  //   let heightStyle = { 'height': `calc(100vh - (64px + 48px + ${this.writeContainerHeight}px))` };
  //   return heightStyle;
  // }


  // @ViewChild('myIdentifier')
  // myIdentifier: ElementRef;

}
