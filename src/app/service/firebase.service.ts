import { Injectable, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, collectionGroup } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit {

  coll$: Observable<any>;
  message: any = '';
  channelId: any;
  collGroup: Observable<any>;

  constructor(public firestore: Firestore,  private route: ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
    

  }



loadFirebase(){
    this.coll$.subscribe((newMessage) => {
      this.message = newMessage;
      console.log(this.message);
    });
}



}
