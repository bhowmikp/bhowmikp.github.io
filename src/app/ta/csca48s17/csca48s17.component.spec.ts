import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csca48s17Component } from './csca48s17.component';

describe('Csca48s17Component', () => {
  let component: Csca48s17Component;
  let fixture: ComponentFixture<Csca48s17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csca48s17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csca48s17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
