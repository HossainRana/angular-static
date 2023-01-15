import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAcordComponent } from './landing-acord.component';

describe('LandingAcordComponent', () => {
  let component: LandingAcordComponent;
  let fixture: ComponentFixture<LandingAcordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingAcordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingAcordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
