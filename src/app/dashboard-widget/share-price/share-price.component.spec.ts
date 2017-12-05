import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePriceComponent } from './share-price.component';

describe('SharePriceComponent', () => {
  let component: SharePriceComponent;
  let fixture: ComponentFixture<SharePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
