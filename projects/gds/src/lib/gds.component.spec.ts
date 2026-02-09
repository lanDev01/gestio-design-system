import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdsComponent } from './gds.component';

describe('GdsComponent', () => {
  let component: GdsComponent;
  let fixture: ComponentFixture<GdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
