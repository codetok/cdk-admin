import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

describe('TemplateDrivenFormsComponent', () => {
  let component: TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
