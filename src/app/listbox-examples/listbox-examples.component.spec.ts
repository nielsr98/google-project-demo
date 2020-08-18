import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxExamplesComponent } from './listbox-examples.component';

describe('ListboxExamplesComponent', () => {
  let component: ListboxExamplesComponent;
  let fixture: ComponentFixture<ListboxExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListboxExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
