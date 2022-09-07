import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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



  onKeyDownEvent(event: any) {
    this.searchSamething();
  }

  searchSamething() {

  }
}
