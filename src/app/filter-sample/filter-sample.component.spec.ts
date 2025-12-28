import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSampleComponent } from './filter-sample.component';

describe('FilterSampleComponent', () => {
  let component: FilterSampleComponent;
  let fixture: ComponentFixture<FilterSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterSampleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
