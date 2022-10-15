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
  channelName: any;





  constructor(public store: FirebaseService, public firebase: Firestore) { }


  async ngOnInit() {

  }


  loadChannelName(channelId: string) {
    if(this.store.channels){
      this.channelName = this.filterData(channelId);
      return this.channelName = this.channelName[0].channel.channelName;
    }
  }


  filterData(channelId: string) {
    return this.store.channels.filter(object => {
      return object['channelId'] == channelId;
    });
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
