import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var width = this.myIdentifier.nativeElement.offsetWidth;
    var height = this.myIdentifier.nativeElement.offsetHeight;

    console.log('Width:' + width);
    console.log('Height: ' + height);
  }

  @ViewChild('myIdentifier')
  myIdentifier: ElementRef;

}
