import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SharePriceComponent } from './share-price.component';

describe('SharePriceComponent', () => {
  let component: SharePriceComponent;
  let fixture: ComponentFixture<SharePriceComponent>;

  beforeEach(waitForAsync(() => {
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
