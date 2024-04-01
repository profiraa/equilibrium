import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPerspectiveComponent } from './personal-perspective.component';

describe('PersonalPerspectiveComponent', () => {
  let component: PersonalPerspectiveComponent;
  let fixture: ComponentFixture<PersonalPerspectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalPerspectiveComponent]
    });
    fixture = TestBed.createComponent(PersonalPerspectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
