/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlsOtherComponent } from './sls-other.component';

describe('SlsOtherComponent', () => {
  let component: SlsOtherComponent;
  let fixture: ComponentFixture<SlsOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlsOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
