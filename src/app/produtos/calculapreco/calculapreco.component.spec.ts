import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculaprecoComponent } from './calculapreco.component';

describe('CalculaprecoComponent', () => {
  let component: CalculaprecoComponent;
  let fixture: ComponentFixture<CalculaprecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculaprecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculaprecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
