import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessProComponent } from './business-pro.component';

describe('BusinessProComponent', () => {
  let component: BusinessProComponent;
  let fixture: ComponentFixture<BusinessProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
