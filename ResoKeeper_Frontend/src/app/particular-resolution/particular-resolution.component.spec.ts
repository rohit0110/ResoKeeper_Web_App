import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularResolutionComponent } from './particular-resolution.component';

describe('ParticularResolutionComponent', () => {
  let component: ParticularResolutionComponent;
  let fixture: ComponentFixture<ParticularResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
