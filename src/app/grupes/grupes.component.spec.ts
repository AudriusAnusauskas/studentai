import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupesComponent } from './grupes.component';

describe('GrupesComponent', () => {
  let component: GrupesComponent;
  let fixture: ComponentFixture<GrupesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
