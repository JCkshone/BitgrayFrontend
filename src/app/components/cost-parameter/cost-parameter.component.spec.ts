import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostParameterComponent } from './cost-parameter.component';

describe('CostParameterComponent', () => {
  let component: CostParameterComponent;
  let fixture: ComponentFixture<CostParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
