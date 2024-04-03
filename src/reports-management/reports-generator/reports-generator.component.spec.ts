import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsGeneratorComponent } from './reports-generator.component';

describe('ReportsGeneratorComponent', () => {
  let component: ReportsGeneratorComponent;
  let fixture: ComponentFixture<ReportsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
