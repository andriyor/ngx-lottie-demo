import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSpinFirstComponent } from './button-spin-first.component';

describe('ButtonSpinFirstComponent', () => {
  let component: ButtonSpinFirstComponent;
  let fixture: ComponentFixture<ButtonSpinFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSpinFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSpinFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
