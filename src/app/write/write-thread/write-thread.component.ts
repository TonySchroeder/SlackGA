import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { Thread } from '../../models/thread.class';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-write-thread',
  templateUrl: './write-thread.component.html',
  styleUrls: ['./write-thread.component.scss']
})
export class WriteThreadComponent implements OnInit {

  thread: Thread = new Thread;
  threadValue: string = '';

  constructor(public store: FirebaseService, public firestore: Firestore) { }

  ngOnInit(): void {
  }




  async saveThreadInFirestore() {
    this.thread.firstMessage = this.threadValue;
    this.threadValue = '';
    this.thread.usersId = this.store.loggedInUserId;

    let docRef = await addDoc(this.store.collThread, { thread: this.thread.toJson() })
    // console.log("Thread written with ID: ", docRef.id);
    await updateDoc(doc(this.store.collThread, docRef.id), { channelId: this.store.currentChannelId });
    await updateDoc(doc(this.store.collThread, docRef.id), { currentThreadId: docRef.id });
  }



  autoGrowTextZone(e) {
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight + 15)+"px";
  }
}
