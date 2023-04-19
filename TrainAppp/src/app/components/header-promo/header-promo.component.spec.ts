import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPromoComponent } from './header-promo.component';

describe('HeaderPromoComponent', () => {
  let component: HeaderPromoComponent;
  let fixture: ComponentFixture<HeaderPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPromoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
