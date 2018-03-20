import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapContainerComponent } from './tap-container.component';

describe('TapContainerComponent', () => {
  let component: TapContainerComponent;
  let fixture: ComponentFixture<TapContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
