import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferAndFromSampleComponent } from './defer-and-from-sample.component';

describe('DeferAndFromSampleComponent', () => {
  let component: DeferAndFromSampleComponent;
  let fixture: ComponentFixture<DeferAndFromSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferAndFromSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferAndFromSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
