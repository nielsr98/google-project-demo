import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxExamplesComponent } from './combobox-examples.component';

describe('ComboboxExamplesComponent', () => {
  let component: ComboboxExamplesComponent;
  let fixture: ComponentFixture<ComboboxExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboboxExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
