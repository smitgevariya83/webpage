import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpresshostingComponent } from './wordpresshosting.component';

describe('WordpresshostingComponent', () => {
  let component: WordpresshostingComponent;
  let fixture: ComponentFixture<WordpresshostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordpresshostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordpresshostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
