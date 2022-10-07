import { Component, HostListener, OnInit } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { MatDrawerMode } from '@angular/material/sidenav';
import { collection, Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-slack',
  templateUrl: './slack.component.html',
  styleUrls: ['./slack.component.scss']
})
export class SlackComponent implements OnInit {


  serachThing = '';
  sideMode: MatDrawerMode = 'side';
  screenWidth: any;
  openLeftNav: boolean = true;


  constructor(public store: FirebaseService) {

  }


  async ngOnInit() {
    this.store.loggedUserLoadChannelId();
    this.store.loadChannels();
    this.store.loadThreads();
    this.store.loadUser();
    this.store.loadAnswers();
    this.store.loadMessages();
    this.store.loggedUserLoadSideBar();

  }

  onKeyDownEvent(event: any) {
    this.screenWidth = window.innerWidth;
    this.searchSamething();
  }

  searchSamething() {

  }



  /**
  * determine the window width
  */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 799) {
      this.sideMode = 'side';
      this.openLeftNav = true;
    } else if (this.screenWidth < 799) {
      this.sideMode = 'over';
      this.openLeftNav = false;
    }
  }
}
