import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCodeCreateComponent } from './promo-code-create.component';

describe('PromoCodeCreateComponent', () => {
  let component: PromoCodeCreateComponent;
  let fixture: ComponentFixture<PromoCodeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoCodeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCodeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
