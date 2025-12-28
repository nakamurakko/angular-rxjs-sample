import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSampleComponent } from './map-sample.component';

describe('MapSampleComponent', () => {
  let component: MapSampleComponent;
  let fixture: ComponentFixture<MapSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MapSampleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
