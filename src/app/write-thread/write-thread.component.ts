import { Component, OnInit } from '@angular/core';
import { addDoc, doc, setDoc } from 'firebase/firestore';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-write-thread',
  templateUrl: './write-thread.component.html',
  styleUrls: ['./write-thread.component.scss']
})
export class WriteThreadComponent implements OnInit {

  constructor(public store: FirebaseService) { }

  ngOnInit(): void {
  }

  async saveThreadInFirestore() {
    this.store.collChannel.add({
      'thread': this.store.threadValue
    });
  }

}
