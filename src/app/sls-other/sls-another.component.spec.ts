/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlsAnotherComponent } from './sls-another.component';

describe('SlsAnotherComponent', () => {
  let component: SlsAnotherComponent;
  let fixture: ComponentFixture<SlsAnotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlsAnotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlsAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
