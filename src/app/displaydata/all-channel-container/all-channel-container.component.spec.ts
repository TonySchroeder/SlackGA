import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChannelContainerComponent } from './all-channel-container.component';

describe('AllChannelContainerComponent', () => {
  let component: AllChannelContainerComponent;
  let fixture: ComponentFixture<AllChannelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllChannelContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllChannelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
