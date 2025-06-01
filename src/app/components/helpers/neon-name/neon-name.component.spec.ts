import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonNameComponent } from './neon-name.component';

describe('NeonNameComponent', () => {
  let component: NeonNameComponent;
  let fixture: ComponentFixture<NeonNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeonNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
