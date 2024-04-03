import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOrderDetailsComponent } from './public-order-details.component';

describe('PublicOrderDetailsComponent', () => {
  let component: PublicOrderDetailsComponent;
  let fixture: ComponentFixture<PublicOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
