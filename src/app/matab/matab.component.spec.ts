import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatabComponent } from './matab.component';

describe('MatabComponent', () => {
  let component: MatabComponent;
  let fixture: ComponentFixture<MatabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
