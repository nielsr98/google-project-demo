import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesExampleComponent } from './images-example.component';

describe('ImagesExampleComponent', () => {
  let component: ImagesExampleComponent;
  let fixture: ComponentFixture<ImagesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
