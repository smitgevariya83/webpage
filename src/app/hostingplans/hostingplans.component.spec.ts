import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingplansComponent } from './hostingplans.component';

describe('HostingplansComponent', () => {
  let component: HostingplansComponent;
  let fixture: ComponentFixture<HostingplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostingplansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostingplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
