import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerPreviewComponent } from './spinner-preview.component';

describe('SpinnerPreviewComponent', () => {
  let component: SpinnerPreviewComponent;
  let fixture: ComponentFixture<SpinnerPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
