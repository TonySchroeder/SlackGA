import { Component, OnInit } from '@angular/core';
import { Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.scss']
})
export class RightContainerComponent implements OnInit {

  constructor(public firestore: FirebaseService, public firebase: Firestore) { }

  ngOnInit(): void {
  }



  closeSideBar(){

    const loadUserSideBar = doc(
      this.firebase,
        `users/${this.firestore.loggedInUserId}`
      );
      updateDoc(loadUserSideBar, { openSideBar: false });
      this.firestore.loggedUserLoadSideBar();

  }

}
