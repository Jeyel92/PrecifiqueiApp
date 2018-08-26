import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OqueComponent } from './oque.component';

describe('OqueComponent', () => {
  let component: OqueComponent;
  let fixture: ComponentFixture<OqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
