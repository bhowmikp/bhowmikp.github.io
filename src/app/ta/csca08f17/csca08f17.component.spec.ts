import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csca08f17Component } from './csca08f17.component';

describe('Csca08f17Component', () => {
  let component: Csca08f17Component;
  let fixture: ComponentFixture<Csca08f17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csca08f17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csca08f17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
