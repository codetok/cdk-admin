import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingTableComponent } from './sorting-table.component';

describe('SortingTableComponent', () => {
  let component: SortingTableComponent;
  let fixture: ComponentFixture<SortingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
