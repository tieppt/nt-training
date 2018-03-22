import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpNtComponent } from './http-nt.component';

describe('HttpNtComponent', () => {
  let component: HttpNtComponent;
  let fixture: ComponentFixture<HttpNtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpNtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpNtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
