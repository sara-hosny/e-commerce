import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoreisComponent } from './categoreis.component';

describe('CategoreisComponent', () => {
  let component: CategoreisComponent;
  let fixture: ComponentFixture<CategoreisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoreisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoreisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
