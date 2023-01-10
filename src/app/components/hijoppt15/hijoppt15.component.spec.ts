import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijoppt15Component } from './hijoppt15.component';

describe('Hijoppt15Component', () => {
  let component: Hijoppt15Component;
  let fixture: ComponentFixture<Hijoppt15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hijoppt15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijoppt15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
