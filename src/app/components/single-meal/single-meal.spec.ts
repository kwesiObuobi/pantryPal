import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMeal } from './single-meal';

describe('SingleMeal', () => {
  let component: SingleMeal;
  let fixture: ComponentFixture<SingleMeal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMeal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMeal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
