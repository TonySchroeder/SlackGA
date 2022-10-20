import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInitialenComponent } from './user-initialen.component';

describe('UserInitialenComponent', () => {
  let component: UserInitialenComponent;
  let fixture: ComponentFixture<UserInitialenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInitialenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInitialenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
