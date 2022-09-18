import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  constructor(public store: FirebaseService, private scroller: ViewportScroller) {
  }

  ngOnInit(): void {
    // this.goToBottom();
    // this.scroller.scrollToAnchor("anger");
  }


  // goToBottom(){
  //   setTimeout(() => {
  //     window.scrollTo(0, document.body.scrollHeight);
  //   }, 500);

  // }

}
