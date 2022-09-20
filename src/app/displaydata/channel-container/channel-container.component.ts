import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, getDoc } from 'firebase/firestore';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-channel-container',
  templateUrl: './channel-container.component.html',
  styleUrls: ['./channel-container.component.scss']
})
export class ChannelContainerComponent implements OnInit {

  threadUser: string;


  constructor(public firestore: FirebaseService, public firebase: Firestore) {

  }

  ngOnInit(): void {

  }

 async loadThreadUser(userId: string) {
    let userName: any;
    let userData:any;
    const docRef = doc(this.firebase, `users/${userId}`);
    const docSnap = await getDoc(docRef);
    userData = docSnap.data();
    userName = userData.userName;

    // console.log(userName);


    return userId;

    // const querySnapshot = await getDoc(docRef);
    // this.selectedUser = querySnapshot.data();
    // this.user = new User(this.selectedUser.user);



  }




}
