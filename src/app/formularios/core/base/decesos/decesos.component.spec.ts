import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecesosComponent } from './decesos.component';

describe('DecesosComponent', () => {
  let component: DecesosComponent;
  let fixture: ComponentFixture<DecesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
