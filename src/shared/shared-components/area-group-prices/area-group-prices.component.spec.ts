import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaGroupPricesComponent } from './area-group-prices.component';

describe('AreaGroupPricesComponent', () => {
  let component: AreaGroupPricesComponent;
  let fixture: ComponentFixture<AreaGroupPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaGroupPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaGroupPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
