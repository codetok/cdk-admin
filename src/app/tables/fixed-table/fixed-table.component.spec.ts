import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FixedTableComponent } from './fixed-table.component';

describe('FixedTableComponent', () => {
  let component: FixedTableComponent;
  let fixture: ComponentFixture<FixedTableComponent>;

  beforeEach(waitForAsync(() => {
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
