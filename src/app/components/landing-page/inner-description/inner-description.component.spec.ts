import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDescriptionComponent } from './inner-description.component';

describe('InnerDescriptionComponent', () => {
  let component: InnerDescriptionComponent;
  let fixture: ComponentFixture<InnerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
