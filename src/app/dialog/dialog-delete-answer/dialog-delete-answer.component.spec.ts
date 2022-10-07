import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAnswerComponent } from './dialog-delete-answer.component';

describe('DialogDeleteAnswerComponent', () => {
  let component: DialogDeleteAnswerComponent;
  let fixture: ComponentFixture<DialogDeleteAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
