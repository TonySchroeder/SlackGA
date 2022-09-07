import { Component, OnInit } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { collection, Firestore } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slack',
  templateUrl: './slack.component.html',
  styleUrls: ['./slack.component.scss']
})
export class SlackComponent implements OnInit {


  serachThing = '';
  coll$: Observable<any>;
  message: any = '';




  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'user');
    this.coll$ = collectionData(coll);

    this.coll$.subscribe((newMessage) => {
      this.message = newMessage;
      console.log(this.message);
    });
  }

  ngOnInit(): void {
  }




  onKeyDownEvent(event: any) {
    this.searchSamething();
  }

  searchSamething() {

  }

}
