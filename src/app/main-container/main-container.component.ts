import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  writeContainerHeight: number;


  constructor(public firestore: FirebaseService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // let width = this.myIdentifier.nativeElement.offsetWidth;
    this.writeContainerHeight = this.myIdentifier.nativeElement.offsetHeight;



    // console.log('Width:' + width);
    console.log('Height: ' + this.writeContainerHeight);
  }


  setHeight() {
    let heightStyle = { 'height': `calc(100vh - (64px + 48px + ${this.writeContainerHeight}px))` };

    return heightStyle;
  }



  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

}
