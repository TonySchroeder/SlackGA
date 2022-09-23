import { Component, HostListener } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serachThing = '';
  sideMode: MatDrawerMode = 'side';
  screenWidth: any;
  openLeftNav: boolean = true;


  constructor(public firestore: FirebaseService) {

    this.firestore.loggedUserLoadSideBar();
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
