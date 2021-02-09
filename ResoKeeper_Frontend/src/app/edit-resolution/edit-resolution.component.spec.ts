import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResolutionComponent } from './edit-resolution.component';

describe('EditResolutionComponent', () => {
  let component: EditResolutionComponent;
  let fixture: ComponentFixture<EditResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
