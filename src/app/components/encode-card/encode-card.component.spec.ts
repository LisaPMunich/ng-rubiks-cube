import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeCardComponent } from './encode-card.component';

describe('EncodeCardComponent', () => {
  let component: EncodeCardComponent;
  let fixture: ComponentFixture<EncodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncodeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
