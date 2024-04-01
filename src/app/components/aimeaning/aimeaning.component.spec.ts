import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AImeaningComponent } from './aimeaning.component';

describe('AImeaningComponent', () => {
  let component: AImeaningComponent;
  let fixture: ComponentFixture<AImeaningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AImeaningComponent]
    });
    fixture = TestBed.createComponent(AImeaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
