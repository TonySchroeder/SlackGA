import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  coll$: Observable<any>;
  message: any = '';
  messageValue = '';


  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'user');
    this.coll$ = collectionData(coll);
  }

loadFirebase(){
    this.coll$.subscribe((newMessage) => {
      this.message = newMessage;
      console.log(this.message);
    });
}



}
