import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portafolio } from './portafolio';

describe('Portafolio', () => {
  let component: Portafolio;
  let fixture: ComponentFixture<Portafolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Portafolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portafolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
