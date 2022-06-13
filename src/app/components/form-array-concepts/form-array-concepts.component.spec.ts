import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayConceptsComponent } from './form-array-concepts.component';

describe('FormArrayConceptsComponent', () => {
  let component: FormArrayConceptsComponent;
  let fixture: ComponentFixture<FormArrayConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
