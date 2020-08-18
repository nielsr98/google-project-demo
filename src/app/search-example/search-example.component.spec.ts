import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExampleComponent } from './search-example.component';

describe('SearchExampleComponent', () => {
  let component: SearchExampleComponent;
  let fixture: ComponentFixture<SearchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
