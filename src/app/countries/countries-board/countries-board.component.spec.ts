import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesBoardComponent } from './countries-board.component';

describe('CountriesBoardComponent', () => {
  let component: CountriesBoardComponent;
  let fixture: ComponentFixture<CountriesBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
