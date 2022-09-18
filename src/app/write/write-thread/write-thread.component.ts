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
    let collChannel = collection(this.firestore, `channel/${this.store.currentChannelId}/thread`);
    let docRef = await addDoc(collChannel, { message: this.threadValue })
    console.log("Thread written with ID: ", docRef.id);
    await updateDoc(doc(collChannel, docRef.id), { threadId: docRef.id });
  }



  autoGrowTextZone(e) {
    // e.target.style.height = "0px";
    // e.target.style.height = (e.target.scrollHeight + 15)+"px";
  }
}
