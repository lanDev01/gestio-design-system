import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdsButtonComponent } from './gds-button.component';

describe('GdsButtonComponent', () => {
  let component: GdsButtonComponent;
  let fixture: ComponentFixture<GdsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
