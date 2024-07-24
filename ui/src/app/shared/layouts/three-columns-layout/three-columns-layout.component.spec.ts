import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnsLayoutComponent } from './three-columns-layout.component';

describe('ThreeColumnsLayoutComponent', () => {
  let component: ThreeColumnsLayoutComponent;
  let fixture: ComponentFixture<ThreeColumnsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeColumnsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeColumnsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
