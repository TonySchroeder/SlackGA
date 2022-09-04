import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.scss']
})
export class LeftContainerComponent implements OnInit {

  showFiller = true;
  displayAddPanle1 = false;
  displayAddPanle2 = false;
  displayAddPanle3 = false;
  panelOpenState = false;
  step = 0;
  serachThing = '';


  constructor() { }

  ngOnInit(): void {
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onKeyDownEvent(event: any) {
    this.searchSamething();
  }

  searchSamething(){

  }

}
