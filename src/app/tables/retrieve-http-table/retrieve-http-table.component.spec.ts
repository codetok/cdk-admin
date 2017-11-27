import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveHttpTableComponent } from './retrieve-http-table.component';

describe('RetrieveHttpTableComponent', () => {
  let component: RetrieveHttpTableComponent;
  let fixture: ComponentFixture<RetrieveHttpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveHttpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveHttpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
