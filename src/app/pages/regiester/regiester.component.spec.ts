import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiesterComponent } from './regiester.component';

describe('RegiesterComponent', () => {
  let component: RegiesterComponent;
  let fixture: ComponentFixture<RegiesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegiesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
