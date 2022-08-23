import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiffCardComponent } from './giff-card.component';

describe('GiffCardComponent', () => {
  let component: GiffCardComponent;
  let fixture: ComponentFixture<GiffCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiffCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiffCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
