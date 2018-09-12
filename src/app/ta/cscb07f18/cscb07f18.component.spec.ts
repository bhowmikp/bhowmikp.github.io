import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cscb07f18Component } from './cscb07f18.component';

describe('Cscb07f18Component', () => {
  let component: Cscb07f18Component;
  let fixture: ComponentFixture<Cscb07f18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cscb07f18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cscb07f18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
