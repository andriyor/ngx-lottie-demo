import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSpinSecondComponent } from './button-spin-second.component';

describe('ButtonSpinSecondComponent', () => {
  let component: ButtonSpinSecondComponent;
  let fixture: ComponentFixture<ButtonSpinSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSpinSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSpinSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
