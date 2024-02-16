import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwgComponent } from './wwg.component';

describe('WwgComponent', () => {
  let component: WwgComponent;
  let fixture: ComponentFixture<WwgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WwgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WwgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
