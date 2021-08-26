import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlidetoggleComponent } from './slidetoggle.component';

describe('SlidetoggleComponent', () => {
  let component: SlidetoggleComponent;
  let fixture: ComponentFixture<SlidetoggleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
