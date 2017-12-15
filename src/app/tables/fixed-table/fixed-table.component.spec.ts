import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTableComponent } from './fixed-table.component';

describe('FixedTableComponent', () => {
  let component: FixedTableComponent;
  let fixture: ComponentFixture<FixedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
