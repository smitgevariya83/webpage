import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadicatedComponent } from './dadicated.component';

describe('DadicatedComponent', () => {
  let component: DadicatedComponent;
  let fixture: ComponentFixture<DadicatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadicatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
