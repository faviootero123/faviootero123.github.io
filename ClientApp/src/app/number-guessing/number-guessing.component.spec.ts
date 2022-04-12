import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGuessingComponent } from './number-guessing.component';

describe('NumberGuessingComponent', () => {
  let component: NumberGuessingComponent;
  let fixture: ComponentFixture<NumberGuessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberGuessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGuessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
