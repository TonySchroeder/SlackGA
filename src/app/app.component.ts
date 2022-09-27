import { Component, HostListener, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
