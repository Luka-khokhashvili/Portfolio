import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonArtComponent } from './neon-art.component';

describe('NeonArtComponent', () => {
  let component: NeonArtComponent;
  let fixture: ComponentFixture<NeonArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeonArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
