import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctSampleComponent } from './distinct-sample.component';

describe('DistinctSampleComponent', () => {
  let component: DistinctSampleComponent;
  let fixture: ComponentFixture<DistinctSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DistinctSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
