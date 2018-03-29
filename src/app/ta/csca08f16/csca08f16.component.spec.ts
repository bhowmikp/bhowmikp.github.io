import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Csca08f16Component } from './csca08f16.component';

describe('Csca08f16Component', () => {
  let component: Csca08f16Component;
  let fixture: ComponentFixture<Csca08f16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csca08f16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Csca08f16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
