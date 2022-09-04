import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  serachThing = '';


  onKeyDownEvent(event: any) {
    this.searchSamething();
  }

  searchSamething(){

  }
}
