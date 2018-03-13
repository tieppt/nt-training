import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtIfElseComponent } from './nt-if-else.component';

describe('NtIfElseComponent', () => {
  let component: NtIfElseComponent;
  let fixture: ComponentFixture<NtIfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtIfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
