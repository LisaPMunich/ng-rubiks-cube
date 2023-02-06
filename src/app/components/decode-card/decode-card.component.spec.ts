import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodeCardComponent } from './decode-card.component';

describe('DecodeCardComponent', () => {
  let component: DecodeCardComponent;
  let fixture: ComponentFixture<DecodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
