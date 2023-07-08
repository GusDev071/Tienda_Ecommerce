import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcorreoComponent } from './vcorreo.component';

describe('VcorreoComponent', () => {
  let component: VcorreoComponent;
  let fixture: ComponentFixture<VcorreoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VcorreoComponent]
    });
    fixture = TestBed.createComponent(VcorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
