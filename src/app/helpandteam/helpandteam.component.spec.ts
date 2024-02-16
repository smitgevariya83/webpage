import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpandteamComponent } from './helpandteam.component';

describe('HelpandteamComponent', () => {
  let component: HelpandteamComponent;
  let fixture: ComponentFixture<HelpandteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpandteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpandteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
