import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IifSampleComponent } from './iif-sample.component';

describe('IifSampleComponent', () => {
  let component: IifSampleComponent;
  let fixture: ComponentFixture<IifSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IifSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IifSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
