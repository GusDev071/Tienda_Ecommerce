import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsaComponent } from './electronicsa.component';

describe('ElectronicsaComponent', () => {
  let component: ElectronicsaComponent;
  let fixture: ComponentFixture<ElectronicsaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicsaComponent]
    });
    fixture = TestBed.createComponent(ElectronicsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
