import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIfForComponent } from './body-if-for.component';

describe('BodyIfForComponent', () => {
  let component: BodyIfForComponent;
  let fixture: ComponentFixture<BodyIfForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyIfForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIfForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
