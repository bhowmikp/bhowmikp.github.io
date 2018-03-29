import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csca48w17Component } from './csca48w17.component';

describe('Csca48w17Component', () => {
  let component: Csca48w17Component;
  let fixture: ComponentFixture<Csca48w17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csca48w17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csca48w17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
