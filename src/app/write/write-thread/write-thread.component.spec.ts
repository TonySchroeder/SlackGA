import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteThreadComponent } from './write-thread.component';

describe('WriteThreadComponent', () => {
  let component: WriteThreadComponent;
  let fixture: ComponentFixture<WriteThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteThreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
