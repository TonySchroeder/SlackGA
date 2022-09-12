import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serachThing = '';


  constructor() {
  }



  onKeyDownEvent(event: any) {
    this.searchSamething();
  }

  searchSamething() {

  }
}
