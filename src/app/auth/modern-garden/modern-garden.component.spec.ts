import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernGardenComponent } from './modern-garden.component';

describe('ModernGardenComponent', () => {
  let component: ModernGardenComponent;
  let fixture: ComponentFixture<ModernGardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernGardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
