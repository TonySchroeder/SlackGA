import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteThreadComponent } from './dialog-delete-thread.component';

describe('DialogDeleteThreadComponent', () => {
  let component: DialogDeleteThreadComponent;
  let fixture: ComponentFixture<DialogDeleteThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteThreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
