/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MembarListComponent } from './membar-list.component';

describe('MembarListComponent', () => {
  let component: MembarListComponent;
  let fixture: ComponentFixture<MembarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
