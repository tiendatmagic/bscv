import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifymodalComponent } from './notifymodal.component';

describe('NotifymodalComponent', () => {
  let component: NotifymodalComponent;
  let fixture: ComponentFixture<NotifymodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotifymodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifymodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
