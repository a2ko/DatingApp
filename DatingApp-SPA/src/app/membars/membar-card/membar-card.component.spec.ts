/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MembarCardComponent } from './membar-card.component';

describe('MembarCardComponent', () => {
  let component: MembarCardComponent;
  let fixture: ComponentFixture<MembarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
