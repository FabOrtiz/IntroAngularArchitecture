import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPGCalculatorComponent } from './mpgcalculator.component';

describe('MPGCalculatorComponent', () => {
  let component: MPGCalculatorComponent;
  let fixture: ComponentFixture<MPGCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPGCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MPGCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
