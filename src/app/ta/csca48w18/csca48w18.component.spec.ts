import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csca48w18Component } from './csca48w18.component';

describe('Csca48w18Component', () => {
  let component: Csca48w18Component;
  let fixture: ComponentFixture<Csca48w18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csca48w18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csca48w18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
